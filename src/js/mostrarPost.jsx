import '../Bootstrap/js/bootstrap.bundle.min.js';
import '../Bootstrap/css/bootstrap.min.css';
import '../css/style.css';
import db from './modelos.js';
import { ciudadColor } from './ciudadColores.js';
import modeloImagenes from './modeloImagenes.js';
import ViewPost from './viewPost.jsx';
import { getImagenesModelo } from './getImagenes.js';
import obtenerModelosPorAnioCiudad from './getModelos.js';

// TODO: agregar un boton para ver mas detalles del modelo (imagenes, staff academico, presidentes, comites, o algun dato curioso)

// Componente principal
import React, { useMemo, useState } from 'react';

function MostrarModelos({ cantidad = 9, anio = null, ciudad = 'Bogota' }) {
    const modelos = useMemo(
        () => obtenerModelosPorAnioCiudad(anio, ciudad, db).slice(0, cantidad),
        [anio, cantidad, ciudad]
    );

    const [selectedModelo, setSelectedModelo] = useState(null);

    if (!modelos || modelos.length === 0) {
        return (
            <div className="alert alert-warning text-center" role="alert">
                Lo sentimos, por el momento no hay modelos para esta ciudad
            </div>
        );
    }

    return (
        <>
            {modelos.map((modelo, i) => {
                const imagenes = getImagenesModelo(modelo, ciudad, modeloImagenes);
                return (
                    <div className="post col" id="post-model" key={i}>
                        <div className="card shadow-sm" style={{ backgroundColor: ciudadColor[modelo.ciudad] || '#f8f9fa' }} id={`card-${modelo.nombre}`}>
                            <div id={`carouselExampleIndicators${i}`} className="carousel slide">
                                <div className="carousel-indicators">
                                    {imagenes.map((img, idx) => (
                                        <button
                                            id="slide"
                                            type="button"
                                            data-bs-target={`#carouselExampleIndicators${i}`}
                                            data-bs-slide-to={idx}
                                            className={idx === 0 ? 'active' : ''}
                                            aria-current={idx === 0 ? 'true' : undefined}
                                            aria-label={`Slide ${idx + 1}`}
                                            key={idx}
                                        ></button>
                                    ))}
                                </div>
                                <div className="carousel-inner">
                                    {imagenes.map((img, idx) => (
                                        <div className={`carousel-item${idx === 0 ? ' active' : ''}`} key={idx}>
                                            <img src={img} className="d-block w-100 h-100" alt={modelo.nombre} />
                                        </div>
                                    ))}
                                </div>
                                <button
                                    id="carousel-btn"
                                    className="carousel-control-prev"
                                    type="button"
                                    data-bs-target={`#carouselExampleIndicators${i}`}
                                    data-bs-slide="prev"
                                >
                                    <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" fill="currentColor" className="bi bi-caret-left-fill" viewBox="0 0 16 16" style={{ color: "black" }}>
                                        <path d="m3.86 8.753 5.482 4.796c.646.566 1.658.106 1.658-.753V3.204a1 1 0 0 0-1.659-.753l-5.48 4.796a1 1 0 0 0 0 1.506z" />
                                    </svg>
                                    <span className="visually-hidden">Previous</span>
                                </button>
                                <button
                                    id="carousel-btn"
                                    className="carousel-control-next"
                                    type="button"
                                    data-bs-target={`#carouselExampleIndicators${i}`}
                                    data-bs-slide="next"
                                >
                                    <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" fill="currentColor" className="bi bi-caret-right-fill" viewBox="0 0 16 16" style={{ color: "black" }}>
                                        <path d="m12.14 8.753-5.482 4.796c-.646.566-1.658.106-1.658-.753V3.204a1 1 0 0 1 1.659-.753l5.48 4.796a1 1 0 0 1 0 1.506z" />
                                    </svg>
                                    <span className="visually-hidden">Next</span>
                                </button>
                            </div>
                            <div className="card-body">
                                <h5 className="card-text" style={{ color: "white" }}>
                                    <strong>{modelo.institucion}</strong>
                                </h5>
                                <h4 className="card-text" style={{ color: "white" }}>{modelo.nombre}</h4>
                                <h5 className="card-text" style={{ color: "white"}}>
                                    <i>Fecha: {modelo.Fecha}</i>
                                </h5>
                                <p className="card-text" id="direccion" style={{ color: "white", fontSize: "97%"}}>
                                    Dirección: <br /> {modelo.locacion}
                                </p>
                                <p className="card-text" id="linkIns">
                                    <a href={modelo.linkInstagram} style={{ color: "rgb(252, 209, 22)" }} target="_blank" rel="noopener noreferrer">Instagram </a>
                                </p>
                                <div className="d-flex justify-content-end">
                                    <div className="btn-group">
                                        <button
                                            type="button"
                                            className="btn btn-sm btn-outline-secondary"
                                            style={{ color: "white", backgroundColor: "#003087"}}
                                            onClick={() => setSelectedModelo(modelo)}
                                            id="verMasBtn"
                                        >
                                            Ver más...
                                        </button>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                );
            })}
            {selectedModelo && (
                <ViewPost
                    modelo={selectedModelo}
                    onClose={() => setSelectedModelo(null)}
                    ciudad={ciudad}
                    modeloImagenes={modeloImagenes}
                />
            )}
        </>
    );
}

export default MostrarModelos;