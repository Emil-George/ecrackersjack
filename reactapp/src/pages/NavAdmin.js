
import React from 'react'
import Container from 'react-bootstrap/Container';
import Navbar from 'react-bootstrap/Navbar';
import Nav from 'react-bootstrap/Nav';
import {useNavigate} from 'react-router-dom';
import '../components/navbar.css';
function NavAdmin()
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
    <Nav.Link href="/admin/home" style={{width:'10%'}}>Home</Nav.Link>
    <Nav.Link href="/products" style={{width:'10%'}}>Products</Nav.Link>
    <Nav.Link href="/orders" style={{width:'10%'}}>Orders</Nav.Link>
    <Nav.Link href="/manage" style={{width:'10%'}}>Manage</Nav.Link>
    <Nav.Link style={{float: 'right', width:'10%'}} href="/login" onClick={handleLogout}>Logout</Nav.Link>
  </Nav>
</Container>
<div style={{float:'right',width:'10%'}}>logged in as, <br></br>{localStorage.getItem('role')}</div>
</Navbar>
)
}
export default NavAdmin;