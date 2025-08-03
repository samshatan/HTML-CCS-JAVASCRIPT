package com.begineer.demo.controller;

import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

@RestController
@RequestMapping("/service")
public class ServiceController {

  @GetMapping
  public String getServiceInfo(){
    return "Service Info";
  }

  @GetMapping("/web-development")
  public String webDevelopment(){
    return "Web Development";
  }

  @GetMapping("/mobile-development")
  public String mobileDevelopment(){
    return "Mobile Development";
  }
}
