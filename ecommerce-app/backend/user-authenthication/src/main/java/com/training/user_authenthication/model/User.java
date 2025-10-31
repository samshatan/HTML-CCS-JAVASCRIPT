package com.training.user_authenthication.model;

import java.time.LocalDateTime;
import java.util.Collection;
import java.util.List;
import java.util.UUID;

import org.springframework.security.config.annotation.method.configuration.EnableMethodSecurity;
import org.springframework.security.core.GrantedAuthority;
import org.springframework.security.core.authority.SimpleGrantedAuthority;
import org.springframework.security.core.userdetails.UserDetails;

import jakarta.persistence.Column;
import jakarta.persistence.Entity;
import jakarta.persistence.EnumType;
import jakarta.persistence.Enumerated;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.Id;
import jakarta.persistence.PrePersist;
import jakarta.persistence.Table;
import lombok.AllArgsConstructor;
import lombok.Builder;
import lombok.Data;
import lombok.NoArgsConstructor;

@Data
@AllArgsConstructor
@NoArgsConstructor
@EnableMethodSecurity
@Entity
@Builder
@Table(name = "users")
public class User implements UserDetails {

  @Id
  @GeneratedValue(generator = "UUID")
  @Column(name = "id", updatable = false, nullable = false)
  private UUID id;

  @Column(nullable=false)
  private String name;

  @Column(unique = true)
  private String email;


  @Column(nullable=false)
  private String password;

  private String phone;

  private String address;

  @Enumerated(EnumType.STRING)
  private Role role = Role.USER;

  @Column(updatable=false, nullable=false)
  private LocalDateTime createdAt;

  @PrePersist
    protected void onCreate(){
      System.out.println("User created ");
      this.createdAt = LocalDateTime.now();
      if (this.role == null) {
        this.role = Role.USER;
    }
    }

  @Override
  public Collection<? extends GrantedAuthority> getAuthorities() {
      return List.of(new SimpleGrantedAuthority("ROLE "+ this.role.name()));
  }

  @Override
  public String getPassword() {
      return this.password;
  }

  @Override
  public String getUsername() {
      return this.email;
  }

  @Override
  public boolean isAccountNonExpired() {
      return true;
  }

  @Override
  public boolean isAccountNonLocked() {
      return true;
  }

  @Override
  public boolean isCredentialsNonExpired() {
      return true;
  }

  @Override
  public boolean isEnabled() {
      return true;
  }

    public Object getId() {
        throw new UnsupportedOperationException("Not supported yet.");
    }
}