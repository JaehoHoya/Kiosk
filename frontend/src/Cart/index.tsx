import React from 'react'
import useOrderStore from '../store/order.store'

function Cart() {
    const{productTemp,productSize}=useOrderStore();
  return (
    <div>
      장바구니 전역state: 온도:{productTemp} 사이즈:{productSize}
      
    </div>
  )

}

export default Cart
