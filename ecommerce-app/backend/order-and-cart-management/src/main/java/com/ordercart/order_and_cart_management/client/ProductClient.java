package com.ordercart.order_and_cart_management.client;

import java.util.List;
import java.util.UUID;

import org.springframework.cloud.openfeign.FeignClient;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;

import com.ordercart.order_and_cart_management.dto.Product;

@FeignClient(name="product-service", url= "https://localhost:8082/api/v1")
public interface ProductClient {

  @RequestMapping(method= RequestMethod.GET, value = "/products/bulk")
  List<Product> getProductsByIds(List<UUID> productIds);
}
