import { useQuery } from "@tanstack/react-query";
import { CategoriesTemplate } from "../components/templates/CategoriesTemplate";
import { useCategoriasStore } from "../store/CategoriasStore";
import { useEmpresaStore } from "../store/EmpresaStore";
import Spinner1 from "../components/molecules/Spinner1"

export function Categories() {

    const { mostrarCategorias, buscarCategorias, buscador } = useCategoriasStore()
    const { dataempresa } = useEmpresaStore()

    const { isLoading, error } = useQuery({ 
        queryKey: ["mostrar categorias", dataempresa?.id], 
        queryFn: () => mostrarCategorias({ id_empresa: dataempresa?.id }),
        enabled: !!dataempresa,
        refetchOnWindowFocus: false
    })

    const {} = useQuery({ 
        queryKey: ["buscar categorias", buscador], 
        queryFn: () => buscarCategorias({ id_empresa: dataempresa?.id, descripcion: buscador }),
        enabled: !!dataempresa,
        refetchOnWindowFocus: false
    })


    if(isLoading) {
        return (<Spinner1/>)
    }
    if(error) {
        return(<span>error...</span>)
    }

    // console.log(dataempresa)

    return (
        <CategoriesTemplate/>
    );
}
