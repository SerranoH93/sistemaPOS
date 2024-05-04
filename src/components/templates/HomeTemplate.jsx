import styled from 'styled-components';
import { useAuthStore } from '../../store/AuthStore';
import { UserAuth } from '../../context/AuthContext';

function HomeTemplate() {
    const { logout } =useAuthStore();
    const { user} = UserAuth(); //Se puede usar para mostrar datos de session

    return(
        <Container>
            <span>HomeTemplate</span>
            <button onClick={logout}>Cerrar Sesión</button>
        </Container>
    )
}

const Container = styled.div`
    height: 100vh;
`

export default HomeTemplate;