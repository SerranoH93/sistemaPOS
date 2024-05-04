import { Navigate, Outlet } from 'react-router-dom';


export const ProtectedRoute = ({ user, redirectTo, childen}) => {
    if(user === null) return <Navigate replace to={redirectTo} />;
    return childen ? childen : <Outlet />; //Con outlet le ayuda a mostrar una pantalla de carga
}