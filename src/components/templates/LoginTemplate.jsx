import styled from 'styled-components';
import { Title } from '../atoms/Title';
import { InputText2 } from '../organisms/forms/InputText2';
import { Btn1 } from '../molecules/Btn1';
import { Line } from '../atoms/Line';
import { v } from '../../styles/variables';
import { Device } from '../../styles/breakpoints';
import { Footer } from '../organisms/Footer';
import { useAuthStore } from '../../store/AuthStore';

function LoginTemplate() {
    const {loginGoogle} = useAuthStore();

    return (
        <Container>
            <div className='card'>
                <ContentLogo>
                    <img src={v.logo} alt="" />
                    <span>ada369 3.0</span>
                </ContentLogo>
                <Title $paddingbottom='20px' >Ingresar</Title>
                <form>
                    <InputText2>
                        <input className='form__field' placeholder='Ingresa tu usuario' type='text' />
                    </InputText2>
                    <InputText2>
                        <input className='form__field' placeholder='Ingresa tu contraseña' type='password' />
                    </InputText2>
                    <Btn1 title='Ingresar' bgcolor='#1CB0F6' color='255,255,255' width='100%' />
                </form>
                <Line>
                    <span>O</span>
                </Line>
                <Btn1 funcion={loginGoogle} title='Google' bgcolor='#ffffff' icon={<v.iconogoogle />} />
            </div>
            <Footer/>
        </Container>
    )
}

const Container = styled.div`
    height: 100vh;
    display: flex;
    justify-content: center;
    align-items: center;
    text-align: center; 
    flex-direction: column; 
    padding: 0 20px;
    color:${({theme}) => theme.text};
    
    .card{
        display: flex;
        flex-direction: column;
        justify-content: center;
        width: 100%;
        height: 100%;
        margin: 20px;
        @media ${Device.tablet} {
            width: 400px;
        }
    }    
`
const ContentLogo = styled.section`
    display: flex;
    align-items: center;
    justify-content: center;
    margin: 20px;

    span {
        font-weight: 700;
    }
    img {
        width: 10%;
    }
`
export default LoginTemplate;