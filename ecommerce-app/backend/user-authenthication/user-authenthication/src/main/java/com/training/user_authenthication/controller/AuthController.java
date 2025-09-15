package com.training.user_authenthication.controller;

import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.training.user_authenthication.dao.AuthResponse;
import com.training.user_authenthication.dao.SignInRequest;
import com.training.user_authenthication.dao.SignUpRequest;
import com.training.user_authenthication.service.AuthService;

@RestController
@RequestMapping("/api/v1/auth")
public class AuthController {

  private final AuthService authService;

  public AuthController(AuthService authService) {
    this.authService = authService;
  }

  @PostMapping("/signup")
  public ResponseEntity<AuthResponse> registerUser(@RequestBody SignUpRequest signUpRequest){
    AuthResponse authResponse = authService.registerUser(signUpRequest);
    return ResponseEntity.ok(authResponse);
  }

  @PostMapping("/login")
  public ResponseEntity<AuthResponse> loginUser(@RequestBody SignInRequest signInRequest){
    return ResponseEntity.ok(authService.authenticate(signInRequest));
  }
}
