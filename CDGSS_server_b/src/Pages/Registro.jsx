import './css/Main.css';
import "./css/bootstrap.min.css"

function Registro() {
  return (
    <form className="form-signin">
        <h6 className="alert alert-info">Registro de usuarios</h6>
        <input type="text" className="form-control" placeholder="nombre" required/>
        <input type="email" className="form-control" placeholder="email" required />
        <input type="password" className="form-control" placeholder="contraseña" required />
        <button className="btn btn-lg btn-success btn-block w-100" type="submit">Registrarse</button>
        <img className="mb-4" src="logo-colombia.png"/>
    </form>
  )
}

export default Registro