package com.ordercart.order_and_cart_management.exception;


public class QuantityCannotBeZeroException extends RuntimeException {

  public QuantityCannotBeZeroException(String message){
    super(message);
  }
  
}
