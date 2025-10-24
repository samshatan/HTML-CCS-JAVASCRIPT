package com.ordercart.order_and_cart_management.repository;

import java.util.UUID;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import com.ordercart.order_and_cart_management.model.Cart;
import java.util.Optional;

@Repository
public interface CartRepository extends JpaRepository<Cart, UUID> {
  Optional<Cart> findByUserId(UUID userId);
}
