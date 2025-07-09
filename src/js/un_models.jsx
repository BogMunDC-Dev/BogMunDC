import React from 'react';
import '../Bootstrap/css/bootstrap.min.css';
import '../Bootstrap/js/bootstrap.bundle.min.js';
import '../css/style.css';
import MostrarModelos from './mostrarPost.jsx';

function UnModels() {
    const [cantidad, setCantidad] = React.useState(6);
    const [mostrar, setMostrar] = React.useState(true); // Mostrar modelos al renderizar
    const [anio, setAnio] = React.useState(''); // Mostrar todos los años por defecto

    const handleInputChange = (e) => {
        setCantidad(Number(e.target.value));
    };

    const handleMostrarModelos = () => {
        setMostrar(true);
    };

    const handleAnioChange = (e) => {
        setAnio(e.target.value);
    };

    return (
        <>
            <main>
                <section className="py-5 text-center container">
                    <div className="row py-lg-5">
                        <div className="col-lg-6 col-md-8 mx-auto">
                            <h1 className="fw-light" style={{ color: "white" }}>Bienvenido/a a Bogotá Mun D.C.</h1>
                            <p className="lead text-body-secondary">
                                Bienvenido/a a la base de datos sobre Modelos de Naciones Unidas en Bogotá (próximamente en toda
                                Colombia)
                            </p>
                        </div>
                    </div>
                </section>
                <div className="album py-5 bg-body-tertiary">
                    <div className="container" id="main-container">
                        <button className="btn" id="numeroPostModalBtn" type="button" data-bs-toggle="modal" data-bs-target="#contenedor-numero-postsModal">
                            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="currentColor" className="bi bi-filter-left" viewBox="0 0 16 16" style={{ color: "white" }}>
                                <path d="M2 10.5a.5.5 0 0 1 .5-.5h3a.5.5 0 0 1 0 1h-3a.5.5 0 0 1-.5-.5m0-3a.5.5 0 0 1 .5-.5h7a.5.5 0 0 1 0 1h-7a.5.5 0 0 1-.5-.5m0-3a.5.5 0 0 1 .5-.5h11a.5.5 0 0 1 0 1h-11a.5.5 0 0 1-.5-.5" />
                            </svg>
                        </button>
                        <div className="modal fade" id="contenedor-numero-postsModal" tabIndex="-1" aria-labelledby="NumeroPostModalLabel" aria-hidden="true">
                            <div className="modal-dialog modal-dialog-centered modal-dialog-scrollable">
                                <div className="modal-content">
                                    <div className="modal-header">
                                        <h1 className="modal-title fs-5" id="loginModalLabel">Filtros de busqueda</h1>
                                        <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                                    </div>
                                    <div className="modal-body">
                                        <div className="shadow-sm container w-100 card" id="contenedor-numero-posts">
                                            <label> Cantidad de post que quieres ver: </label>
                                            <input
                                                type="number"
                                                id="number-post"
                                                min="3"
                                                value={cantidad}
                                                max="51"
                                                onChange={handleInputChange}
                                            />
                                        </div>
                                        <div className="shadow-sm container w-100 card mt-3" id="contenedor-fecha-posts">
                                            <label> Selecciona el año que quieras ver: </label>
                                            <select
                                                id="anio-post"
                                                value={anio}
                                                onChange={handleAnioChange}
                                                className="form-select"
                                            >
                                                <option value="All">Todos</option>
                                                <option value="2025">2025</option>
                                                <option value="2024">2024</option>
                                                <option value="Legacy">Anterior</option>
                                                {/* Agrega más años si es necesario */}
                                            </select>
                                        </div>
                                        <button
                                            onClick={handleMostrarModelos}
                                            type="button"
                                            className="enterBtn btn btn-sm btn-outline-secondary mt-3"
                                            data-bs-dismiss="modal"
                                        >
                                            Buscar
                                        </button>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="contenedor-posts row row-cols-1 row-cols-sm-2 row-cols-md-3 g-3" id="list-post">
                            {mostrar && <MostrarModelos cantidad={cantidad} anio={anio} />}
                        </div>
                    </div>
                </div>
            </main>
        </>
    );
}

export default UnModels;