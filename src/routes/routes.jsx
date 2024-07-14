import { Routes, Route } from 'react-router-dom';
import Home from '../views/Home';
import Login from '../views/Login';
import { ProtectedRoute } from '../hooks/ProtectedRoute';
import { UserAuth } from '../context/AuthContext';
import { Configurations } from '../views/Configurations';
import { Categories } from '../views/Categories';
import { useUsuariosStore } from '../store/UsuariosStore';
import { useQuery } from '@tanstack/react-query';
import Spinner1 from '../components/molecules/Spinner1';
import { useEmpresaStore } from '../store/EmpresaStore';

function MyRoutes() {

    const { user } = UserAuth();
    const { dataUsuarios, mostrarusuarios} = useUsuariosStore();
    const { mostrarempresa, dataempresa } = useEmpresaStore()
    const { isLoading, error } = useQuery({ 
        queryKey: "mostrar usuarios", 
        queryFn: mostrarusuarios,
        refetchOnWindowFocus: false
    });
    const { data: dtempresa } = useQuery({
        queryKey: ["mostrar empresa", dataUsuarios?.id], 
        queryFn: () => mostrarempresa({ _id_usuario: dataUsuarios?.id }),
        enable: !!dataUsuarios,
        refetchOnWindowFocus: false
    });

    if(isLoading) {
        return(<Spinner1/>)
    }
    if(error) {
        return(<span>error...</span>)
    }

    return (
        <Routes>
            <Route element={<ProtectedRoute user={ user }  redirectTo={'/login'}/>}>
                <Route path='/' element={ <Home /> }/>
                <Route path='/configurations' element={ <Configurations/> } />
                <Route path='/configurations/categories' element={ <Categories/> } />
            </Route>                     
            <Route path='/login' element={ <Login /> }/>
        </Routes>
    )
}

export default MyRoutes;