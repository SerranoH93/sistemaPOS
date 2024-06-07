import { createContext, useContext, useEffect, useState } from 'react';
import { supabase } from '../supabase/supabase.config';
import { MostrarUsuarios } from '../supabase/crudUsuarios';
import { InsertarEmpresa } from '../supabase/curdEmpresa';
import { InsertarAdmin } from '../supabase/crudUsuarios';
import { MostrarTipoDocumentos } from '../supabase/crudTipoDocumentos';
import { MostrarRolesXnombre } from '../supabase/crudRol';

const AuthContext = createContext();
export const AuthContextProvider = ({children}) => {

    const [user, setUser] = useState([]);

    //useEffect para escuchar los cambios de session
    useEffect(() => {
        const { data } = supabase.auth.onAuthStateChange(async(event, session) => {
            if(session == null) {
                setUser(null)                
            } else {
                setUser(session?.user);
                console.log("session", session.user); //!Eliminar console.log
                insertarDatos(session?.user.id, session?.user.email);                
            }
            
        });
        return() => {
            data.subscription;
        }
    }, []);

    const insertarDatos = async(id_auth, correo) => {
        const response = await MostrarUsuarios({ id_auth: id_auth });
        console.log("id auth", id_auth); //!Eliminar console.log

        if (response) {
            return;
        } else {
            const responseEmpresa = await InsertarEmpresa({ 
                id_auth: id_auth 
            });
            console.log("empresa", responseEmpresa); //!Eliminar console.log

            const responseTipoDoc = await MostrarTipoDocumentos({
                id_empresa: responseEmpresa?.id
            });
            console.log("tipo doc", responseTipoDoc); //!Eliminar console.log

            const responseRol = await MostrarRolesXnombre(
                {nombre:'superadmin' 
            });
            console.log("rol", responseRol);

            const pUser = {
                id_tipodocumento: responseTipoDoc[0]?.id,
                id_rol: responseRol?.id,
                correo: correo,
                fecharegistro: new Date(),
                id_auth: id_auth
            };

            console.log("pUser", pUser)

            await InsertarAdmin(pUser);
        }
        // console.log(response)
    };

    return <AuthContext.Provider value={{ user }}>
        {
            children
        }
    </AuthContext.Provider>
};

export const UserAuth = () => {
    return useContext(AuthContext);
}