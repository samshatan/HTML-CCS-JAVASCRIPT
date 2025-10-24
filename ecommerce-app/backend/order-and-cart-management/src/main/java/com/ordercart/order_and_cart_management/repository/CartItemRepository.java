package com.ordercart.order_and_cart_management.repository;

import java.util.Optional;
import java.util.UUID;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import com.ordercart.order_and_cart_management.model.CartItems;

@Repository
public interface CartItemRepository extends JpaRepository<CartItems, UUID> {
  Optional<CartItems> findByCartIdAndProductId(UUID cartId, UUID productId);
}
