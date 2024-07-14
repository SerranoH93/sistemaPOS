import { useQuery } from "@tanstack/react-query";
import { CategoriesTemplate } from "../components/templates/CategoriesTemplate";
import { useCategoriasStore } from "../store/CategoriasStore";
import { useEmpresaStore } from "../store/EmpresaStore";

export function Categories() {

    const { mostrarCategorias } = useCategoriasStore()
    const { dataempresa } = useEmpresaStore()
    const {} = useQuery({ 
        queryKey: ["mostrar categorias", dataempresa?.id], 
        queryFn: () => mostrarCategorias({ id_empresa: dataempresa?.id }) 
    })

    // console.log(dataempresa)

    return (
        <CategoriesTemplate/>
    );
}
