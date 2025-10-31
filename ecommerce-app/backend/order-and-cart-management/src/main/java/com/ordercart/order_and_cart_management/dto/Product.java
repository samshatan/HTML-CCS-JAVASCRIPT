package com.ordercart.order_and_cart_management.dto;

import java.util.UUID;

import lombok.Data;

@Data
public class Product {

    private UUID id;

    private String name;

    private String slug;

    private String[] images;

    private Double price;

    private Integer quantity;
}
