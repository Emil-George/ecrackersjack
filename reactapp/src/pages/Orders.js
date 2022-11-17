import React from 'react'

import { useState} from 'react';
import axios from 'axios';
import NavAdmin from './NavAdmin';

function Orders() {



const [ordersu, setOrdersu]=useState();


axios.get("http://localhost:8082/getorders")
.then((res)=>{
  setOrdersu(res.data);
});


  return (

    <>
    <div style={{width:'100%'}} class="topnav">
     <NavAdmin/>
      </div>


    <div style={{backgroundColor: "skyblue"}}>
        <table style={{width: '100%'}}>
          <thead style={{backgroundColor:'#3f87a6',height: 40}}>
            <tr>
            <th>Order Id</th>
            <th>User Id</th>
            <th>Product Name</th>
            <th>Price</th>
            <th>Quantity</th>
            </tr>
          </thead>
          <tbody style={{textAlign:'center'}}>
          {
             ordersu && ordersu.map((orders,i)=>(
                <tr style={{fontWeight:'bold'}}>
                  <td>{orders.orderid}</td>
                  <td>{orders.userid}</td>
                  <td>{orders.productname}</td>
                  <td>${orders.price}</td>
                  <td>{orders.quantity}ps</td>
                </tr>
                ))
            }
          </tbody>
        </table>
      </div>


    </>
  )
}

export default Orders