import styled from "styled-components";

export function CategoriesTemplate() {
    return (
        <h2>Hola</h2>
    );
}
const Container =styled.div`
    height: 100vh;
    padding: 15px;
    width: 100%;
    display: grid;
    grid-template: 
    "area1" 100px
    "area2" 100px
    "main" auto;

`