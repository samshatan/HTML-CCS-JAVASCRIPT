package com.training.user_authenthication.service;

import org.springframework.security.authentication.AuthenticationManager;
import org.springframework.security.authentication.UsernamePasswordAuthenticationToken;
import org.springframework.security.crypto.password.PasswordEncoder;
import org.springframework.stereotype.Service;

import com.training.user_authenthication.dao.AuthResponse;
import com.training.user_authenthication.dao.SignInRequest;
import com.training.user_authenthication.dao.SignUpRequest;
import com.training.user_authenthication.model.User;
import com.training.user_authenthication.repository.UserRepository;

@Service
public class AuthService {

  private final UserRepository userRepository;
  private final JWTService jwtService;
  private final PasswordEncoder passwordEncoder;
  private final AuthenticationManager authenticationManager;

  public AuthService(UserRepository userRepository, JWTService jwtService, PasswordEncoder passwordEncoder, AuthenticationManager authenticationManager) {
    this.userRepository = userRepository;
    this.jwtService = jwtService;
    this.passwordEncoder = passwordEncoder;
    this.authenticationManager = authenticationManager;
  }

  public AuthResponse registerUser(SignUpRequest signUpRequest){
    User user = User.builder()
      .name(signUpRequest.getName())
      .email(signUpRequest.getEmail())
      .password(passwordEncoder.encode(signUpRequest.getPassword()))
      .build();

    userRepository.save(user);
    String jwtToken = jwtService.generateToken(user);
    return new AuthResponse(jwtToken);
  }

  public AuthResponse authenticate(SignInRequest signInRequest){
    authenticationManager.authenticate(
      new UsernamePasswordAuthenticationToken(
        signInRequest.getEmail(),
        signInRequest.getPassword()
      )
    );
    User user = userRepository.findByEmail(signInRequest.getEmail())
      .orElseThrow();
    String jwtToken = jwtService.generateToken(user);
    return new AuthResponse(jwtToken);
  }
}