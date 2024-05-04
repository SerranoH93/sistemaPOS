import { Routes, Route } from 'react-router-dom';
import Home from '../views/Home';
import Login from '../views/Login';
import { ProtectedRoute } from '../hooks/ProtectedRoute';

function MyRoutes() {
    // const { user } = UserAuth();
    return (
        // Proteccion de rutas
        // <Routes>
        //     <Route element={<ProtectedRoute user={ user }  redirectTo={'/login'}/>}>
        //         <Route path='/' element={ <Home /> }/>
        //     </Route>
        // </Routes>

        <Routes>            
            <Route path='/' element={ <Home /> }/>
            <Route path='/login' element={ <Login /> }/>
        </Routes>
    )
}

export default MyRoutes;