import React from 'react';

function FiltroPost({ cantidad, maxCantidad, anio, ciudad, onCantidadChange, onAnioChange, onCiudadChange, onBuscar }) {
    return (
        <div className="modal fade" id="contenedor-numero-postsModal" tabIndex="-1" aria-labelledby="NumeroPostModalLabel" aria-hidden="true">
            <div className="modal-dialog modal-dialog-centered modal-dialog-scrollable">
                <div className="modal-content">
                    <div className="modal-header">
                        <h1 className="modal-title fs-5" id="loginModalLabel" style={{ color: "white" }}>Filtros de búsqueda</h1>
                        <button type="button" className="btn-close btn-close-white" data-bs-dismiss="modal" aria-label="Close"></button>
                    </div>
                    <div className="modal-body">
                        <div className="shadow-sm container w-100 card" id="contenedor-numero-posts">
                            <label style={{ color: "white" }}>Cantidad de modelos que quieres ver:</label>
                            <input
                                type="number"
                                id="number-post"
                                min="6"
                                value={cantidad}
                                max={maxCantidad}
                                onChange={onCantidadChange}
                            />
                        </div>
                        <div className="shadow-sm container w-100 card mt-3" id="contenedor-fecha-posts">
                            <label style={{ color: "white" }}>Selecciona el año que quieras ver:</label>
                            <select
                                id="anio-post"
                                value={anio}
                                onChange={onAnioChange}
                                className="form-select"
                            >
                                <option value="All">Todos</option>
                                <option value="2025">2025</option>
                                <option value="2024">2024</option>
                                <option value="Legacy">Anterior</option>
                            </select>
                        </div>
                        <div className="shadow-sm container w-100 card mt-3" id="contenedor-ciudad-posts">
                            <label style={{ color: "white" }}>Selecciona la ciudad:</label>
                            <select
                                id="ciudad-post"
                                value={ciudad}
                                onChange={onCiudadChange}
                                className="form-select"
                            >
                                <option value="Todas">Todas</option>
                                <option value="Bogota">Bogotá</option>
                                <option value="Cali">Cali</option>
                                <option value="Medellin">Medellín</option>
                                <option value="Barranquilla">Barranquilla</option>
                                <option value="Cartagena">Cartagena</option>
                            </select>
                        </div>
                        <button
                            onClick={onBuscar}
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
    );
}

export default FiltroPost;
