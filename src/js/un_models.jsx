import React from 'react';
import '../Bootstrap/css/bootstrap.min.css';
import '../Bootstrap/js/bootstrap.bundle.min.js';
import '../css/style.css';

import MostrarModelos from './mostrarPost.jsx';
import db from './modelos.js';
import FiltroPost from './FiltroPost.jsx';
import { ciudadesEquivalencia } from './ciudadColores.js';

function ColorEquivalenciaContainer() {
    return (
        <div className="mb-3 d-flex flex-wrap justify-content-center align-items-center" style={{ gap: '10px' }}>
            {ciudadesEquivalencia.map((c, idx) => (
                <div key={idx} style={{ display: 'flex', alignItems: 'center', background: '#003087', borderRadius: '8px', padding: '4px 10px', minWidth: '90px' }}>
                    <span style={{ display: 'inline-block', width: 18, height: 18, background: c.color, borderRadius: '50%', marginRight: 8, border: '1px solid #fff' }}></span>
                    <span style={{ color: '#fff', fontSize: '0.95em' }}>{c.nombre}</span>
                </div>
            ))}
        </div>
    );
}

function UnModels() {
    const [cantidad, setCantidad] = React.useState(9);
    const [mostrar, setMostrar] = React.useState(true);
    const [anio, setAnio] = React.useState('All');
    const [ciudad, setCiudad] = React.useState('Bogota');

    // Obtener el objeto de modelos según la ciudad
    const getDbCiudad = (ciudad) => {
        switch (ciudad) {
            case 'Bogota': return db.modelosBogota;
            case 'Cali': return db.modelosCali;
            case 'Medellin': return db.modelosMedellin;
            case 'Barranquilla': return db.modelosBarranquilla;
            case 'Cartagena': return db.modelosCartagena;
            default: return db.modelosBogota;
        }
    };

    // Determinar el nombre de la propiedad en db según el año
    const getDbKey = (anio) => {
        if (anio === '2025') return 'modelos2025';
        if (anio === '2024') return 'modelos2024';
        if (anio === 'Legacy') return 'modelosLegacy';
    };

    // Calcular el máximo dinámicamente
    const maxCantidad = React.useMemo(() => {
        if (ciudad === 'Todas') {
            // Sumar todos los modelos de todas las ciudades
            const ciudades = [
                db.modelosBogota,
                db.modelosCali,
                db.modelosMedellin,
                db.modelosBarranquilla,
                db.modelosCartagena
            ];
            let total = 0;
            ciudades.forEach(dbCiudad => {
                if (anio === 'All') {
                    if (dbCiudad.modelos2024) total += Object.keys(dbCiudad.modelos2024).length;
                    if (dbCiudad.modelos2025) total += Object.keys(dbCiudad.modelos2025).length;
                    if (dbCiudad.modelosLegacy) total += Object.keys(dbCiudad.modelosLegacy).length;
                } else {
                    const key = getDbKey(anio);
                    if (dbCiudad[key]) total += Object.keys(dbCiudad[key]).length;
                }
            });
            return total > 0 ? total : 51;
        } else {
            const dbCiudad = getDbCiudad(ciudad);
            if (anio === 'All') {
                let total = 0;
                if (dbCiudad.modelos2024) total += Object.keys(dbCiudad.modelos2024).length;
                if (dbCiudad.modelos2025) total += Object.keys(dbCiudad.modelos2025).length;
                if (dbCiudad.modelosLegacy) total += Object.keys(dbCiudad.modelosLegacy).length;
                return total > 0 ? total : 51;
            } else {
                const key = getDbKey(anio);
                return dbCiudad[key] ? Object.keys(dbCiudad[key]).length : 51;
            }
        }
    }, [anio, ciudad]);

    const handleInputChange = (e) => {
        setCantidad(Number(e.target.value));
    };

    const handleMostrarModelos = () => {
        setMostrar(true);
    };

    const handleAnioChange = (e) => {
        setAnio(e.target.value);
        setCantidad(9);
    };

    const handleCiudadChange = (e) => {
        setCiudad(e.target.value);
        setCantidad(9);
    };

    return (
        <>
            <main>
                <section className="py-5 text-center container">
                    <div className="row py-lg-5">
                        <div className="col-lg-6 col-md-8 mx-auto">
                            <h1 className="fw-light" style={{ color: "white" }}>Bienvenido/a a Bogotá Mun D.C.</h1>
                            <p className="lead text-body-secondary" id='bienvenida'>
                                Bienvenido/a a la base de datos sobre Modelos de Naciones Unidas en Bogotá (próximamente en toda Colombia)
                            </p>
                        </div>
                    </div>
                </section>
                <div className="album py-5 bg-body-tertiary">
                    <div className="container" id="main-container">
                        <ColorEquivalenciaContainer />
                        
                        <button className="btn" id="numeroPostModalBtn" type="button" data-bs-toggle="modal" data-bs-target="#contenedor-numero-postsModal">
                            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="currentColor" className="bi bi-filter-left" viewBox="0 0 16 16" style={{ color: "white" }}>
                                <path d="M2 10.5a.5.5 0 0 1 .5-.5h3a.5.5 0 0 1 0 1h-3a.5.5 0 0 1-.5-.5m0-3a.5.5 0 0 1 .5-.5h7a.5.5 0 0 1 0 1h-7a.5.5 0 0 1-.5-.5m0-3a.5.5 0 0 1 .5-.5h11a.5.5 0 0 1 0 1h-11a.5.5 0 0 1-.5-.5" />
                            </svg>
                        </button>
                        <FiltroPost
                            cantidad={cantidad}
                            maxCantidad={maxCantidad}
                            anio={anio}
                            ciudad={ciudad}
                            onCantidadChange={handleInputChange}
                            onAnioChange={handleAnioChange}
                            onCiudadChange={handleCiudadChange}
                            onBuscar={handleMostrarModelos}
                        />

                        

                        <div className="contenedor-posts row row-cols-1 row-cols-sm-2 row-cols-md-3 g-3" id="list-post">
                            {mostrar && <MostrarModelos cantidad={cantidad} anio={anio} ciudad={ciudad} />}
                        </div>
                    </div>
                </div>
            </main>
        </>
    );
}

export default UnModels;