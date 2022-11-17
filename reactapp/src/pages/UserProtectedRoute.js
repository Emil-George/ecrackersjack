// import { Navigate } from 'react-router-dom';
import ErrorPage from './ErrorPage';
export const UserProtectedRoute=({children})=>{
    if(!(localStorage.getItem('role')==='user')){
        //  <Navigate to='/login'></Navigate>
        return <ErrorPage/>
    }
    
    else{
    return children;
    }
}