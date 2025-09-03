package com.begineer.demo.service;

public class GooglePay implements PaymentGateway{
  @Override
  public String pay(){
    return "Payment done with Googlepay";
  }
}
