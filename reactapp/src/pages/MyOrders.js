import React from 'react'
import { useState,useEffect} from 'react';
import axios from 'axios';
import NavUser from './NavUser';
import Rate from './Rating';

function MyOrders() {



      let total=0;
      const [list, setList]=useState();
      useEffect(()=>{
        axios.get("http://localhost:8082/getorders")
        .then((res)=>{
          let orderdata=res.data;
          let listdata=[];
          let cid;
          let uid=parseInt(localStorage.getItem("uid"));               // iterate through orders list to find matching user id
          for(let i=0;i< orderdata.length;i++){
               cid=orderdata[i].userid;
            if(cid === uid)
            { 
                listdata.push(orderdata[i]);
                
            }
        }
        setList(listdata);
        });
        },[]);  

        try{
        if(list.length>0){
        for(let i=0;i<list.length;i++){
        total=total+parseInt(list[i].price);
        }}}
        catch(e){console.log(e);}


       const handlePay=async()=>{
              console.log(list);
        }

return (
    <>
    <div style={{width:'100%'}} class="topnav">
    <NavUser/>
    </div>

    <div style={{backgroundColor: "skyblue",width: '80%'}}>
        <table style={{width: '100%'}}>
          <thead style={{backgroundColor:'#3f87a6',height: 40}}>
            <tr>
            <th>Product Name</th>
            <th>Price</th>
            <th>Quantity</th>
            <th>Rating</th>
            </tr>
          </thead>
          <tbody style={{textAlign:'center'}}>
          {
              list && list.map((order,i)=>(
                <tr style={{fontWeight:'bold'}}>
                  <td>{order.productname}</td>
                  <td>${order.price}</td>
                  <td>{order.quantity}ps</td>
                  <td style={{width:"10%"}}>{<Rate id={order.productname}/>}</td>
                </tr>
                ))
            }
          </tbody>
        </table>
      </div>
      <h2 style={{float:'left'}}>TOTAL : ${total}</h2>
      <div style={{float:'right',width:'15%',height:'10%',border:'3px solid black'}}>
    <button onClick={handlePay}
    style={{ 
    backgroundColor: 'black',
    textAlign:'center',
    width:'100%',
    cursor:'pointer',
    height:'100%',
    color: 'white',
    paddingTop: '0.5rem',
    paddingBottom: '0.5rem',
    textTransform: 'uppercase',
    letterSpacing: '0.15rem',
    border: '1px solid white'}}
    >Pay</button>
    </div>

    </>
  )
}

export default MyOrders