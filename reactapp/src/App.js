
import './App.css';
import Register from './pages/registration';
import {BrowserRouter as Router,Route,Routes} from 'react-router-dom';
import "./components/registration.css";
import Login from './pages/Login';
import Home from './pages/Home';
import Adminhome from './pages/Adminhome';
// import { AuthProvider } from './pages/AuthProvider';
import { ProtectedRoute } from './pages/ProtectedRoute';
import {UserProtectedRoute} from './pages/UserProtectedRoute';
import ErrorPage from './pages/ErrorPage';
import Cart from './pages/Cart';
import MyOrders from './pages/MyOrders';
import Orders from './pages/Orders';
import Products from './pages/Products';
import CusManage from './pages/CusManage';
// import { UserAuthProvider } from './pages/UserAuthProvider';
function App() {


  return (
    <div>
    <Router>    
          <Routes>
          <Route exact path="admin/home" element={<ProtectedRoute><Adminhome/></ProtectedRoute>}></Route>
          <Route exact path="/orders" element={<ProtectedRoute><Orders/></ProtectedRoute>}></Route>
          <Route exact path="/products" element={<ProtectedRoute><Products/></ProtectedRoute>}></Route>
          <Route exact path="/manage" element={<ProtectedRoute><CusManage/></ProtectedRoute>}></Route>
          <Route exact path="user/home" element={<UserProtectedRoute><Home/></UserProtectedRoute>}></Route>
          <Route exact path="/cart" element={<UserProtectedRoute><Cart/></UserProtectedRoute>}></Route>
          <Route exact path="/myorders" element={<UserProtectedRoute><MyOrders/></UserProtectedRoute>}></Route>
          <Route exact path="/" element={<Register/>}></Route>
          <Route exact path="/login" element={<Login/>}></Route>
          <Route path="*" element={<ErrorPage/>}></Route>
          </Routes> 
      </Router>
    </div>
  );
}

export default App;
