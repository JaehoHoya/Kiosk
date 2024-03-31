package com.kiosk.order.Service;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.stereotype.Service;
import java.util.List;
import com.kiosk.order.Dto.Request.PostOrderProductRequestDto;
import com.kiosk.order.Entity.OrderProductEntity;
import com.kiosk.order.Entity.OrdersEntity;
import com.kiosk.order.Repository.OrderProductRepository;

@Service
public interface OrderProductService {

    ResponseEntity postOrderProduct(List<PostOrderProductRequestDto> dtoList);
    

    
}
