package com.kiosk.order.Entity;

import jakarta.persistence.Entity;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.GenerationType;
import jakarta.persistence.Id;
import jakarta.persistence.Table;
import lombok.AllArgsConstructor;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;
@Getter
@Setter
@NoArgsConstructor
@AllArgsConstructor

@Entity(name="cart")
@Table(name="cart")
public class CartEntity {
    
    @Id @GeneratedValue(strategy = GenerationType.IDENTITY)
    private int cartId;
    private int productId;
    private String cartProductName;
    private String cartProductSize;
    private String cartProductTemperature;
    private int productAmount;
    


}


