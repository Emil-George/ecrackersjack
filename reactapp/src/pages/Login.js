import axios from "axios";
import { useState } from "react";
import "../components/registration.css";
import {Link} from 'react-router-dom';
import {useNavigate} from 'react-router-dom';
// import {useAuth} from './AuthProvider';
// import { useUserAuth } from "./UserAuthProvider";
function Login()
{
   const [email, setEmail] = useState("");
   const [password, setPassword] = useState("");

   const [etouched, setTouchede] = useState(false);
   const [ptouched, setTouchedp] = useState(false);
   

   let navigate =useNavigate();
//    let auth=useAuth();
//    let userauth=useUserAuth();

let role;
let userid;
   async function handleSubmit(event)
    {
        event.preventDefault();
        const res=await axios.get("http://localhost:8082/getall");            //get all users data and check for match
        const val=res.data;
        let flag='false';
        let pass;
        for(let i=0;i< val.length;i++){
            if(val[i].email === email ){   //&& val[i].password=== password
                 userid=val[i].id; 
                 try{
                 await axios.get("http://localhost:8082/takepwd/"+userid);
                 pass=await axios.get("http://localhost:8082/checkauth/"+password);
                }catch(e){console.log(e);}
                 if(pass.data){
                 role=val[i].userrole;                                             // get role if user / admin
                 localStorage.setItem("uid",userid);
                 flag='true';}
                //  else{alert("password missmatch!");}

            }}
            if(flag==='true'){         
                setEmail("");
                setPassword("");
                localStorage.setItem("role",role);
                if(role==='user'){
                    // auth.login('user');
                    // userauth.login('user');
                navigate("/user/home");
                window.location.reload();
            }
                else{
                    // auth.login('admin');
                    // userauth.login('admin');
                    navigate("/admin/home");
                    window.location.reload();
                }
                
            }
            else{
                setEmail("");
                setPassword("");
                alert("please try again!");
            }        
   }
    return (
        <div className="register-container">
    
            <form className="register-form" onSubmit={handleSubmit}>
            <br></br>      
            <h1>Login</h1>
            <input type="email"
            name="email"
            value={email}
            placeholder="Email"
            onChange={(event) =>
                {
                    setEmail(event.target.value);  
                    setTouchede(true);    
                }}
            />{ email.length<=5 && etouched?
                <label style={{color:'red'}}>invalid email !</label>:""}

        <input type="password"
            name="password"
            value={password}
            placeholder="Password"
            onChange={(event) =>
                {
                    setPassword(event.target.value);    
                    setTouchedp(true);    
                }}          
            />{(password.length<6) && ptouched?
                <label style={{color:'red'}}>Must be at least 6 characters !</label>:""}

            <button style={{cursor:'pointer'}} type="submit">Login</button>
 
    
            </form>    

            <div style={{position:'absolute',bottom:'0',left:'50'}}>New User/Admin?
            <Link to="/">Register!</Link>
            </div>
 
    
        </div>
    )
}
 
export default Login;