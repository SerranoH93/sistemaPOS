import { Routes, Route, BrowserRouter } from 'react-router-dom';
import Home from '../views/Home';

function MyRoutes() {
    return (
        <BrowserRouter>
            <Routes>
                <Route path='/' element={<Home />} />
            </Routes>
        </BrowserRouter>
    )
}

export default MyRoutes;