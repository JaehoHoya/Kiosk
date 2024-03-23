package com.kiosk.order.Dto.Response;

import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;

import com.kiosk.order.Common.ResponseCode;
import com.kiosk.order.Common.ResponseMessage;

public class PostCategoryResponseDto extends ResponseDto {
    
    private PostCategoryResponseDto(){
        super(ResponseCode.SUCCESS,ResponseMessage.SUCCESS);

    }

    public static ResponseEntity<PostCategoryResponseDto> sucess(){
        PostCategoryResponseDto result = new PostCategoryResponseDto();
        return ResponseEntity.status(HttpStatus.OK).body(result);
    }

    public static ResponseEntity<ResponseDto> noPermission(){
        ResponseDto result =new ResponseDto(ResponseCode.NO_PERMISSION,ResponseMessage.NO_PERMISSION);
        return ResponseEntity.status(HttpStatus.FORBIDDEN).body(result);
    }
}
