package com.training.user_authenthication.filter;

import org.springframework.security.authentication.UsernamePasswordAuthenticationToken;
import org.springframework.security.core.Authentication;
import org.springframework.security.core.context.SecurityContextHolder;
import org.springframework.security.core.userdetails.UserDetails;
import org.springframework.security.core.userdetails.UserDetailsService;
import org.springframework.security.web.authentication.WebAuthenticationDetailsSource;
import org.springframework.stereotype.Component;
import org.springframework.web.filter.OncePerRequestFilter;

import com.training.user_authenthication.service.JWTService;

import io.jsonwebtoken.io.IOException;
import jakarta.servlet.FilterChain;
import jakarta.servlet.ServletException;
import jakarta.servlet.http.HttpServletRequest;
import jakarta.servlet.http.HttpServletResponse;
@Component
public class JwtAuthenticationFilter extends OncePerRequestFilter {

  private final JWTService jwtService;
  private final UserDetailsService userDetailsService;

  public JwtAuthenticationFilter(JWTService jwtService, UserDetailsService userDetailsService) {
    this.jwtService = jwtService;
    this.userDetailsService = userDetailsService;
  }

    @Override
    protected void doFilterInternal(HttpServletRequest request, HttpServletResponse response, FilterChain filterChain) throws ServletException, IOException, java.io.IOException {
      String authorizationHeader = request.getHeader("Authorization");

      if(authorizationHeader == null || !authorizationHeader.startsWith("Bearer ")){
        filterChain.doFilter(request, response);
        return;
      }

      try {
        String jwtToken = authorizationHeader.substring(7);
        String userEmail = jwtService.extractUsername(jwtToken);
  
        Authentication authentication = SecurityContextHolder.getContext().getAuthentication();
  
        if(userEmail!=null && authentication == null){
          UserDetails userdetails = userDetailsService.loadUserByUsername(userEmail);
          if(jwtService.isTokenValid(jwtToken, userdetails)){
            UsernamePasswordAuthenticationToken authToken = new UsernamePasswordAuthenticationToken(userdetails, null, userdetails.getAuthorities());
            authToken.setDetails(new WebAuthenticationDetailsSource().buildDetails(request));
            SecurityContextHolder.getContext().setAuthentication(authToken);
          }
        }
        filterChain.doFilter(request, response);
      } catch (Exception e) {
        System.out.println("Exception in JwtAuthenticationFilter: " + e.getMessage());
      }
    }

}
