package com.kiosk.order.Service.Implement;

import java.util.ArrayList;
import java.util.List;

import org.springframework.http.ResponseEntity;
import org.springframework.stereotype.Service;

import com.kiosk.order.Dto.Request.PostCategoryRequestDto;
import com.kiosk.order.Dto.Response.GetCategoryResponseDto;
import com.kiosk.order.Dto.Response.PostCategoryResponseDto;
import com.kiosk.order.Dto.Response.ResponseDto;
import com.kiosk.order.Entity.CategoryEntity;
import com.kiosk.order.Repository.CategoryRepository;
import com.kiosk.order.Service.CategoryService;

import lombok.RequiredArgsConstructor;
@Service
@RequiredArgsConstructor
public class KioskService implements CategoryService{
    

    private final CategoryRepository categoryRepository;
    

    
    List<CategoryEntity> categoryEntities= new ArrayList<>();

    @Override
    public ResponseEntity<? super GetCategoryResponseDto> getCategoryList() {
        try {
            categoryEntities=categoryRepository.findAll();
            if (categoryEntities.isEmpty()) 
                return  GetCategoryResponseDto.noExistCategory();

        } catch (Exception exception) {
           exception.printStackTrace();
           return ResponseDto.databaseError();
        }
        return GetCategoryResponseDto.success(categoryEntities);
    }

    @Override
    public ResponseEntity<? super PostCategoryResponseDto> postCategory(PostCategoryRequestDto dto) {
        try {
            
            CategoryEntity categoryEntity =new CategoryEntity(dto);
            categoryRepository.save(categoryEntity);


        } catch (Exception exception) {
            exception.printStackTrace();
            return ResponseDto.databaseError();
        }
        return PostCategoryResponseDto.sucess();
    }

    

    }



    
