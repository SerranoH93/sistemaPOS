import styled from "styled-components";
import { Title } from "../atoms/Title";
import { Btn1 } from "../molecules/Btn1";
import { v } from "../../styles/variables";
import { SearchBar } from "../organisms/SearchBar";
import { useCategoriasStore } from "../../store/CategoriasStore";
import { TablaCategorias } from "../organisms/tablas/TablaCategorias";
import { useState } from "react";
import { RegistrarCategorias } from "../organisms/forms/RegistrarCategorias";
import ConfettiExplosion from "react-confetti-explosion";


export function CategoriesTemplate() {
    const [openRegistro, SetopenRegistro] = useState(false);
    const { datacategorias, setBuscador } = useCategoriasStore();
    const [accion, setAccion] = useState("");
    const [dataSelect, setdataSelect] = useState([]);
    const [isExploding, setIsExploding] = useState(false);

    function nuevoRegistro() {
        SetopenRegistro(!openRegistro);
        setAccion("Nuevo");
        setdataSelect([]);
        setIsExploding(false);
    }

    return (        
        <Container>
            {
                openRegistro && (
                <RegistrarCategorias 
                    setIsExploding={setIsExploding}
                    onClose={() => SetopenRegistro(!openRegistro)} 
                    dataSelect={dataSelect} 
                    accion={accion}
                />
            )
            }
            <section className="area1">
                <Title>Categorias</Title>
                <Btn1
                    funcion={nuevoRegistro}
                    bgcolor={v.colorPrincipal} 
                    title='Nuevo' 
                    icon={<v.iconoagregar/>} />
            </section>

            <section className="area2">
                <SearchBar setBuscador={setBuscador}/>
            </section>

            <section className="main">
                {isExploding && <ConfettiExplosion />}
                <TablaCategorias 
                    setdataSelect={setdataSelect}
                    setAccion={setAccion}
                    SetopenRegistro={SetopenRegistro} 
                    data={datacategorias}
                />
            </section>
        </Container>
    );
}
const Container = styled.div`
    height: calc(100vh - 30px) ;
    padding: 15px;    
    display: grid;
    grid-template: 
    "area1" 60px
    "area2" 60px
    "main" auto;

    .area1 {
        grid-area: area1;
        /* background-color: rgba(103, 93, 241, 0.14); */
        display: flex;
        justify-content: end;
        align-items: center;
        gap: 15px;       
    } 

    .area2 {
        grid-area: area2;
        /* background-color: rgba(7, 237, 45, 0.14); */
        display: flex;
        justify-content: end;
        align-items: center;
    } 

    .main {
        grid-area: main;
        /* background-color: rgba(237, 7, 221, 0.14);         */
    }
`