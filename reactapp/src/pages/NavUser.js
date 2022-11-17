import React from 'react'
import Container from 'react-bootstrap/Container';
import Navbar from 'react-bootstrap/Navbar';
import Nav from 'react-bootstrap/Nav';
import {useNavigate} from 'react-router-dom';
import '../components/navbar.css';
function NavUser()
{

    let navigate=useNavigate();
    const handleLogout=()=>{
        // auth.logout();
        localStorage.clear();
        navigate('/login');
      }

return(
<Navbar sticky="top" bg='dark' variant='dark'>
<Container>
  <Nav className="me-auto">
    <Nav.Link href="/user/home" style={{width:'10%'}}>Home</Nav.Link>
    <Nav.Link href="/cart" style={{width:'10%'}}>Cart</Nav.Link>
    <Nav.Link href="/myorders" style={{width:'10%'}}>MyOrders</Nav.Link>
    <Nav.Link style={{float: 'right',width:'10%'}} href="/login" onClick={handleLogout}>Logout</Nav.Link>
  </Nav>
</Container>
<div style={{float:'right',width:'10%'}}>logged in as, {localStorage.getItem('role')}</div>
</Navbar>

)
}
export default NavUser;