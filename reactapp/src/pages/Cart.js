
import React from 'react'
import '../components/navbar.css';
import { useState,useEffect} from 'react';
import axios from 'axios';
import '../components/card.css';
import {useNavigate} from 'react-router-dom';
import Icon from "react-crud-icons";
import {v4 as uuid} from 'uuid';
import NavUser from './NavUser';

export default function Cart() {

    const [list, setList]=useState();

    let navigate=useNavigate();

  const deleteClick= async(event)=>
      {
  let qty;
  let orgqty;
  let dat;
  let pid;
  let val;
  let name;
  let price;
  let pimage;
  console.log(event.currentTarget.id);
  let itemid=event.currentTarget.id;
  await axios.get("http://localhost:8082/cart/"+itemid)
  .then(res=>{dat=res.data;});
  pid=dat.productid;
  qty=dat.quantity;
  await axios.get("http://localhost:8082/crackers/"+pid)
.then(res=>{
   val=res.data;
   name=val.crackername;
   price=val.crackerprice;
   pimage=val.crackerimage;
   orgqty=val.crackerquantity;
   orgqty=parseInt(orgqty)+parseInt(qty);
})

await axios.put(("http://localhost:8082/editcrackers/"+pid),
{
crackername: name,
crackerprice: price,
crackerimage : pimage,
crackerquantity : orgqty,
});

 await  axios.delete("http://localhost:8082/deletecart/"+itemid)
  .then(res=>{console.log(res.data);})
   window.location.reload();

      }


      useEffect(()=>{
        axios.get("http://localhost:8082/getcart")
        .then((res)=>{
          let cartdata=res.data;
          let listdata=[];
          let cid;
          let uid=parseInt(localStorage.getItem("uid"));
          for(let i=0;i< cartdata.length;i++){
               cid=parseInt(cartdata[i].users.id);
            if(cid === uid)
            { 
                listdata.push(cartdata[i]);
            }
        }
        setList(listdata);
        });
        },[]);

const placeOrder=async()=>{
  if(list.length>0){
    console.log(list);
    let uniqueid = uuid().slice(4,18);
    let orderid = uniqueid;
    let userid=parseInt(localStorage.getItem("uid"));
    let productname;
    let price;
    let quantity;
    for(let i=0;i<list.length;i++){
      productname=list[i].productname;
      price=list[i].price;
      quantity=list[i].quantity;
      await axios.post("http://localhost:8082/saveorders",
      {
        orderid: orderid,
        userid: userid,
        productname : productname,
        price : price,
        quantity : quantity,
        pay : false,
        });
    }
    axios.get("http://localhost:8082/getcart")
        .then((res)=>{
          let garbage=res.data;
          let usid=parseInt(localStorage.getItem("uid"));
          for(let i=0;i<garbage.length;i++){
            if(garbage[i].users.id===usid){
              let id=garbage[i].id;
              axios.delete("http://localhost:8082/deletecart/"+id);
            }
          }
        })
    alert('Bill generated.. !');
    navigate('/myorders');}
    else{
      alert('Your cart is empty... !');
    }
}


  return (
    <>
    <div style={{width:'100%'}} class="topnav">
     <NavUser/>
    </div>

    <div style={{backgroundColor: "skyblue",width:'78%'}}>
        <table style={{width: '100%'}}>
          <thead style={{backgroundColor:'#3f87a6',height: 40}}>
            <tr>
            <th>Product Name</th>
            <th>Price</th>
            <th>Quantity</th>
            <th style={{width:'80px'}}>Delete</th>
            </tr>
          </thead>
          <tbody style={{textAlign:'center'}}>
          {
              list && list.map((cart,i)=>(
                <tr style={{fontWeight:'bold'}}>
                  <td>{cart.productname}</td>
                  <td>${cart.price}</td>
                  <td>{cart.quantity}ps</td>
                  <td style={{cursor:'pointer'}}>{<Icon id={cart.id} name = "delete" tooltip = "Delete"  onClick = { deleteClick }></Icon>}</td>
                </tr>
                ))
            }
          </tbody>
        </table>
      </div>
    <div style={{float:'right',width:'18%',height:'10%',border:'3px solid black'}}>
    <button onClick={placeOrder} style={{ 
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
    >Place Order</button>
    </div>

    </>
  )
}
