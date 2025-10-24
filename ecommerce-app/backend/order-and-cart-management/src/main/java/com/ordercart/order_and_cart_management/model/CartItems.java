package com.ordercart.order_and_cart_management.model;

import java.util.UUID;

import jakarta.persistence.Column;
import jakarta.persistence.Entity;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.GenerationType;
import jakarta.persistence.Id;
import jakarta.persistence.JoinColumn;
import jakarta.persistence.ManyToOne;
import jakarta.persistence.Table;
import lombok.Data;

@Data
@Entity
@Table(name="cart_items")
public class CartItems {

  @Id
  @GeneratedValue(strategy=GenerationType.AUTO)
  private UUID id;

  @ManyToOne
  @JoinColumn(name="cart_id")
  private Cart cart;

  @Column(nullable=false)
  private UUID productId;

  @Column(nullable=false)
  private int quantity;
}
