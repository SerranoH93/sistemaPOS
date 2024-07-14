import styled from "styled-components";
import { Title } from "../atoms/Title";
import { Btn1 } from "../molecules/Btn1";
import { v } from "../../styles/variables";
import { SearchBar } from "../organisms/SearchBar";
import { useCategoriasStore } from "../../store/CategoriasStore";
import { TablaCategorias } from "../organisms/tablas/TablaCategorias";


export function CategoriesTemplate() {
    const { datacategorias } = useCategoriasStore();

    return (        
        <Container>
            <section className="area1">
                <Title>Categorias</Title>
                <Btn1 
                    bgcolor={v.colorPrincipal} 
                    title='Nuevo' 
                    icon={<v.iconoagregar/>} />
            </section>

            <section className="area2">
                <SearchBar/>
            </section>

            <section className="main">
                <TablaCategorias data={datacategorias}/>
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
        background-color: rgba(103, 93, 241, 0.14);
        display: flex;
        justify-content: end;
        align-items: center;
        gap: 15px;       
    } 

    .area2 {
        grid-area: area2;
        background-color: rgba(7, 237, 45, 0.14);
        display: flex;
        justify-content: end;
        align-items: center;
    } 

    .main {
        grid-area: main;
        background-color: rgba(237, 7, 221, 0.14);        
    }
`