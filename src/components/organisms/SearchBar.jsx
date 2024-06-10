import styled from "styled-components";
import { v } from "../../styles/variables";

export function SearchBar() {
    return (
        <Container>
            <section className="content">
                <v.iconobuscar className="icono"/>
                <input placeholder="Buscar..." type="text" />
            </section>
        </Container>
    );
}
const Container = styled.div`
    display: flex;    
    align-items: center;
    border-radius: 10px;
    height: 60px;
    color: ${(props) => props.theme.text};
    border: 2px solid ${({theme}) => theme.color2};   

    .content {
        position: relative;
        display: flex;
        width: 100%;
        align-items: center;
        padding: 15px;
        gap: 10px;
    }
    
    .icono {
        font-size: 18px;
    }

    input {
        width: 100%;
        outline: none;
        background: none;
        font-size: 18px;
        border: 0;
        color: ${(props) => props.theme.text};
    }
`