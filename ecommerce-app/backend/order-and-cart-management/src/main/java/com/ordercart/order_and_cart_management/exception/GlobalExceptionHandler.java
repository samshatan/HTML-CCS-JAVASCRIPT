package com.ordercart.order_and_cart_management.exception;

import java.time.LocalDateTime;
import java.util.HashMap;
import java.util.Map;

import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.ExceptionHandler;
import org.springframework.web.bind.annotation.RestControllerAdvice;

import jakarta.ws.rs.BadRequestException;

@RestControllerAdvice
public class GlobalExceptionHandler {

  private ResponseEntity<Map<String,Object>> buildResponse(HttpStatus status, String message){
    Map<String,Object> body = new HashMap<>();
    body.put("message", message);
    body.put("status", status.value());
    body.put("error", status.getReasonPhrase());
    body.put("timestamp", LocalDateTime.now());
    return new ResponseEntity<>(body, status);
  }


  @ExceptionHandler(BadRequestException.class)
  public ResponseEntity<Map<String,Object>> handleBadRequest(BadRequestException exception){
    return buildResponse(HttpStatus.BAD_REQUEST, exception.getMessage());
  }

  @ExceptionHandler(QuantityCannotBeZeroException.class)
  public ResponseEntity<Map<String,Object>> handleQuantityCannotBeZeroExceptionRequest(QuantityCannotBeZeroException exception){
    return buildResponse(HttpStatus.BAD_REQUEST, exception.getMessage());
  }


  @ExceptionHandler(Exception.class)
  public ResponseEntity<Map<String,Object>> handleException(Exception exception){
    return buildResponse(HttpStatus.INTERNAL_SERVER_ERROR, exception.getMessage());
  }
}
