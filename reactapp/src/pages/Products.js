import React from 'react'
import { useState,useEffect} from 'react';
import axios from 'axios';
import './NavAdmin';
import NavAdmin from './NavAdmin';
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

function Products() {

const [list, setList]=useState();

useEffect(()=>{
axios.get("http://localhost:8082/getcrackers")
.then((res)=>{
  setList(res.data);
});
},[]);

  return (
    <>
    <div style={{width:'100%'}} class="topnav">
    <NavAdmin/>
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
                  </div>
                </div>
                )
                )}
           </div>

    </>
  )
}

export default Products