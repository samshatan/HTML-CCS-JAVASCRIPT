package com.training.user_authenthication.service;

import org.springframework.stereotype.Service;

import com.training.user_authenthication.dao.AuthResponse;
import com.training.user_authenthication.dao.SignUpRequest;
import com.training.user_authenthication.model.User;
import com.training.user_authenthication.repository.UserRepository;

@Service
public class AuthService {

  private final UserRepository userRepository;
  private final JWTService jwtService;

  public AuthService(UserRepository userRepository, JWTService jwtService) {
    this.userRepository = userRepository;
    this.jwtService = jwtService;
  }

  public AuthResponse registerUser(SignUpRequest signUpRequest){
    User user = User.builder()
      .name(signUpRequest.getName())
      .email(signUpRequest.getEmail())
      .password(signUpRequest.getPassword())
      .build();

    userRepository.save(user);
    String jwtToken = jwtService.generateToken(user);
    return new AuthResponse(jwtToken);
  }
}
