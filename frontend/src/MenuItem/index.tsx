
import styles from './style.module.css'
import MenuOption from './MenuOption';
import { useState } from 'react';


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

interface ProductsProps {
  products: Product[];
}


export default function MenuItem({products}:ProductsProps){

//state: 메뉴 옵션 보기 상태
const [selectedProduct, setSelectedProduct] = useState<Product | null>(null);
const handleProductClick = (productId: number) => {
  const clickedProduct = products.find(product => product.productId === productId);
  if (clickedProduct) {
    setSelectedProduct(clickedProduct);
  }
};

//event handler: 메뉴 옵션 상자보기 클릭 이벤트 처리 

    return(
        <>
        <div className={styles.menuContainer} >
         
        { products.map((item,key)=>(
        <div className={styles.menuItem}key={key} onClick={() => handleProductClick(item.productId)} >
          <img src={item.productImage} alt={item.productName} />
      <span>{item.productName}</span>
      <span>{`${item.productPrice}원`}</span>
      </div>
       ))}
       <MenuOption product={selectedProduct} />
       </div>
      
        </>
    );
}