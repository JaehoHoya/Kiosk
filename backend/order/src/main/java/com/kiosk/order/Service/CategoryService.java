package com.kiosk.order.Service;

import org.springframework.http.ResponseEntity;

import com.kiosk.order.Dto.Request.PostCategoryRequestDto;
import com.kiosk.order.Dto.Response.GetCategoryResponseDto;
import com.kiosk.order.Dto.Response.PostCategoryResponseDto;

public interface CategoryService {
 
    ResponseEntity<? super GetCategoryResponseDto> getCategoryList();
    ResponseEntity<? super PostCategoryResponseDto> postCategory(PostCategoryRequestDto dto);

    
}
