package com.begineer.demo.service;

public class Phonepay implements PaymentGateway {
  @Override
  public String pay(){
    return "Payment done with Phone pay";
  }
}
