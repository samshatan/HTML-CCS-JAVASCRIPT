package com.ordercart.order_and_cart_management.controller;

import java.util.UUID;

import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestHeader;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.ordercart.order_and_cart_management.dto.AddToCartResponse;
import com.ordercart.order_and_cart_management.dto.AddtoCartRequest;
import com.ordercart.order_and_cart_management.service.CartService;

import lombok.AllArgsConstructor;

@RestController
@RequestMapping("/api/v1/cart")
@AllArgsConstructor
public class CartController {
  private final CartService cartService;

  @PostMapping("/add")
  public ResponseEntity<AddToCartResponse> addItemToCart(@RequestHeader("X-USER-ID") UUID userId, @RequestBody AddtoCartRequest addtoCartRequest) {
    System.out.println("Adding item to cart for user: " + userId);
    System.out.println("Request body: " + addtoCartRequest.toString());
    AddToCartResponse response = cartService.addToCart(userId, addtoCartRequest);
    return ResponseEntity.ok(response);
  }
}
