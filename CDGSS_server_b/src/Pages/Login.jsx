import {Link} from 'react-router-dom'
import "./css/bootstrap.min.css"

function Login() {
  return (
    <form className="form-signin">
        <h6 className="alert alert-info">Inicio de sesión</h6>
        <input type="email" className="form-control" placeholder="email" required/>
        <input type="password" className="form-control" placeholder="contraseña" required/>
        <button className="btn btn-lg btn-info btn-block w-100" type="submit">Ingresar <Link to="/dashboard" /></button>
        <img className="mb-4" src="logo-colombia.png"/>
    </form>
  )
}

export default Login