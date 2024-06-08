import styled from "styled-components";
import { MoonLoader } from "react-spinners";

function Spinner1() {
    return (
        <Container>
            <MoonLoader color="#7f3ceb" size={100} />
        </Container>);
}

export default Spinner1;

const Container = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    height: 100vh;    
`