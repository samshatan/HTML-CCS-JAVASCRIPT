package online.threadly.product.service;

import java.time.LocalDateTime;
import java.util.List;
import java.util.UUID;

import org.springframework.stereotype.Service;

import online.threadly.product.model.Product;

@Service
public class ProductService {
  public List<Product> getAllProducts() {
    // Logic to retrieve all products
    return List.of(
      new Product(UUID.randomUUID(), "Product 1", "Description 1", "product-1", new String[]{"image1.jpg"}, "Brand A", 10, 99.99, 4.5, 100, true, LocalDateTime.now()),
      new Product(UUID.randomUUID(), "Product 2", "Description 2", "product-2", new String[]{"image2.jpg"}, "Brand B", 5, 49.99, 4.0, 50, false, LocalDateTime.now()),
      new Product(UUID.randomUUID(), "Product 3", "Description 3", "product-3", new String[]{"image3.jpg"}, "Brand C", 20, 19.99, 4.8, 200, true, LocalDateTime.now()),
      new Product(UUID.randomUUID(), "Product 4", "Description 4", "product-4", new String[]{"image4.jpg"}, "Brand D", 15, 29.99, 3.5, 30, false, LocalDateTime.now()),
      new Product(UUID.randomUUID(), "Product 5", "Description 5", "product-5", new String[]{"image5.jpg"}, "Brand E", 8, 59.99, 4.2, 80, true, LocalDateTime.now())
    );
  }
}
