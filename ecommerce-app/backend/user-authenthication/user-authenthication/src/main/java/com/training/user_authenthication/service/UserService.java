package com.training.user_authenthication.service;

import java.util.Optional;

import org.springframework.stereotype.Service;

import com.training.user_authenthication.model.User;
import com.training.user_authenthication.repository.UserRepository;
@Service
public class UserService {
  private final UserRepository userRepository;

  public UserService(UserRepository userRepository) {
      this.userRepository = userRepository;
  }

  public java.util.List<User> findAll() {
      return userRepository.findAll();
  }

  public Optional<User> findByEmail(String email) {
      return userRepository.findByEmail(email);
  }

    public User create(User user) {
        return userRepository.save(user);
    }

}
