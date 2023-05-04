import "./css/bootstrap.min.css"
import { useState } from 'react'
import axios from 'axios'

function Login() {
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const local = window.localStorage;

  const handleSubmit = event => {
    event.preventDefault()

    axios.post('http://127.0.0.1:8000/api/v1/auth/login', {
      email: email,
      password: password
    }).then((response) => {
      local.setItem('token', response.data[0].api_token)
    })
  }

  return (
    <form className="form-signin" onSubmit={handleSubmit} >
        <h6 className="alert alert-info">Inicio de sesión</h6>
        <input type="email" className="form-control" placeholder="email" required value={email} onChange={(e) => setEmail(e.target.value)}/>
        <input type="password" className="form-control" placeholder="contraseña" required value={password} onChange={(e) => setPassword(e.target.value)}/>
        <button className="btn btn-lg btn-info btn-block w-100" type="submit">Ingresar</button>
        <img className="mb-4" src="logo-colombia.png"/>
    </form>
  )
}

export default Login