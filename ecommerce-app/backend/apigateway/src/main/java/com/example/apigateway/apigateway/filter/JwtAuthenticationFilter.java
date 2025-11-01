package com.example.apigateway.apigateway.filter;

import org.springframework.cloud.gateway.filter.GatewayFilterChain;
import org.springframework.cloud.gateway.filter.GlobalFilter;
import org.springframework.core.annotation.Order;
import org.springframework.http.HttpHeaders;
import org.springframework.http.HttpStatus;
import org.springframework.stereotype.Component;
import org.springframework.web.server.ServerWebExchange;

import com.example.apigateway.apigateway.service.JwtService;

import reactor.core.publisher.Mono;

@Component
@Order
public class JwtAuthenticationFilter implements GlobalFilter {

  private final JwtService jwtService;

  public JwtAuthenticationFilter(JwtService jwtService){
    this.jwtService = jwtService;
  }
  
    @Override
    public Mono<Void> filter(ServerWebExchange exchange, GatewayFilterChain chain) {
        String path = exchange.getRequest().getPath().toString();
        if(path.startsWith("/api/v1/auth") || path.startsWith("/api/v1/products") || path.startsWith("/api/v1/admin/products") || path.startsWith("/health")  || path.startsWith("/api/v1/cart")){
          System.out.println(path);
          return chain.filter(exchange);
        }

        String authorizationHeader = exchange.getRequest().getHeaders().getFirst(HttpHeaders.AUTHORIZATION);
        if(authorizationHeader == null || !authorizationHeader.startsWith("Bearer ")){
          exchange.getResponse().setStatusCode(HttpStatus.UNAUTHORIZED);
          return exchange.getResponse().setComplete();
        }

        String token = authorizationHeader.substring(7);
        if(!jwtService.validateToken(token)){
          exchange.getResponse().setStatusCode(HttpStatus.UNAUTHORIZED);
          return exchange.getResponse().setComplete();
        }
        // httpHeaders.add("X-USER-ID", "a0247b4a-8e07-49c4-ac5d-f848d705e4e0");

        // String userId = jwtService.extractUserId(token);

        ServerWebExchange mutatedExchange = exchange.mutate()
                .request(builder -> {
                    // Remove any client-sent X-USER-ID and set our trusted value
                    builder.headers(httpHeaders -> {
                        httpHeaders.remove("X-USER-ID");
                        // if (userId != null) {
                            httpHeaders.add("X-USER-ID", "a0247b4a-8e07-49c4-ac5d-f848d705e4e0");
                        // }
                    });
                })
                .build();

        return chain.filter(exchange);
    }
  
}
