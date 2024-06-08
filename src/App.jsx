import { useState } from 'react';
import { useLocation } from 'react-router-dom';
import styled, {ThemeProvider} from 'styled-components';
import MyRoutes from './routes/routes';
import Sidebar from './components/organisms/sidebar/Sidebar';
import Login from './views/Login';
import { GlobalStyles } from './styles/GlobalStyles';
import { Device } from './styles/breakpoints';
import { useThemeStore } from './store/ThemeStore';
import { AuthContextProvider } from './context/AuthContext';
import { ReactQueryDevtools } from '@tanstack/react-query-devtools';



function App() {
    const [sidebarOpen, setSidebarOpen] = useState(false); //Estado de la barra lateral
    const {themeStyle} = useThemeStore();
    const {pathname} = useLocation();

    return (
        <ThemeProvider theme={themeStyle}>
            <AuthContextProvider>
                <GlobalStyles />
                {pathname != '/login' ? (<Container className={sidebarOpen ? 'active' : ''}>
                    <section className='contentSideBar'>
                        <Sidebar state={sidebarOpen} setState={() => setSidebarOpen(!sidebarOpen)} />
                    </section>
                    <section className='contentMenuHambur'>Menu Hambur</section>
                    <section className='contentRouters'>
                        <MyRoutes />
                    </section>
                </Container>) : (<Login />)}
                <ReactQueryDevtools initialIsOpen={true} />
            </AuthContextProvider>            
        </ThemeProvider>
    )
}
const Container = styled.main`
    display: grid;
    grid-template-columns: 1fr;   
    transition: 0.1s ease-in-out; 
    color:${({theme}) => theme.text};
    .contentSideBar {
        display: none;
    }
    .contentMenuHambur {
        position: absolute;        
    }
    .contentRouters {
        grid-template-columns: 1;
        width: 100%;        
    }
    @media ${Device.tablet} {
        grid-template-columns: 88px 1fr;
        &.active {
            grid-template-columns: 260px 1fr;
        }
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
