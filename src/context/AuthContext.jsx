import { createContext, useContext, useEffect, useState } from 'react';
import { supabase } from '../supabase/supabase.config';

const AuthContext = createContext();
export const AuthContextProvider = ({children}) => {

    const [user, setUser] = useState([]);

    //useEffect para escuchar los cambios de session
    useEffect(() => {
        const { data } = supabase.auth.onAuthStateChange(async(session) => {
            if(session?.user == null) {
                setUser(null)
            } else {
                setUser(session?.user)
            }
            
        });
        return() => {
            data.subscription;
        }
    }, []);

    return <AuthContext.Provider value={{ user }}>
        {
            children
        }
    </AuthContext.Provider>
};

export const UserAuth = () => {
    return useContext(AuthContext)
}