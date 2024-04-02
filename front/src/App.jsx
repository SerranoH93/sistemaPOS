import styled, {ThemeProvider} from 'styled-components';
import MyRoutes from './routes/routes';
import Sidebar from './components/organisms/sidebar/Sidebar';
import { GlobalStyles } from './styles/GlobalStyles';
import { Device } from './styles/breakpoints';
import { useThemeStore } from './store/ThemeStore';



function App() {
    const {themeStyle} = useThemeStore();
    return (
        <ThemeProvider theme={themeStyle}>
            <Container>
                <GlobalStyles />
                <section className='contentSideBar'>
                    <Sidebar />
                </section>
                <section className='contentMenuHambur'>menu hambur</section>
                <section className='contentRouters'>
                    <MyRoutes />
                </section>
            </Container>
        </ThemeProvider>
    )
}
const Container = styled.main`
    display: grid;
    grid-template-columns: 1fr;
    background-color: black;
    .contentSideBar {
        display: none;
        background-color: rgba(78,45,78,0.5);

    }
    .contentMenuHambur {
        position: absolute;
        background-color: rgba(78,45,78,0.5);
    }
    .contentRouters {
        grid-template-columns: 1;
        width: 100%;
        background-color: rgba(47, 41, 110, 0.5);
    }
    @media ${Device.tablet} {
        grid-template-columns: 88px 1fr;
        .contentSideBar{
            display: initial;
        }
        .contentMenuHambur {
        display: none;
        }
        .contentRouters {
            grid-column: 2;
        }
    }
`;
export default App;
