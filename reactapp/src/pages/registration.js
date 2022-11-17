import axios from "axios";
import { useState } from "react";
import "../components/registration.css";
import {Link} from 'react-router-dom';
 
function Register()
{
//    const [userrole, setUserrole] = useState("");
   const [email, setEmail] = useState("");
   const [username, setUsername] = useState("");
   const [mobilenumber, setMobilenumber] = useState("");
   const [password, setPassword] = useState("");
   const [confirmpassword, setConfirmpassword] = useState("");
   
//    const [touched, setTouched] = useState(false);
   const [utouched, setTouchedu] = useState(false);
   const [etouched, setTouchede] = useState(false);
   const [mtouched, setTouchedm] = useState(false);
   const [ptouched, setTouchedp] = useState(false);

//    let role='';
   async function handleSubmit(event)
    {
        event.preventDefault();
        const res=await axios.get("http://localhost:8082/getall");
        const val=res.data;
        let flag='false';
        for(let i=0;i< val.length;i++){                        // check table for existing email and username
            if(val[i].email === email){
                flag='true';}
            else if(val[i].username === username){
                flag='username';}
            } 
   if(flag==='true'){                                        // invalid email
       alert("email already registered! please Login..");
       window.location="/login";
   }
   else if(flag==='username'){alert("username already taken! please Try again..");}         // invalid name
   else{

    try
        {
         await axios.post("http://localhost:8082/save",
        {
        userrole: 'user',
        email: email,
        username : username,
        mobilenumber : mobilenumber,
        password : password,
        });
        // role=userrole;
          alert("User Registation Successfully");
        //   setUserrole("");
          setEmail("");
          setUsername("");
          setMobilenumber("");
          setPassword("");
          setConfirmpassword("");
          window.location="/login";
        //   localStorage.setItem("role",role);
        //   if(role==='user'){
            
            // else{
            //     window.location="admin/home";
            // }
        }
    catch(err)
        {
        //   setUserrole("");
          setEmail("");
          setUsername("");
          setMobilenumber("");
          setPassword("");
          setConfirmpassword("");
          alert("User Registation Failed");
        }
    }
    }
    return (
        <div className="register-container">
    
            <form className="register-form" onSubmit={handleSubmit}>
            <br></br>      
            <h1>Register</h1>
            {/* <input type="text"
             name="userrole"
             value={userrole}
             placeholder="Role"
                    
             onChange={(event) =>
              {
                  setUserrole(event.target.value);  
                  setTouched(true);    
              }}
            />{!(userrole==='admin'||userrole==='user') && touched ?
                <label style={{color:'red'}}>Specify user role : admin/user !</label>:""} */}
 
            <input type="email"
            name="email"
            value={email}
            placeholder="Email"
            onChange={(event) =>
                {
                    setEmail(event.target.value);
                    setTouchede(true);      
                }}
            />
            { email.length<=5 && etouched?
                <label style={{color:'red'}}>invalid email !</label>:""}
 
            <input type="text"
            name="username"
            value={username}
            placeholder="Name"
            onChange={(event) =>
                {
                    setUsername(event.target.value); 
                    setTouchedu(true);     
                }}          
            />
            {((username.match("^[0-9]")) || (username.length<=2)) && utouched?
                <label style={{color:'red'}}>Username invalid !</label>:""}
 
            
            <input type="text"
            name="mobilenumber"
            value={mobilenumber}
            placeholder="Mobile"
            onChange={(event) =>
                {
                    setMobilenumber(event.target.value);  
                    setTouchedm(true);    
                }}          
            />
            {(mobilenumber.length<10||mobilenumber.match("^[a-zA-Z]")) && mtouched?
                <label style={{color:'red'}}>mobile number is invalid !</label>:""}


        <input type="password"
            name="password"
            value={password}
            placeholder="Password"
            onChange={(event) =>
                {
                    setPassword(event.target.value);   
                    setTouchedp(true);   
                }}          
            />
            {(password.length<6) && ptouched?
                <label style={{color:'red'}}>Must be at least 6 characters !</label>:""}
 
    <input type="password"
            name="confirmpassword"
            value={confirmpassword}
            placeholder="Confirm password"
            onChange={(event) =>
                {
                    setConfirmpassword(event.target.value);     
                }}          
            />
            {(!(confirmpassword===password))&& ptouched?
                <label style={{color:'red'}}>passwords don't match !</label>:""}

 
            <button style={{cursor:'pointer'}} type="submit">Register</button>
 
    
            </form>    

            <div style={{position:'absolute',bottom:'0',left:'50'}}>Already a User?
               <Link to="/login">Login!</Link>
               </div> 
    
        </div>
    )
}
 
export default Register;

