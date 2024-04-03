import styled from 'styled-components';
import { Title } from '../atoms/Title';
import { InputText2 } from '../organisms/forms/InputText2';
import { Btnsave } from '../molecules/Btnsave';
import { Line } from '../atoms/Line';
import { v } from '../../styles/variables';
import { Device } from '../../styles/breakpoints';

function LoginTemplate() {
    return (
        <Container>
            <div className='card'>
                <Title $paddingbottom='20px' >Ingresar</Title>
                <form>
                    <InputText2>
                        <input className='form__field' placeholder='Ingresa tu usuario' type='text' />
                    </InputText2>
                    <InputText2>
                        <input className='form__field' placeholder='Ingresa tu contraseña' type='password' />
                    </InputText2>
                    <Btnsave title='Ingresar' bgcolor='#1CB0F6' color='255,255,255' width='100%' />
                </form>
                <Line>
                    <span>O</span>
                </Line>
                <Btnsave title='Google' bgcolor='#ffffff' icon={<v.iconogoogle />} />
            </div>
        </Container>
    )
}

const Container = styled.div`
    height: 100vh;
    display: flex;
    justify-content: center;
    align-items: center;
    text-align: center;  
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
export default LoginTemplate;