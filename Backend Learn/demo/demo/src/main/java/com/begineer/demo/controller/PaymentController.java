package com.begineer.demo.controller;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;

import com.begineer.demo.service.PaymentService;

@RestController
@RequestMapping("/payment")
public class PaymentController {

  @Autowired
  PaymentService paymentservice;

  @PostMapping
  public String pay(@RequestParam String mode){
    return paymentservice.pay(mode);
  }
}
