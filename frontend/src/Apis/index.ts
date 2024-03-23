import axios from "axios";
import GetCategoryResponseDto from "./Response/Category/getCategoryResponse.dto";
import { ResponseDto } from "./Response";

const DOMAIN ='http://localhost:8080';
const API_DOMAIN =`${DOMAIN}/api/v1`;

const GET_CATEGORY_URL=()=>`${API_DOMAIN}/Kiosk/category-list`;

export const getCategoryRequest=async ()=>{
    const result=await axios.get(GET_CATEGORY_URL())
    .then(response=>{
        
        const responseBody:GetCategoryResponseDto=response.data;
       
        return responseBody;
        
    })
    .catch(error=>{
        
        if(!error.response)return null;
        const responseBody:ResponseDto=error.response.data;
        return responseBody;
    })
    
    return result;

}