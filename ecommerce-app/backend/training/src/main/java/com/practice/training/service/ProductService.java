package com.practice.training.service;

import com.practice.training.model.Product;
import com.practice.training.repository.ProductRepository;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.stereotype.Service;

import javax.swing.text.html.Option;

import java.time.LocalDateTime;
import java.util.List;
import java.util.Optional;
import java.util.UUID;

import jakarta.ws.rs.BadRequestException;

@Service
public class ProductService {

    @Autowired
    private ProductRepository productRepository;

    public Product createProduct(Product product){
        return productRepository.save(product);
    }

    public List<Product> getProducts() {
        return productRepository.findAll();
    }

    // SELECT * FROM product WHERE id = id;
    public Product getProduct(UUID id){
//        Optional<Product> product = productRepository.findById(id);
//        if(product.isPresent()){
//            return product.get();
//        }
//        return null;

        return productRepository.findById(id).orElse(null); // functional programming
    }

    // SELECT * FROM product WHERE slug = 'galaxy-s25-ultra';
    public Product getProductBySlug(String slug){
        return productRepository.findBySlug(slug).orElse(null);
    }


    public List<Product> getAllProductsByProductsIds(List<UUID> productIds){
        if(productIds.isEmpty()){
            throw new BadRequestException("Product cannot be empty");
        }
        return productRepository.findAllById(productIds);
    }
}