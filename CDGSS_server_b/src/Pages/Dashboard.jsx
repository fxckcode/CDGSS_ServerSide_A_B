import "./css/Dashboard.css";
import "./css/bootstrap.min.css"

function Dashboard() {
    return (
        <>
            <nav className="navbar navbar-dark fixed-top bg-dark flex-md-nowrap p-0 shadow">
                <a className="navbar-brand col-sm-3 col-md-2 mr-0" href="#">
                    <img src="./main-logo.png" />
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
                                    <a className="nav-link active" href="/dashboard">
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

                        <p>
                            Lorem ipsum, dolor sit amet consectetur adipisicing
                            elit. Reprehenderit ad nisi eaque fugit? Accusamus,
                            architecto. Nulla quibusdam laudantium velit
                            inventore nobis fugiat similique sit voluptatibus
                            atque illo. Sed, eum delectus.
                        </p>
                    </main>
                </div>
            </div>
        </>
    );
}

export default Dashboard;
