package com.ordercart.order_and_cart_management.service;

import java.util.UUID;

import org.springframework.stereotype.Service;

import com.ordercart.order_and_cart_management.dto.AddToCartResponse;
import com.ordercart.order_and_cart_management.dto.AddtoCartRequest;
import com.ordercart.order_and_cart_management.exception.QuantityCannotBeZeroException;
import com.ordercart.order_and_cart_management.model.Cart;
import com.ordercart.order_and_cart_management.model.CartItems;
import com.ordercart.order_and_cart_management.repository.CartItemRepository;
import com.ordercart.order_and_cart_management.repository.CartRepository;

import jakarta.ws.rs.BadRequestException;
import lombok.AllArgsConstructor;

@Service
@AllArgsConstructor
public class CartService {
  private final CartRepository cartRepository;
  private final CartItemRepository cartItemRepository;

  public AddToCartResponse addToCart(UUID userId, AddtoCartRequest request){
    if(request == null || request.getQuantity() <= 0){
      throw new QuantityCannotBeZeroException("Quantity must be greater than zero");
    }

    Cart cart = cartRepository.findByUserId(userId).orElseGet(() -> {
      Cart newCart = new Cart();
      newCart.setUserId(userId);
      return cartRepository.save(newCart);
    });

    CartItems cartItems = cartItemRepository.findByCartIdAndProductId(cart.getId(), request.getProductId()).orElseGet(() -> {
      CartItems newCartItem = new CartItems();
      newCartItem.setCart(cart);
      newCartItem.setProductId(request.getProductId());
      newCartItem.setQuantity(0);
      return newCartItem;
    });

    cartItems.setQuantity(cartItems.getQuantity() + request.getQuantity());
    cartItemRepository.save(cartItems);

    return new AddToCartResponse("Product added to cart successfully", cart.getId());

  }
}
