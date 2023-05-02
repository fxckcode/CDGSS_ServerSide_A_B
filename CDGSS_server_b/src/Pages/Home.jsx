import axios from 'axios';
import "./css/Home.css";
import { useEffect, useState } from 'react';
import "./css/bootstrap.min.css"

function Home() {
  const [data, setData] = useState([]);
  useEffect(() => {
    axios.get('http://127.0.0.1:8000/api/v1/lugares')
      .then((response) => {
        setData(response.data)
      })
  }, ['']) 

  return (
    <>
      <header>
        <div className="navbar navbar-dark bg-dark box-shadow">
          <div className="container d-flex justify-content-between">
            <a href="/" className="navbar-brand d-flex align-items-center">
              <img src="main-logo.png" />
            </a>
          </div>
        </div>
      </header>

      <main role="main">
        <section className="jumbotron text-center">
          <div className="container">
            <h2 className="jumbotron-heading">
              Lugares mágicos de un paraiso llamado Colombia
            </h2>
            <p className="lead text-muted">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Porro,
              aliquid quae, numquam, beatae aspernatur exercitationem
            </p>
            <a href="/login" className="btn btn-info mx-2">
              Inicie sesión
            </a>
            <a href="/registro" className="btn btn-success mx-2">
              Regístrese
            </a>
          </div>
        </section>

        <div className="album py-5 bg-light">
          <div className="container">
            <div className="row">
              {
                data.map((d, index) => (
                  <div className="col-md-4" key={index}>
                    <div className="card mb-4 box-shadow">
                      <img className="card-img-top" src={`http://127.0.0.1:8000/images/${d.imagen}`} />
                      <div className="card-body">
                        <h4 className="card-title">{d.nombre}</h4>
                        <p className="card-text">{d.descripcion}</p>
                        <div className="list-group list-group-flush text-center">
                          <span className="list-group-item bg-info">{d.departamento_id}</span>
                        </div>
                      </div>
                    </div>
                  </div>
                ))
              }
            </div>
          </div>
        </div>
      </main>

      <footer className="text-muted ">
        <div className="container ">
          <p>&copy; COLOMBIA.CO</p>
        </div>
      </footer>
    </>
  );
}

export default Home;
