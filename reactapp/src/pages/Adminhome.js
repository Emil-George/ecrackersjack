import React from 'react'
import '../components/navbar.css';
import { useState,useEffect} from 'react';
import axios from 'axios';
import '../components/registration.css';
import Icon from "react-crud-icons";
import NavAdmin from './NavAdmin';
function Adminhome() {
   
    const [list, setList]=useState();

    const [pname, setPname] = useState("");
   const [pprice, setPprice] = useState("");
   const [pimage, setPimage] = useState("");
   const [pquantity, setPquantity] = useState("");

    const [ntouched, setTouchedn] = useState(false);
    const [ptouched, setTouchedp] = useState(false);
    const [itouched, setTouchedi] = useState(false);
    const [qtouched, setTouchedq] = useState(false);



    async function handleSubmit(event)
    {
        event.preventDefault();

      let id=parseInt(localStorage.getItem("editid"));          // if cracker already present, edit it
      if(id){
            try
        {
         await axios.put(("http://localhost:8082/editcrackers/"+id),
        {
        crackername: pname,
        crackerprice: pprice,
        crackerimage : pimage,
        crackerquantity : pquantity,
        });
          alert("Operation Success!");
          window.location.reload();
          setPname("");
          setPprice("");
          setPimage("");
          setPquantity("");
        }
    catch(err)
        {
            setPname("");
            setPprice("");
            setPimage("");
            setPquantity("");
          alert("Operation failed!");
        }
         localStorage.removeItem("editid");
      }
else{                                           //if cracker is new, add it
    try
        {
         await axios.post("http://localhost:8082/savecrackers",
        {
        crackername: pname,
        crackerprice: pprice,
        crackerimage : pimage,
        crackerquantity : pquantity,
        });
          alert("Operation Success!");
          window.location.reload();
          setPname("");
          setPprice("");
          setPimage("");
          setPquantity("");
        }
    catch(err)
        {
            setPname("");
            setPprice("");
            setPimage("");
            setPquantity("");
          alert("Operation failed!");
        }
}
    }


     const editClick= async(event)=>                     // display cracker for editing in form
    { 
console.log(event.currentTarget.id);
let id=parseInt(event.currentTarget.id);
localStorage.setItem("editid",id);
        const res=await axios.get("http://localhost:8082/crackers/"+id);
        const val=res.data;
        console.log(val);
        setPname(val.crackername);
        setPprice(val.crackerprice);
        setPimage(val.crackerimage);
        setPquantity(val.crackerquantity);
        
    }


     const deleteClick= async(event)=>
    {
console.log(event.currentTarget.id);
let id=parseInt(event.currentTarget.id);
axios.delete("http://localhost:8082/deletecrackers/"+id)
.then(res=>{console.log(res.data);})
 window.location.reload();
    }


useEffect(()=>{
axios.get("http://localhost:8082/getcrackers")
.then((res)=>{
  setList(res.data);
});
},[]);

  return (

    <div>
    <div style={{width:'100%'}} class="topnav">
    <NavAdmin/>
      </div>
      <div style={{width:'20%',height:'40%',border:'3px solid black',float:'right',position:'relative',right:'10px'}}>
      <form  onSubmit={handleSubmit} style={{textAlign:'center'}}>
            <br></br>      
            <h1>Add Product</h1>
            <input 
            style={{width:'80%'}}
            type="text"
            name="pname"
            value={pname}
            placeholder="enter the product name"
            onChange={(event) =>
                {
                    setPname(event.target.value);  
                    setTouchedn(true);    
                }}
            />
            { pname.length<=2 && ntouched?
                <label style={{color:'red',fontSize:'100%',textAlign:'center',width:'80%'}}>name too short !</label>:""}

        <input
            style={{width:'80%'}} 
            type="text"
            name="pprice"
            value={pprice}
            placeholder="enter the product price"
            onChange={(event) =>
                {
                    setPprice(event.target.value);    
                    setTouchedp(true);    
                }}          
            />
            {(pprice.length<1) && ptouched?
                <label style={{color:'red',fontSize:'100%',textAlign:'center',width:'80%'}}>enter a value !</label>:""}
            
           
            <input 
            style={{width:'80%'}}
            type="text"
            name="pimage"
            value={pimage}
            placeholder="enter the product image url"
            onChange={(event) =>
                {
                    setPimage(event.target.value);    
                    setTouchedi(true);    
                }}          
            />
            {(pimage.length<3) && itouched?
                <label style={{color:'red',fontSize:'100%',textAlign:'center',width:'80%'}}>provide a url !</label>:""}
            
            
            <input
            style={{width:'80%'}}
            type="text"
            name="pquantity"
            value={pquantity}
            placeholder="enter the product quantity"
            onChange={(event) =>
                {
                    setPquantity(event.target.value);    
                    setTouchedq(true);    
                }}          
            />
            {(pquantity.length<1) && qtouched?
                <label style={{color:'red',fontSize:'100%',textAlign:'center',width:'80%'}}>provide a value !</label>:""}
<br></br>
            <button type="submit" style={{ 
    backgroundColor: 'black',
    width:'30%',
    color: 'white',
    paddingTop: '0.5rem',
    paddingBottom: '0.5rem',
    cursor:'pointer',
    textTransform: 'uppercase',
    letterSpacing: '0.15rem',
    border: '1px solid white'}}
    >ADD</button>
 
    
            </form>    
        </div>

      <div style={{backgroundColor: "skyblue",width: '75%'}}>
        <table style={{width: '98%'}}>
          <thead style={{backgroundColor:'#3f87a6',height: 40}}>
            <tr>
            <th style={{width:'6%'}}>Image</th>
            <th style={{width:'6%'}}>Product Name</th>
            <th style={{width:'3%'}}>Price</th>
            <th style={{width:'3%'}}>Quantity</th>
            <th style={{width:'1%'}}>Edit</th>
            <th style={{width:'1%'}}>Delete</th>
            </tr>
          </thead>
          <tbody style={{textAlign:'center'}}>
          {
              list && list.map((cracker,i)=>(
                <tr style={{fontWeight:'bold'}}>
                  <td>{<img src={cracker.crackerimage} style={{ width:'50%', height: '50%' }} alt="crackers"/>}</td>
                  <td>{cracker.crackername}</td>
                  <td>${cracker.crackerprice}</td>
                  <td>{cracker.crackerquantity}ps</td>
                  <td style={{cursor:'pointer',width:'1%', height: '1%',textAlign:'center'}}>{<Icon id={cracker.id} name = "edit"  tooltip = "Edit" onClick = {editClick}></Icon>}</td>
                  <td style={{cursor:'pointer',width:'1%', height: '1%',textAlign:'center'}}>{<Icon id={cracker.id} name = "delete" tooltip = "Delete"  onClick = { deleteClick }></Icon>}</td>
                </tr>
                ))
            }
          </tbody>
        </table>
      </div>
    </div>
  )
}

export default Adminhome