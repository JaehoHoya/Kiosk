package com.kiosk.order.Dto.Request;

import jakarta.validation.constraints.NotBlank;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;
@Getter
@Setter
@NoArgsConstructor
public class PostCategoryRequestDto {
    
    
    @NotBlank
    private String categoryName;
}
