package com.kiosk.order.Controller;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.kiosk.order.Dto.Request.CartRequsetDto;
import com.kiosk.order.Dto.Request.PostCategoryRequestDto;
import com.kiosk.order.Dto.Response.GetCategoryResponseDto;
import com.kiosk.order.Dto.Response.PostCategoryResponseDto;
import com.kiosk.order.Service.Implement.CartServiceImpl;
import com.kiosk.order.Service.Implement.KioskService;

import jakarta.validation.Valid;
import lombok.RequiredArgsConstructor;

@RestController
@RequestMapping("/api/v1/Kiosk")
@RequiredArgsConstructor
public class KioskController {
    
    private final KioskService kioskService;
    @Autowired
    private CartServiceImpl cartService;
// 카테고리 정보 가져오기
@GetMapping("/category-list")
public ResponseEntity<? super GetCategoryResponseDto> getCategoryList(){
    ResponseEntity<? super GetCategoryResponseDto> response =kioskService.getCategoryList();
    return response;
}
//카테고리 추가 
@PostMapping("")
public ResponseEntity<? super PostCategoryResponseDto> postCategory(
    @RequestBody @Valid PostCategoryRequestDto requestBody
){
    ResponseEntity<? super PostCategoryResponseDto> response =kioskService.postCategory(requestBody);
    return response;
}
@PostMapping("/add-to-cart")
    public ResponseEntity<String> addToCart(@RequestBody CartRequsetDto cartRequestDto) {
        cartService.addToCart(cartRequestDto);
        return new ResponseEntity<>("Product added to cart successfully", HttpStatus.OK);
    }
  
  



}
