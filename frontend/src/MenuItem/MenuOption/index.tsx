import React, { useEffect, useState } from 'react';
import './style.css';
import useOrderStore from '../../store/order.store';


interface Product {
  productId: number;
  productName: string;
  productImage: string;
  productPrice: number;
  productHasHot: boolean;
  productHasIce: boolean;
  productHasLarge: boolean;
  productHasMedium: boolean;
  productHasSmall: boolean;
  
}

interface MenuOptionProps {
  product: Product | null;
}



interface OptionProps extends MenuOptionProps  {
  handleTempButtonClick: (temp: string) => void;
  handleSizeButtonClick:(size:string)=>void;
}



function MenuOption({ product }: MenuOptionProps) {

const[selectedTemp,setSelectedTemp]=useState("")
const[selectedSize,setSelectedSize]=useState("");
const[amount,setAmount]=useState(1);

const {productTemp,setProductTemp ,productSize,setProductSize} = useOrderStore();

useEffect(() => {
  setProductTemp(selectedTemp)
  setProductSize(selectedSize)
}, [selectedTemp,selectedSize,setProductTemp,setProductSize]); // selectedTemp가 변경될 때마다 useEffect 실행

  if (!product) {
    return null; // 선택된 상품이 없을 경우 아무것도 렌더링하지 않음
  }
  const handleTempButtonClick = (temp: string) => {
    setSelectedTemp(temp);

  };
  const handleSizeButtonClick = (size: string) => {
    setSelectedSize(size);

  };

  const increaseAmount = () => {
    if(amount<10)
    setAmount(amount + 1);
  };

  const decreaseAmount = () => {
    if (amount > 1) {
      setAmount(amount - 1);
    }
  };

  return (

    <div className='wrap'>
      <div className='contents'>
        {product.productName}
        {product.productPrice}
        <div className='optionWrap'>
        <Option product={product} handleTempButtonClick={handleTempButtonClick} handleSizeButtonClick={handleSizeButtonClick}/>
        
       </div>
      </div>
      <div>
      <button onClick={decreaseAmount}>-</button> {/* 수량 감소 버튼 */}
          <span>{amount}</span> {/* 현재 수량 표시 */}
          <button onClick={increaseAmount}>+</button> {/* 수량 증가 버튼 */}
      </div>
      <button className='addButton'>담기</button>
    </div>
    
  )
}



function Option({product,handleTempButtonClick,handleSizeButtonClick}:OptionProps){
  
  return(
    <>
    {product?.productHasHot&&
     <button onClick={() => handleTempButtonClick("hot")}>HOT</button>
    }
    {product?.productHasSmall&&
     <button onClick={() => handleTempButtonClick("ice")}>ICE</button>
    }
    {product?.productHasLarge&&
     <button onClick={() => handleSizeButtonClick("large")}>LARGE</button>
    }
    {product?.productHasMedium&&
     <button onClick={() => handleSizeButtonClick("medium")}>MEDIUM</button>
    }
    {product?.productHasSmall&&
     <button onClick={() => handleSizeButtonClick("samll")}>SMALL</button>
    }
    
    </>
  );
}



export default MenuOption
