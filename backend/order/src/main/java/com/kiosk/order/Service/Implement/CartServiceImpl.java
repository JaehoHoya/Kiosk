package com.kiosk.order.Service.Implement;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.kiosk.order.Dto.Request.CartRequsetDto;
import com.kiosk.order.Entity.CartEntity;
import com.kiosk.order.Entity.ProductEntity;
import com.kiosk.order.Repository.CartRepository;
import com.kiosk.order.Repository.ProductRepository;

@Service
public class CartServiceImpl {
    
    @Autowired
    private CartRepository cartRepository;

    @Autowired
    private ProductRepository productRepository;
    
    public void addToCart(CartRequsetDto cartRequestDto) {
        ProductEntity product = productRepository.findById(cartRequestDto.getProductId()).orElseThrow();
        
        CartEntity cartEntity = new CartEntity();
        cartEntity.setProductId(cartRequestDto.getProductId()); // 상품 번호 설정
        cartEntity.setCartProductName(product.getProductName()); // 상품 이름 설정
        cartEntity.setCartProductSize(cartRequestDto.getCartProductSize());
        cartEntity.setCartProductTemperature(cartRequestDto.getCartProductTemperature());
        cartEntity.setProductAmount(cartRequestDto.getProductAmount());
        
        // Save cartEntity to cartRepository
        // You can further manipulate cartEntity if needed before saving
        cartRepository.save(cartEntity);
    }
}

