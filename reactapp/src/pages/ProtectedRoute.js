
// import { Navigate } from 'react-router-dom';
import ErrorPage from './ErrorPage';
export const ProtectedRoute=({children})=>{
    if(!(localStorage.getItem('role')==='admin')){
    //  <Navigate to='/login'></Navigate>
    return <ErrorPage/>
    }
    
    else{
    return children;
    }
}