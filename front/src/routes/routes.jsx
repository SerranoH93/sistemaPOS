import { Routes, Route } from 'react-router-dom';
import Home from '../views/Home';

function MyRoutes() {
    return (
        <Routes>
            <Route path='/' element={<Home />} />
        </Routes>
    )
}

export default MyRoutes;