import { Routes, Route } from 'react-router-dom';
import Home from '../views/Home';
import Login from '../views/Login';
import { ProtectedRoute } from '../hooks/ProtectedRoute';
import { UserAuth } from '../context/AuthContext';

function MyRoutes() {
    const { user } = UserAuth();
    return (

        <Routes>
            <Route element={<ProtectedRoute user={ user }  redirectTo={'/login'}/>}>
                <Route path='/' element={ <Home /> }/>
            </Route>                     
            <Route path='/login' element={ <Login /> }/>
        </Routes>
    )
}

export default MyRoutes;