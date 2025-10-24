package com.ordercart.order_and_cart_management.dto;

import java.util.UUID;

import lombok.AllArgsConstructor;
import lombok.Data;

@Data
@AllArgsConstructor
public class AddToCartResponse {
  private String message;
  private UUID cartId;
}
