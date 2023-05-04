import { useState } from 'react';
import './css/Main.css';
import "./css/bootstrap.min.css"
import axios from 'axios'
import {useNavigate} from 'react-router-dom'

function Registro() {
  const [nombre, setNombre] = useState('')
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const navigate = useNavigate()

  const handleSubmit = event => {
    event.preventDefault()
    axios.post('http://127.0.0.1:8000/api/v1/registro', {
      nombre: nombre,
      email: email,
      password: password
    })
    navigate("/login")
  }
  return (
      <form className="form-signin" onSubmit={handleSubmit}>
          <h6 className="alert alert-info">Registro de usuarios</h6>
          <input type="text" className="form-control" placeholder="nombre" value={nombre} onChange={(e) => setNombre(e.target.value)} required/>
          <input type="email" className="form-control" placeholder="email" value={email} onChange={(e) => setEmail(e.target.value)} required />
          <input type="password" className="form-control" placeholder="contraseña" value={password} onChange={(e) => setPassword(e.target.value)} required />
          <button className="btn btn-lg btn-success btn-block w-100" type="submit">Registrarse</button>
          <img className="mb-4" src="logo-colombia.png"/>
      </form>
  )
}

export default Registro 