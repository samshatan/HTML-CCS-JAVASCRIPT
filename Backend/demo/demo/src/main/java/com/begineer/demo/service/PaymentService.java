package com.begineer.demo.service;

import org.springframework.stereotype.Service;

@Service
public class PaymentService {

  GooglePay gpay = new GooglePay();
  Phonepay ppay = new Phonepay();

  public String pay(String mode){
    if(mode.equals("phonepay")){
      return ppay.pay();
    }
    else if(mode.equals("gpay")){
      return gpay.pay();
    }
    else if(mode.equals("paytm")){
      return "Payment done using paytm";
    }
    else{
      return "Invalid payment mode";
    }
  }
}