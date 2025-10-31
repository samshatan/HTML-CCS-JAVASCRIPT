package com.ordercart.order_and_cart_management.dto;

import java.util.UUID;

import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;

@Data
@AllArgsConstructor
@NoArgsConstructor
public class AddtoCartRequest {
  private UUID productId;
  private int quantity;
}
