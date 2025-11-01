package com.training.user_authenthication.controller;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.security.access.prepost.PreAuthorize;
import org.springframework.security.config.annotation.method.configuration.EnableMethodSecurity;
import org.springframework.security.core.Authentication;
import org.springframework.security.core.context.SecurityContextHolder;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.training.user_authenthication.dao.SignUpRequest;
import com.training.user_authenthication.model.User;
import com.training.user_authenthication.service.AuthService;
import com.training.user_authenthication.service.UserService;


@RestController
@EnableMethodSecurity(prePostEnabled = true)
@RequestMapping("/api/v1/users")
public class UserController {

  private final UserService userService;
  private final AuthService authService = null;

  public UserController(UserService userService) {
      this.userService = userService;
  }

  @GetMapping
  public ResponseEntity<List<User>> getAllUsers() {
      List<User> users = this.userService.findAll();
      return ResponseEntity.ok(users);
  }
  // @GetMapping("/{email}")
  // public ResponseEntity<User> findByEmail(@PathVariable String email){
  //   Optional<User> user = this.userService.findByEmail(email);
  //   if (user.isPresent()) {
  //     return ResponseEntity.ok(user.get());
  //   } else {
  //     System.out.println("User not found");
  //     return ResponseEntity.notFound().build();
  //   }
  // }

  @PostMapping
  @PreAuthorize("hasRole('ADMIN')")
  public ResponseEntity<User> createUser(@RequestBody User user){
    // AuthResponse aunteResponse = AuthService.registerUser(user);
    this.authService.registerUser(
        new SignUpRequest(user.getName(), user.getEmail(), user.getPassword()));
    User createdUser = this.userService.findByEmail(user.getEmail()).orElseThrow();
    return ResponseEntity.ok(createdUser);
  }

  @GetMapping("/me")
  public ResponseEntity<User> findByEmail(){
    Authentication authentication = SecurityContextHolder.getContext().getAuthentication();
    User user = (User) authentication.getPrincipal();
    if(user==null){
      return ResponseEntity.status(HttpStatus.UNAUTHORIZED).build();
    }
    return ResponseEntity.ok(user);
  }

  @GetMapping("/{email}")
  public ResponseEntity<User> findByEmail(@PathVariable String email){
    Authentication authentication = SecurityContextHolder.getContext().getAuthentication();
    User user = (User) authentication.getPrincipal();
    if(user.equals(email)==false){
      return ResponseEntity.status(HttpStatus.UNAUTHORIZED).build();
    }
    return ResponseEntity.ok(user);
  }
}