import { useEffect, useState } from "react";
import "./css/Dashboard.css";
import "./css/bootstrap.min.css";
import axios from 'axios'

function Departamentos() {
    const [data, setData] = useState([])
    const [departamento, setDepartamento] = useState('')
    const [search, setSearch] = useState('')
    const token = window.localStorage.getItem('token')

    const createDepartamento = async (e) => {
        e.preventDefault()
        await axios.post('http://127.0.0.1:8000/api/v1/departamentos', {
            departamento: departamento
        }, {
            headers: {
                Authorization: `Bearer ${token}`
            }
        })
        window.location.reload()
    }
    useEffect(() => {
        axios.get('http://127.0.0.1:8000/api/v1/departamentos', {
            headers: {
                Authorization: `Bearer ${token}`
            }
        })
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
                        <a className="nav-link" href="/logout">
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
                                    <a className="nav-link" href="/usuarios">
                                        Usuarios
                                    </a>
                                </li>
                                <li className="nav-item">
                                    <a className="nav-link active" href="/departamentos">
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

                        <h5 className="alert alert-info">Departamentos</h5>

                        <form className="form-departamentos" onSubmit={createDepartamento}>
                            <input
                                type="text"
                                className="form-control"
                                placeholder="crear un nuevo departamento"
                                required
                                value={departamento}
                                onChange={(e) => setDepartamento(e.target.value)}
                            /> 
                            <button
                                className="btn btn-info btn-sm"
                                type="submit"
                            >
                                Guardar
                            </button>
                        </form>

                        <form className="form-signin">
                            <input
                                type="text"
                                className="form-control"
                                placeholder="Buscar un departamento"
                                onChange={(e) => setSearch(e.target.value)}
                            />
                        </form>

                        <div className="table-responsive">
                            <table className="table table-bordered table-sm">
                                <thead className="alert-dark">
                                    <tr>
                                        <th>ID</th>
                                        <th>Departamento</th>
                                        <th className="text-center">
                                            Opciones
                                        </th>
                                    </tr>
                                </thead>
                                <tbody>
                                    {
                                        data.filter(d => {
                                            if (search === '') {
                                                return d;
                                            } else if (d.departamento.toLowerCase().includes(search.toLocaleLowerCase())) {
                                                return d;
                                            }
                                        }).map((d, index) => (
                                            <tr key={index}>
                                                <td>{d.id}</td>
                                                <td>{d.departamento}</td>
                                                <td className="text-center">
                                                    <button type="button" className="btn btn-sm btn-outline-info">Actualizar</button>                               
                                                </td>
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

export default Departamentos;
