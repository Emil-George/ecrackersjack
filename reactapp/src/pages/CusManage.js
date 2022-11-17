import React from 'react';
import '../components/navbar.css';
import { useState,useEffect} from 'react';
import axios from 'axios';
import '../components/registration.css';
import Icon from "react-crud-icons";
// import {useAuth} from './AuthProvider';
import NavAdmin from './NavAdmin';

function CusManage() {
   
    const [list, setList]=useState();

    const [username,setUname] = useState("");
   const [userrole, setUrole] = useState("");
   const [mobile, setMobile] = useState("");
   const [pwd, setPwd] = useState("");
   const [email, setEmail] = useState("");


    const [utouched, setTouchedu] = useState(false);
    const [rtouched, setTouchedr] = useState(false);
    const [mtouched, setTouchedm] = useState(false);
    // const [ptouched, setTouchedp] = useState(false);
    const [etouched, setTouchede] = useState(false);

    async function handleSubmit(event)
    {
        event.preventDefault();

      let id=parseInt(localStorage.getItem("usereditid"));   // for existing users, modify data
      if(id){
            try
        {
         await axios.put(("http://localhost:8082/edit/"+id),
        {
        userrole: userrole,
        username: username,
        mobilenumber : mobile,
        password : pwd,
        email: email,
        });
          alert("Operation Success!");
          window.location.reload();
          setUname("");
          setUrole("");
          setMobile("");
          // setPwd("");
          setEmail("");
        }
    catch(err)
        {
            setUname("");
            setUrole("");
            setMobile("");
            // setPwd("");
            setEmail("");
          alert("Operation failed!");
        }
         localStorage.removeItem("usereditid");
      }
else{    
           alert("You can't do it from here! Go to Registration page..");
}
    }


     const editClick= async(event)=>                //display userdata on form
    { 

console.log(event.currentTarget.id);
let id=parseInt(event.currentTarget.id);
localStorage.setItem("usereditid",id);
        const res=await axios.get("http://localhost:8082/users/"+id);
        const val=res.data;
        console.log(val);
        setUname(val.username);
        setUrole(val.userrole);
        setMobile(val.mobilenumber);
        setPwd(val.password);
        setEmail(val.email)
        // axios.delete("http://localhost:8082/deletecrackers/"+id);
        
    }


     const deleteClick= async(event)=>
    {
console.log(event.currentTarget.id);
let id=parseInt(event.currentTarget.id);
axios.delete("http://localhost:8082/delete/"+id)
.then(res=>{console.log(res.data);})
alert("user has been removed!");
 window.location.reload();
    }


useEffect(()=>{
axios.get("http://localhost:8082/getall")
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
            <h1>Manage Users</h1>

            <input
            style={{width:'80%'}} 
            type="text"
            name="userrole"
            value={userrole}
            placeholder="enter role: admin/user"
            onChange={(event) =>
                {
                    setUrole(event.target.value);    
                    setTouchedr(true);    
                }}          
            />
            {(!(userrole==='user'||userrole==='admin')) && rtouched?
                <label style={{color:'red',fontSize:'100%',textAlign:'center',width:'80%'}}>specify user/admin</label>:""}
            

            <input 
            style={{width:'80%'}}
            type="text"
            name="username"
            value={username}
            placeholder="enter user name"
            onChange={(event) =>
                {
                    setUname(event.target.value);  
                    setTouchedu(true);    
                }}
            />
            { username.length<=2 && utouched?
                <label style={{color:'red',fontSize:'100%',textAlign:'center',width:'80%'}}>name too short !</label>:""}


                <input
                style={{width:'80%'}} 
                type="text"
                name="email"
                value={email}
                placeholder="enter Email"
                onChange={(event) =>
                    {
                        setEmail(event.target.value);    
                        setTouchede(true);    
                    }}          
                />
                {(email.length<5) && etouched?
                    <label style={{color:'red',fontSize:'100%',textAlign:'center',width:'80%'}}>email not valid!</label>:""}
                
           
            <input 
            style={{width:'80%'}}
            type="text"
            name="mobile"
            value={mobile}
            placeholder="enter mobile number"
            onChange={(event) =>
                {
                    setMobile(event.target.value);    
                    setTouchedm(true);    
                }}          
            />
            {(mobile.length<10) && mtouched?
                <label style={{color:'red',fontSize:'100%',textAlign:'center',width:'80%'}}>minimum 10 digits!</label>:""}
            
            
            {/* <input
            style={{width:'80%'}}
            type="text"
            name="pwd"
            value={pwd}
            placeholder="enter new password"
            onChange={(event) =>
                {
                    setPwd(event.target.value);    
                    setTouchedp(true);    
                }}          
            />
            {(pwd.length<6) && ptouched?
                <label style={{color:'red',fontSize:'100%',textAlign:'center',width:'80%'}}>minimum length 6 !</label>:""} */}

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
            <th style={{width:'4%'}}>UserRole</th>
            <th style={{width:'4%'}}>UserName</th>
            <th style={{width:'4%'}}>Email</th>
            {/* <th style={{width:'4%'}}>Password</th> */}
            <th style={{width:'4%'}}>Mobile</th>
            <th style={{width:'1%'}}>Edit</th>
            <th style={{width:'1%'}}>Delete</th>
            
            </tr>
          </thead>
          <tbody style={{textAlign:'center'}}>
          {
              list && list.map((users,i)=>(
                <tr style={{fontWeight:'bold'}}>
                  <td>{users.userrole}</td>
                  <td>{users.username}</td>
                  <td>{users.email}</td>
                  {/* <td>{users.password}</td> */}
                  <td>{users.mobilenumber}</td>
                  <td style={{cursor:'pointer',width:'1%', height: '1%',textAlign:'center'}}>{<Icon id={users.id} name = "edit"  tooltip = "Edit" onClick = {editClick}></Icon>}</td>
                  <td style={{cursor:'pointer',width:'1%', height: '1%',textAlign:'center'}}>{<Icon id={users.id} name = "delete" tooltip = "Delete"  onClick = { deleteClick }></Icon>}</td>
                </tr>
                ))
            }
          </tbody>
        </table>
      </div>
    </div>
  )
}

export default CusManage;