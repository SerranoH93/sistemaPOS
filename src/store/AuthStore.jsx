import { create } from 'zustand';
import { supabase } from '../supabase/supabase.config';
import { MostrarUsuarios } from '../supabase/crudUsuarios';

export const useAuthStore = create((set) => ({
    loginGoogle: async () => {
        const {data, error} = await supabase.auth.signInWithOAuth({
            provider: 'google'
        });
        console.log("data user", data) //! Eliminar console.log   
    },
    logOut: async () => {
        await supabase.auth.signOut();
    }
}))