package com.training.user_authenthication.controller;

import java.util.List;
import java.util.Optional;

import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.training.user_authenthication.model.User;
import com.training.user_authenthication.service.UserService;
@RestController
@RequestMapping("/api/v1/users")
public class UserController {

  private final UserService userService;

  public UserController(UserService userService) {
      this.userService = userService;
  }

  public 

  @GetMapping
  public ResponseEntity<List<User>> getAllUsers() {
      List<User> users = this.userService.findAll();
      return ResponseEntity.ok(users);
  }
  @GetMapping("/{email}")
  public ResponseEntity<User> findByEmail(@PathVariable String email){
    Optional<User> user = this.userService.findByEmail(email);
    if (user.isPresent()) {
      return ResponseEntity.ok(user.get());
    } else {
      System.out.println("User not found");
      return ResponseEntity.notFound().build();
    }
  }
}
