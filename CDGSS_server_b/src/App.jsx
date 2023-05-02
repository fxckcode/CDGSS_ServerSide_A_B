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

function App() {
    useEffect(() => {
        document.title = 'Colombia co'
    }, [])
    return (
        <Routes>
            <Route index element={<Home/>}/>
            <Route path='/registro' element={<Registro />} />
            <Route path='/login' element={<Login />} />
            <Route path='/dashboard' element={<Dashboard />}/>
            <Route path='/departamentos' element={<Departamentos />} />
            <Route path='/lugares' element={<Lugares />} />
            <Route path='/usuarios' element={<Usuarios />} />
        </Routes>
    )
}

export default App