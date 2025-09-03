package com.practice.training.controller;

import com.practice.training.dao.Response;
import com.practice.training.model.Product;
import com.practice.training.service.ProductService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;
import java.util.UUID;

@RestController
@RequestMapping("/api/v1")
public class ProductController {

    @Autowired
    private ProductService productservice;

    // This has to be Admin API
    @PostMapping("/admin/products")
    public Product createProduct(@RequestBody Product product){
        System.out.println("Print my name");
        return productservice.createProduct(product);
    }

    @GetMapping("/products")
    public ResponseEntity<Response> getProduct() {
        var product = productservice.getProducts();
        if(product.isEmpty()){
            return ResponseEntity.status(HttpStatus.NOT_FOUND).body(new Response("Product not found",null));
        }
        return ResponseEntity.ok(new Response("Prduct fetch succesfully",product));
    }

    //localhost:8082/api/v1/products/id/238c5f49-b8ae-4dcc-ae4f-0921918fe281
    @GetMapping("/products/id/{id}")
    public ResponseEntity<Response> getProduct(@PathVariable UUID id) {
        Product product = productservice.getProduct(id);
        if(product==null){
            return ResponseEntity.status(HttpStatus.NOT_FOUND).body(new Response("Product not Found",null));
        }
        return ResponseEntity.ok(new Response("Product fetch succesfully",product));
    }

    @GetMapping("/products/slug/{slug}")
    public ResponseEntity<Response> getProductBySlug(@PathVariable String slug){
        Product product = productservice.getProductBySlug(slug);
        if(product==null){
            return ResponseEntity.status(HttpStatus.NOT_FOUND).body(new Response("Product not Found",null));
        }
        return ResponseEntity.ok(new Response("Product fetch succesfully",product));
    }
}
