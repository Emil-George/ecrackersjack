import axios from "axios";
import React, { useState } from "react";
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
   cursor: pointer;
`



const Rate = (props) => {
  const [rate, setRate] = useState(0);
  const uid=parseInt(localStorage.getItem("uid"));

  const handleClick=async(cname,rating)=>{
    
    let absrating=0;
    let divisor=0;
    let flag=false;
    let crackerid=await axios.get("http://localhost:8082/crackername/"+cname);
    let rdata=await axios.get("http://localhost:8082/getrating");
    
    let pname=crackerid.data.crackername;
    let pprice=crackerid.data.crackerprice;
    let pimage=crackerid.data.crackerimage;
    let pquantity=crackerid.data.crackerquantity;


    for(let i=0;i<rdata.data.length;i++){
      if(rdata.data[i].crackers.id===crackerid.data.id && rdata.data[i].users.id===uid){
        await axios.put("http://localhost:8082/editrating/"+rdata.data[i].id+"/"+uid+"/"+crackerid.data.id+"/"+rating);
        flag=true;
        alert("Rating updated");
      }
    }
    if(!flag){
      await axios.post("http://localhost:8082/rating/"+uid+"/"+crackerid.data.id+"/"+rating);
      alert("Rating added");
    }


    rdata=await axios.get("http://localhost:8082/getrating");
    for(let i=0;i<rdata.data.length;i++){
      if(rdata.data[i].crackers.id===crackerid.data.id){
            absrating=absrating+rdata.data[i].star;
            divisor=divisor+1;
      }
    }
    if(absrating){
      // console.log(absrating);
      // console.log(divisor);
    absrating=parseInt(absrating/divisor);
  }

    await axios.put(("http://localhost:8082/editcrackers/"+crackerid.data.id),
    {
    crackername: pname,
    crackerprice: pprice,
    crackerimage : pimage,
    crackerquantity : pquantity,
    rating : absrating,
    count : divisor,
    });




    }

  return (
    <Container>
      {[...Array(5)].map((item, index) => {
        const givenRating = index + 1;
        return (
          <label>
            <Radio
              type="radio"
              value={givenRating}
              onClick={() => {
                setRate(givenRating);
                handleClick(props.id,givenRating);
              }}
            />
            <Rating>
              <FaStar
                color={
                  givenRating < rate || givenRating === rate
                    ? "000"
                    : "rgb(192,192,192)"
                }
              />
            </Rating>
          </label>
        );
      })}
    </Container>
  );
};
  
export default Rate;
