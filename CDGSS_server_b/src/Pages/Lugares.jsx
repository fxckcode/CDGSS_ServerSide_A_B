import { useEffect, useState } from "react";
import "./css/bootstrap.min.css";
import "./css/Dashboard.css";
import axios from "axios";

function Lugares() {

    const [data, setData] = useState([])
    const [departamentos, setDepartamentos] = useState([])
    const [search, setSearch] = useState('')
    
    const [nombre, setNombre] = useState('')
    const [descripcion, setDescripcion] = useState('')
    const [imagen, setImagen] = useState(null)
    const [departamentoId, setDepartamentoId] = useState('')

    const deleteLugar = async (id) => {
        await axios.delete(`http://127.0.0.1:8000/api/v1/lugares/${id}`)
        window.location.reload()
    }

    const createLugar = async (e) => {
        e.preventDefault()
        await axios.post('http://127.0.0.1:8000/api/v1/lugares', {
            nombre: nombre,
            descripcion: descripcion,
            imagen: imagen,
            departamento_id: departamentoId
        }, {
            headers: {
                'Content-Type': 'multipart/form-data'
            }
        })
        window.location.reload()
    }

    useEffect(() => {
        axios.get('http://127.0.0.1:8000/api/v1/lugares')
            .then((response) => {
                setData(response.data)
            })

        axios.get('http://127.0.0.1:8000/api/v1/departamentos')
            .then((response) => {
                setDepartamentos(response.data)
            })
    }, [''])

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
                                    <a className="nav-link" href="/usuarios">
                                        Usuarios
                                    </a>
                                </li>
                                <li className="nav-item">
                                    <a className="nav-link" href="/departamentos">
                                        Departamentos
                                    </a>
                                </li>
                                <li className="nav-item">
                                    <a className="nav-link active" href="/lugares">
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
                        <h5 className="alert alert-info">Lugares</h5>

                        <form className="form-departamentos" onSubmit={createLugar}>
                            <div className="row">
                                <input
                                    type="text"
                                    className="form-control"
                                    placeholder="Nombre del lugar"
                                    required
                                    value={nombre}
                                    onChange={(e) => setNombre(e.target.value)}
                                />
                                <textarea
                                    cols="40"
                                    className="form-control"
                                    rows="5"
                                    placeholder="Descripción del lugar"
                                    value={descripcion}
                                    onChange={(e) => setDescripcion(e.target.value)}
                                ></textarea>
                                <input
                                    type="file"
                                    className="form-control"
                                    placeholder="seleccionar imagen"
                                    required
                                    onChange={(e) => setImagen(e.target.files[0])}
                                />
                                <select
                                    className="custom-select d-block w-100"
                                    id="state"
                                    required=""
                                    value={departamentoId}
                                    onChange={(e) => setDepartamentoId(e.target.value) }
                                >
                                    <option value="">Seleccionar</option>
                                   {
                                        departamentos.map((depa, index) => (
                                            <option value={depa.id} key={index}>{depa.departamento}</option>
                                        ))
                                   }
                                </select>
                                <button
                                    className="btn btn-info btn-sm"
                                    type="submit"
                                >
                                    Guardar
                                </button>
                            </div>
                        </form>

                        <form className="form-signin">
                            <input
                                type="text"
                                className="form-control"
                                placeholder="Buscar un lugar"
                                onChange={(e) => setSearch(e.target.value)}
                            />
                        </form>
                        <table className="table table-bordered table-sm">
                            <thead className="alert-dark">
                                <tr>
                                    <th>Lugar</th>
                                    <th>Descripción</th>
                                    <th>Imagen</th>
                                    <th>Departamento</th>
                                    <th>Opciones</th>
                                </tr>
                            </thead>
                            <tbody>
                                {
                                    data.filter(d => {
                                        if (search === '') {
                                            return d;
                                        } else if (d.nombre.toLowerCase().includes(search.toLocaleLowerCase())) {
                                            return d;
                                        }

                                    }).map((d, index) => (
                                        <tr key={index}>
                                            <td>{d.nombre}</td>
                                            <td>{d.descripcion}</td>
                                            <td>
                                                <img src={`http://127.0.0.1:8000/images/${d.imagen}`} alt="" width={100} height={300}/>
                                            </td>
                                            <td>{d.departamento_id}</td>
                                            <td>
                                                <button type="button" className="btn btn-sm btn-outline-danger" onClick={() => deleteLugar(d.id)}>Eliminar</button>
                                            </td>
                                        </tr>
                                    ))
                                }
                            </tbody>
                        </table>
                    </main>
                </div>
            </div>
        </>
    );
}

export default Lugares;
