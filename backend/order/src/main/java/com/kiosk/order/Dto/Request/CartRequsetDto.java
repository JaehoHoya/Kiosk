package com.kiosk.order.Dto.Request;

import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;


@Data
@AllArgsConstructor
@NoArgsConstructor
public class CartRequsetDto {


    private int productId;
    private String cartProductSize;
    private String cartProductTemperature;
    private int productAmount;
   
    public CartRequsetDto(int productId,CartRequsetDto dto){
     
        this.productId = productId;
        this.cartProductSize = dto.getCartProductSize();
        this.cartProductTemperature = dto.getCartProductTemperature();
        this.productAmount = dto.getProductAmount();


    }
}
