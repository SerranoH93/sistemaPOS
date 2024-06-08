import { useQuery } from "@tanstack/react-query";
import { ConfigurationsTemplate } from "../components/templates/ConfigurationsTemplate";
import { useModulosStore } from "../store/ModulosStore";
import Spinner1 from "../components/molecules/Spinner1"

export function Configurations() {
    const { mostrarModulos } = useModulosStore();
    const { isLoading, error } = useQuery({ queryKey:'mostrar modulos', queryFn: mostrarModulos})

    if(isLoading) {
        return (<span>cargando...</span>)
    }
    if(error) {
        return(<Spinner1/>)
    }

    return (
        <ConfigurationsTemplate/>
    );
}
