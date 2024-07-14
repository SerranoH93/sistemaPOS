import { create } from 'zustand';
import { InsertarEmpresa, MostrarEmpresaXidusuario } from '../supabase/curdEmpresa';

export const useEmpresaStore = create((set) =>({
    dataempresa: [],
    mostrarempresa: async (p) => {
        const response = await MostrarEmpresaXidusuario(p);
        set({ dataempresa: response });
        console.log("mostrar empresa", response)
        return response;
    },
    insertarempresa: async (p) => {
        const response = await InsertarEmpresa(p)
        console.log("respuesta empresa", response); //! Eliminar console.log
    }
}));