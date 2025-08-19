package online.threadly.product.repository;

import java.util.UUID;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import online.threadly.product.model.Product;

@Repository
public interface ProductRepository extends JpaRepository<Product, UUID> {
  
}
