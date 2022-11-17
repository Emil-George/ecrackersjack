import React from 'react'
import '../components/navbar.css';
import { useState,useEffect} from 'react';
import axios from 'axios';
import '../components/card.css';
import {useNavigate} from 'react-router-dom';
import {v4 as uuid} from 'uuid';
import NavUser from './NavUser';
import { FaStar } from "react-icons/fa";
import styled from 'styled-components';


const Container = styled.div`
   display: flex;
   justify-content: right;
   align-items: center;
   font-size: 100%;
`

const Radio = styled.input`
   display: none;
`

const Rating = styled.div`
   cursor: not-allowed;
`
let rate;



// import { useUserAuth } from "./UserAuthProvider";
function Home() {

  let navigate=useNavigate();
  // let userauth=useUserAuth();

const [list, setList]=useState();

//getting all cracker data to list

useEffect(()=>{
axios.get("http://localhost:8082/getcrackers")
.then((res)=>{
  setList(res.data);
});
},[]);




const handlebuy= async(event)=>{

  let id=parseInt(event.currentTarget.id);
let uid=parseInt(localStorage.getItem("uid"));
// console.log('id: ',id,'uid: ',uid);
let val;
let name;
let price;
let pimage;
let pquantity;
let uniqueid = uuid().slice(4,18);
let orderid = uniqueid;
await axios.get("http://localhost:8082/crackers/"+id)   //get particular cracker details
.then(res=>{
  val=res.data;
  name=val.crackername;
  price=val.crackerprice;
  pimage=val.crackerimage;
  pquantity = parseInt(val.crackerquantity);
})

//check if stock is available  , if yes save to orders and reduce stock

if(pquantity>0){

  try
  {
   await axios.post("http://localhost:8082/saveorders",
  {
  orderid : orderid,
  userid: uid,
  productname : name,
  price: price,
  quantity : 1,
  pay: false,
  });
    alert("Item Ordered !");

    pquantity=pquantity-1;

    await axios.put(("http://localhost:8082/editcrackers/"+id),
          {
          crackername: name,
          crackerprice: price,
          crackerimage : pimage,
          crackerquantity : pquantity,
          });

          navigate('/myorders');
  }
catch(err)
  {
    alert("Operation failed!");
  }
}
else{
  alert("Sorry! Item out of stock!..");
}

}




const handleCart= async(event)=>
    { 
let id=parseInt(event.currentTarget.id);
let uid=localStorage.getItem("uid");
uid=parseInt(uid);
let checker;
console.log('id: ',id,'uid: ',uid);
let val;
let name;
let price;
let pimage;
let pquantity;
await axios.get("http://localhost:8082/crackers/"+id)   
.then(res=>{
  val=res.data;
  name=val.crackername;
  price=val.crackerprice;
  pimage=val.crackerimage;
  pquantity = parseInt(val.crackerquantity);
  // console.log('val: ',val);
  // console.log('pquantity : ',pquantity);
})
let count=0;
let valu;
let flag=1;
let itemid;
let newprice;
await axios.get("http://localhost:8082/getcart")     //get cart data
.then(res=>{
  valu=res.data;
})

//check stock

if(pquantity>0){

// console.log('valu: ',valu,'itemid: ',itemid,'newprice: ',newprice);

for(let i=0;i< valu.length;i++){
 if((valu[i].users.id===uid) && (valu[i].productid === id)){
    checker=true;
  }
}
for(let i=0;i< valu.length;i++){
  if((valu[i].users.id===uid)){
    count=count+1;
   }
 }

  if(!checker){                                // if product is not already added to cart , add it
    if(parseInt(count) < 5){                 // max 5 items can be added

    try
    {
     await axios.post("http://localhost:8082/manytoone/"+uid,
    {

    productid: id,
    productname : name,
    quantity : 1,
    price: price,
    });
      alert("Item added !");

      pquantity=pquantity-1;

      await axios.put(("http://localhost:8082/editcrackers/"+id),
            {
            crackername: name,
            crackerprice: price,
            crackerimage : pimage,
            crackerquantity : pquantity,
            });
    }
  catch(err)
    {
      alert("Operation failed!");
    }  
  }
  else{
    alert("Cart Limit exceeded ! Maximum of 5 items can be added..");
  }
    }

while(checker){             // if product is already in cart, change price and quantity..
  
for(let i=0;i< valu.length;i++){
  if(valu[i].productid === id){
        flag=valu[i].quantity;
        flag=parseInt(flag)+1;
        itemid=valu[i].id;
        newprice=valu[i].price;
        newprice=parseInt(newprice)+parseInt(price);
        // axios.delete("http://localhost:8082/deletecart/"+itemid);

try
        {
         await axios.put(("http://localhost:8082/editcart/"+itemid+"/"+uid),
        {

        productid: id,
        productname : name,
        quantity : flag,
        price: newprice,
        });
          alert("Item added !");
          pquantity=pquantity-1;

          await axios.put(("http://localhost:8082/editcrackers/"+id),
                {
                crackername: name,
                crackerprice: price,
                crackerimage : pimage,
                crackerquantity : pquantity,
                });

          checker=false;
          break;
        }
    catch(err)
        {
          alert("Operation failed!");
          checker=false;
        }
      }
     }
  }
    }
    else{
      alert("Sorry! Item out of stock!..");
    }

    }

  return (
    <>
    <div style={{width:'100%'}} class="topnav">
    <NavUser/>
    </div>
          <div className="masonry" >
           {list && list.map((cracker,i)=>(
                <div key={i} className="mItem" >
                  <div className="card" >
                    
      <Container>({cracker.count})
      {[...Array(5)].map((item, index) => {
        rate=index;
        return (
          <label>
            <Radio
              type="radio"
              value={cracker.rating}
            />
            <Rating>
              <FaStar
                color={
                  rate < cracker.rating || rate === cracker.rating
                    ? "000"
                    : "rgb(192,192,192)"
                }
              />
            </Rating>
          </label>
        );
      })}
    </Container>

                    <img className="img" src={cracker.crackerimage} alt=""  style={{ width: 200, height: 200 }}/>
                    <h1 className="title">{cracker.crackername}</h1>
                    <h1 className="price">
                     $ {cracker.crackerprice}
                    </h1>
                    <p>
                      <button id={cracker.id}  onClick = {handleCart}>
                        Add to Cart
                      </button>
                      <button id={cracker.id}  onClick = {handlebuy}>
                        Buy Now
                      </button>
                    </p>
                  </div>
                </div>
                )
                )}
           </div>
      
      </>
  )
}

export default Home