package online.threadly.product.model;

import java.time.LocalDateTime;
import java.util.UUID;

import jakarta.persistence.Entity;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.GenerationType;
import jakarta.persistence.Id;
import lombok.Data;

@Entity
@Data
public class Product {

  @Id
  @GeneratedValue(strategy = GenerationType.AUTO)
  private UUID id;
  private String name;
  private String description;
  private String slug;
  // Consider using @ElementCollection or @Lob for images if needed
  private String[] images;
  private String brand;
  private int stock;
  private Double price;
  private Double rating;
  private int ratingcount;
  private Boolean isFeatured;
  private LocalDateTime createdAt;

  public Product() {
    // No-args constructor required by JPA
  }

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
