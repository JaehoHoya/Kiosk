import { create } from "zustand";


interface Orderstore{
  
    productName:string;
    productSize:string;
    productTemp:string;
    setProductName:(productName:string)=>void;
    setProductSize:(productSize:string)=>void;
    setProductTemp:(productTemp:string)=>void;
    setProduct:()=>void;
    

}

const useOrderStore=create<Orderstore>(set=>({
   

    productName: "",
    productSize: "",
    productTemp: "",
    setProductName:(productName)=>set(state=>({...state,productName})),
    setProductSize:(productSize)=>set(state=>({...state,productSize})),
    setProductTemp:(productTemp)=>set(state=>({...state,productTemp})),
    setProduct:()=>set(state=>({...state,productSize:"",productTemp:""})),
    

}));

export default useOrderStore;

// 수량 가격 
//배열로 받든... 담기를누르면 카트에 또 담기를 누르면 기존거랑 새로 등록된거 
//오늘 모든 버튼 구현 가격 증가 및 개수 전달 => 담기 하면 카트에 
// 또한 카트에서 각 상품에 대한 총 가격 및 전체삭제 하나 삭제 
// 스토어에 정보 있을경우 cart랜더링 
// 메뉴선텍시에만  옵션랜더링
// 담기를 눌러야 삭제 
//시간 남으면 옵션랜더링부분에서 x 버튼 구현해서 state초기화 
