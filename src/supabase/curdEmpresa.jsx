import { supabase } from './supabase.config';
import Swal from 'sweetalert2';

const tabla = 'empresa';

export async function InsertarEmpresa(p) {
    const { data, error } = await supabase
        .from(tabla)
        .insert(p)
        .select()
        .maybeSingle();

    return data;
}

export async function MostrarEmpresaXidusuario(p) {
    const { data } = await supabase.rpc("mostrarempresaxiduser", p).maybeSingle();    
    console.log("datos de empresa", data)
    return data;
}