import '../Bootstrap/js/bootstrap.bundle.min.js';
import '../Bootstrap/css/bootstrap.min.css';
import '../css/style.css';
import db from './modelos.js';
import { ciudadColor } from './ciudadColores.js';
import modeloImagenes from './modeloImagenes.js';

// TODO: agregar un boton para ver mas detalles del modelo (imagenes, staff academico, presidentes, comites, o algun dato curioso)

// Función para obtener los modelos según el año
function obtenerModelosPorAnioCiudad(anio, ciudad) {
    const ciudades = [
        { key: 'Bogota', db: db.modelosBogota },
        { key: 'Cali', db: db.modelosCali },
        { key: 'Medellin', db: db.modelosMedellin },
        { key: 'Barranquilla', db: db.modelosBarranquilla },
        { key: 'Cartagena', db: db.modelosCartagena }
    ];
    let modelos = [];
    if (ciudad === 'Todas') {
        ciudades.forEach(({ key, db }) => {
            if (!anio || anio === "All") {
                if (db.modelosLegacy) modelos = modelos.concat(Object.values(db.modelosLegacy).map(m => ({ ...m, ciudad: key })));
                if (db.modelos2024) modelos = modelos.concat(Object.values(db.modelos2024).map(m => ({ ...m, ciudad: key })));
                if (db.modelos2025) modelos = modelos.concat(Object.values(db.modelos2025).map(m => ({ ...m, ciudad: key })));
            } else if (anio === "Legacy" && db.modelosLegacy) {
                modelos = modelos.concat(Object.values(db.modelosLegacy).map(m => ({ ...m, ciudad: key })));
            } else if (anio === "2024" && db.modelos2024) {
                modelos = modelos.concat(Object.values(db.modelos2024).map(m => ({ ...m, ciudad: key })));
            } else if (anio === "2025" && db.modelos2025) {
                modelos = modelos.concat(Object.values(db.modelos2025).map(m => ({ ...m, ciudad: key })));
            }
        });
        return modelos;
    } else {
        let dbCiudad = ciudades.find(c => c.key === ciudad)?.db || db.modelosBogota;
        if (!anio || anio === "All") {
            if (dbCiudad.modelosLegacy) modelos = modelos.concat(Object.values(dbCiudad.modelosLegacy).map(m => ({ ...m, ciudad }))); 
            if (dbCiudad.modelos2024) modelos = modelos.concat(Object.values(dbCiudad.modelos2024).map(m => ({ ...m, ciudad }))); 
            if (dbCiudad.modelos2025) modelos = modelos.concat(Object.values(dbCiudad.modelos2025).map(m => ({ ...m, ciudad }))); 
            return modelos;
        }
        if (anio === "Legacy" && dbCiudad.modelosLegacy) {
            return Object.values(dbCiudad.modelosLegacy).map(m => ({ ...m, ciudad }));
        }
        if (anio === "2024" && dbCiudad.modelos2024) {
            return Object.values(dbCiudad.modelos2024).map(m => ({ ...m, ciudad }));
        }
        if (anio === "2025" && dbCiudad.modelos2025) {
            return Object.values(dbCiudad.modelos2025).map(m => ({ ...m, ciudad }));
        }
        return [];
    }
}

// Componente principal
import React, { useMemo } from 'react';

function MostrarModelos({ cantidad = 9, anio = null, ciudad = 'Bogota' }) {
    const modelos = useMemo(
        () => obtenerModelosPorAnioCiudad(anio, ciudad).slice(0, cantidad),
        [anio, cantidad, ciudad]
    );

    if (!modelos || modelos.length === 0) {
        return (
            <div className="alert alert-warning text-center" role="alert">
                Lo sentimos, por el momento no hay modelos para esta ciudad
            </div>
        );
    }

    // Helper para obtener imágenes del modelo
    const getImagenesModelo = (modelo) => {
        const ciudadKey = modelo.ciudad || ciudad;
        let nombreModelo = modelo.nombre;
        // Normaliza: elimina año, espacios, puntos y mayúsculas
        let base = nombreModelo.replace(/\s*([XVIL]+|\d+|['’]\d+|\d{4})$/, '').replace(/\s+/g, '').replace(/['’]/g, '').replace(/\./g, '').toUpperCase();
        let imagenes = null;
        if (modeloImagenes[ciudadKey]) {
            imagenes = modeloImagenes[ciudadKey][nombreModelo];
            if (!imagenes) {
                imagenes = modeloImagenes[ciudadKey][base];
            }
        }
        if (imagenes && imagenes.length) return imagenes;
        return ['img/Imagen_ONU_Prueba.png'];
    };

    return (
        <>
            {modelos.map((modelo, i) => {
                const imagenes = getImagenesModelo(modelo);
                return (
                    <div className="post col" id="post-model" key={i}>
                        <div className="card shadow-sm" style={{ backgroundColor: ciudadColor[modelo.ciudad] || '#f8f9fa' }}>
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
                                <h5 className="card-text" style={{ color: "white" }}>
                                    <i>Fecha: {modelo.Fecha}</i>
                                </h5>
                                <p className="card-text" id="direccion" style={{ color: "white" }}>
                                    Dirección: {modelo.locacion}
                                </p>
                                <p className="card-text" id="linkIns">
                                    <a href={modelo.linkInstagram} style={{ color: "rgb(252, 209, 22)" }} target="_blank" rel="noopener noreferrer">Instagram </a>
                                </p>
                                <div className="d-flex justify-content-between align-items-center">
                                    <div className="btn-group">{/* Botón "Ver más..." aquí si lo necesitas */}</div>
                                </div>
                            </div>
                        </div>
                    </div>
                );
            })}
        </>
    );
}

export default MostrarModelos;