import { useEffect } from 'react'
import { Routes, Route } from 'react-router-dom'
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle.min";
import Home from './Pages/Home.jsx';
import Registro from './Pages/Registro.jsx';
import Login from './Pages/Login.jsx';
import Dashboard from './Pages/Dashboard.jsx';
import Departamentos from './Pages/Departamentos.jsx';
import Lugares from './Pages/Lugares.jsx';
import Usuarios from './Pages/Usuarios.jsx';
import PrivateRoutes from './utils/PrivateRoutes.jsx';
import Logout from './Pages/Logout.jsx';

function App() {
    useEffect(() => {
        document.title = 'Colombia co'
    }, [])

    return (
        <Routes>
            <Route index element={<Home/>}/>
            <Route path='/registro' element={<Registro />} />
            <Route path='/login' element={<Login />} />
            <Route element={<PrivateRoutes/>} >
                <Route path='/dashboard' element={<Dashboard />} exact />
                <Route path='/departamentos' element={<Departamentos />} axact />
                <Route path='/lugares' element={<Lugares />} exact />
                <Route path='/usuarios' element={<Usuarios />} exact />
                <Route path='/logout' element={<Logout />} />
            </Route>
        </Routes>
    )
}

export default App