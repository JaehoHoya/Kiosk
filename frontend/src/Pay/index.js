import React, { useEffect } from 'react';
import axios from 'axios';
import useOrderStore from '../store/order.store';

const Payment = () => {

  const{productName,productSize}=useOrderStore();
  useEffect(() => {
    const jquery = document.createElement("script");
    jquery.src = "http://code.jquery.com/jquery-1.12.4.min.js";
    const iamport = document.createElement("script");
    iamport.src = "http://cdn.iamport.kr/js/iamport.payment-1.1.7.js";
    document.head.appendChild(jquery);
    document.head.appendChild(iamport);
    return () => {
      document.head.removeChild(jquery);
      document.head.removeChild(iamport);
    };
  }, []);

  const requestPay = () => {
    const { IMP } = window;
    console.log("IMP 값: ", IMP);
    IMP.init('imp38808434');

    IMP.request_pay({
      pg: 'kakaopay.TC0ONETIME',
      pay_method: 'card',
      merchant_uid: new Date().getTime(),
      name:productSize,
      amount: 1000,
      
    }, async (rsp) => {
      try {
        const { data } = await axios.post('http://localhost:8080/verifyIamport/kakao' + rsp.imp_uid);
        if (rsp.paid_amount === data.response.amount) {
          alert('결제 성공');
          
        } else {
          alert('결제 실패');
       
        }
      } catch (error) {
        console.error('Error while verifying payment:', error);
        alert('결제 실패');
      }
    });
  };


  const requestPay2 = () => {
    const { IMP } = window;
    console.log("IMP 값: ", IMP);
    IMP.init('imp38808434');

    IMP.request_pay({
      pg: 'tosspay.tosstest',
      pay_method: 'card',
      merchant_uid: new Date().getTime(),
      name: '테스트 상품',
      amount: 1004,
      
    }, async (rsp) => {
      try {
        const { data } = await axios.post('http://localhost:8080/verifyIamport/toss' + rsp.imp_uid);
        if (rsp.paid_amount === data.response.amount) {
          alert('결제 성공');
          
        } else {
          alert('결제 실패');
       
        }
      } catch (error) {
        console.error('Error while verifying payment:', error);
        alert('결제 실패');
      }
    });
  };

  return (
    <>
    <div>
      <button onClick={requestPay}> 카카오 페이 결제하기 </button>
    </div>
    <div>
      <button onClick={requestPay2}> 토스페이 페이 결제하기 </button>
    </div>
    </>
  );
};

export default Payment;