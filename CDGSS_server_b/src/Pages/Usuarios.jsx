import { useEffect, useState } from "react";
import "./css/Dashboard.css";
import "./css/bootstrap.min.css";
import axios from 'axios';

function Usuarios() {
    const [data, setData] = useState([])
    useEffect(() => {
        axios.get('http://127.0.0.1:8000/api/v1/users')
            .then((response) => {
                setData(response.data)
            })
    }, [])

    return (
        <>
            <nav className="navbar navbar-dark fixed-top bg-dark flex-md-nowrap p-0 shadow">
                <a className="navbar-brand col-sm-3 col-md-2 mr-0" href="#">
                    <img src="main-logo.png" />
                </a>

                <ul className="navbar-nav px-3">
                    <li className="nav-item text-nowrap">
                        <a className="nav-link" href="#">
                            Cerrar sesión
                        </a>
                    </li>
                </ul>
            </nav>

            <div className="container-fluid">
                <div className="row">
                    <nav className="col-md-2 d-none d-md-block bg-light sidebar">
                        <div className="sidebar-sticky">
                            <ul className="nav flex-column">
                                <li className="nav-item">
                                    <a className="nav-link" href="/dashboard">
                                        Panel de administración
                                    </a>
                                </li>
                                <li className="nav-item">
                                    <a className="nav-link active" href="/usuarios">
                                        Usuarios
                                    </a>
                                </li>
                                <li className="nav-item">
                                    <a className="nav-link" href="/departamentos">
                                        Departamentos
                                    </a>
                                </li>
                                <li className="nav-item">
                                    <a className="nav-link" href="/lugares">
                                        Lugares
                                    </a>
                                </li>
                            </ul>
                        </div>
                    </nav>

                    <main
                        role="main"
                        className="col-md-9 ml-sm-auto col-lg-10 px-4"
                    >
                        <div className="d-flex justify-content-between flex-wrap flex-md-nowrap align-items-center pt-3 pb-2 mb-3 border-bottom">
                            <h1 className="h2">Panel de administración</h1>
                        </div>

                        <h5 className="alert alert-info">
                            Usuarios registrados
                        </h5>
                        <div className="table-responsive">
                            <table className="table table-bordered table-sm">
                                <thead className="alert-dark">
                                    <tr>
                                        <th>Nombre</th>
                                        <th>email</th>
                                        <th>Token</th>
                                        <th>Rol</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    {/* <tr>
                                        <td>administrador</td>
                                        <td>admin@colombia.co</td>
                                        <td></td>
                                        <td>ADMINISTRADOR</td>
                                    </tr> */}
                                    {
                                       data.map((d, index) => (
                                            <tr key={index}>
                                                <td>{d.nombre}</td>
                                                <td>{d.email}</td>
                                                <td></td>
                                                <td>{d.rol.toUpperCase()}</td>
                                            </tr>
                                       )) 
                                    }
                                </tbody>
                            </table>
                        </div>
                    </main>
                </div>
            </div>
        </>
    );
}

export default Usuarios;
