import { create } from 'zustand';
import { InsertarEmpresa } from '../supabase/curdEmpresa';

export const useEmpresaStore = create((set) =>({
    insertarempresa: async (p) => {
        const response = await InsertarEmpresa(p)
        console.log("respuesta empresa", response); //! Eliminar console.log
    }
}));