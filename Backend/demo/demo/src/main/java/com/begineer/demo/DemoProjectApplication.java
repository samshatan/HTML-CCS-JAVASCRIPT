package com.begineer.demo;

import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;

@SpringBootApplication
public class DemoProjectApplication {

	public static void main(String[] args) {
		System.out.println("My first Spring Boot Application");
		SpringApplication.run(DemoProjectApplication.class, args);
	}

}
