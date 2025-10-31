package com.ordercart.order_and_cart_management.service;

import java.util.List;
import java.util.UUID;

import org.apache.coyote.BadRequestException;
import org.springframework.stereotype.Service;

import com.ordercart.order_and_cart_management.client.ProductClient;
import com.ordercart.order_and_cart_management.dto.AddToCartResponse;
import com.ordercart.order_and_cart_management.dto.AddtoCartRequest;
import com.ordercart.order_and_cart_management.dto.CartResponse;
import com.ordercart.order_and_cart_management.dto.Product;
import com.ordercart.order_and_cart_management.exception.QuantityCannotBeZeroException;
import com.ordercart.order_and_cart_management.model.Cart;
import com.ordercart.order_and_cart_management.model.CartItems;
import com.ordercart.order_and_cart_management.repository.CartItemRepository;
import com.ordercart.order_and_cart_management.repository.CartRepository;

import lombok.AllArgsConstructor;

@Service
@AllArgsConstructor
public class CartService {
  private final CartRepository cartRepository;
  private final CartItemRepository cartItemRepository;
  private final ProductClient productClient;

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

  public CartResponse getCartforUser(UUID userId){
    Cart cart = cartRepository.findByUserId(userId)
        .orElseThrow(() -> new RuntimeException("Cart not found for user"));

    List<CartItems> cartItems = cartItemRepository.findAllByCartId(cart.getId());
    List<UUID> productIds = cartItems.stream().map(CartItems::getProductId).toList();
    List<Product> products = productClient.getProductsByIds(productIds);

    CartResponse cartResponse = new CartResponse();
    Double totalAmount = 0.0;
    for(CartItems cartItem: cartItems){
      for(Product product : products){
        if(cartItem.getProductId().equals(product.getId())){
          product.setQuantity(cartItem.getQuantity());
          totalAmount += product.getPrice() * cartItem.getQuantity();
        }
      }
    }
    cartResponse.setProducts(products);
    cartResponse.setTotalAmount(totalAmount);
    return cartResponse;
  }
}
