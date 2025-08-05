package online.threadly.product.model;

import java.time.LocalDateTime;
import java.util.UUID;

import lombok.Data;
@Data
public class Product {

  private UUID id;
  private String name;
  private String description;
  private String slug;
  private String[] images;
  private String brand;
  private int stock;
  private Double price;
  private Double rating;
  private int ratingcount;
  private Boolean isFeatured;
  private LocalDateTime createdAt;

  public Product(UUID id, String name, String description, String slug, String[] images, String brand, int stock, Double price, Double rating, int ratingcount, Boolean isFeatured, LocalDateTime createdAt) {
    this.id = id;
    this.name = name;
    this.description = description;
    this.slug = slug;
    this.images = images;
    this.brand = brand;
    this.stock = stock;
    this.price = price;
    this.rating = rating;
    this.ratingcount = ratingcount;
    this.isFeatured = isFeatured;
    this.createdAt = createdAt;
  }
}
