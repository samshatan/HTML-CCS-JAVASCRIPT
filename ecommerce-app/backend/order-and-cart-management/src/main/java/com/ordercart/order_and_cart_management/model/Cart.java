package com.ordercart.order_and_cart_management.model;

import java.util.List;
import java.util.UUID;

import jakarta.persistence.CascadeType;
import jakarta.persistence.Column;
import jakarta.persistence.Entity;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.GenerationType;
import jakarta.persistence.Id;
import jakarta.persistence.OneToMany;
import jakarta.persistence.Table;
import lombok.Data;

@Data
@Entity
@Table(name="carts")
public class Cart {
  @Id
  @GeneratedValue(strategy = GenerationType.AUTO)
  private UUID id;

  @Column(nullable=false)
  private UUID userId;

  @OneToMany(mappedBy="cart", cascade= CascadeType.ALL)
  List<CartItems> items = new java.util.ArrayList<>();
}
