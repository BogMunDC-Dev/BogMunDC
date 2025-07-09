import '../Bootstrap/js/bootstrap.bundle.min.js';
import '../Bootstrap/css/bootstrap.min.css';
import '../css/style.css';
import db from './modelos.js';

// Función para obtener los modelos según el año
function obtenerModelosPorAnio(anio) {
    if (!anio) {
        // Si no se especifica año, usar todos los modelos
        // Unir todos los modelos en un solo array
        let modelos = [];
        // modelosAll puede ser objeto o array, normalizamos:
        if (Array.isArray(db.modelosAll)) {
            modelos = modelos.concat(db.modelosAll);
        } else {
            modelos = modelos.concat(Object.values(db.modelosAll));
        }
        if (db.modelosLegacy) modelos = modelos.concat(db.modelosLegacy);
        if (db.modelos2024) modelos = modelos.concat(db.modelos2024);
        if (db.modelos2025) modelos = modelos.concat(db.modelos2025);
        return modelos;
    }
    // Buscar la propiedad correspondiente al año
    const key = `modelos${anio}`;
    if (db[key]) return db[key];
    // Si el año es "Legacy"
    if (anio === "Legacy" && db.modelosLegacy) return db.modelosLegacy;
    // Si el año es "All"
    if (anio === "All") {
        let modelos = [];
        if (Array.isArray(db.modelosAll)) {
            modelos = modelos.concat(db.modelosAll);
        } else {
            modelos = modelos.concat(Object.values(db.modelosAll));
        }
        return modelos;
    }
    // Si el año es 2023 o anterior, usar modelosAll
    if (anio === 2023 || anio === "2023") {
        if (Array.isArray(db.modelosAll)) return db.modelosAll;
        return Object.values(db.modelosAll);
    }
    // Por defecto, retorna vacío
    return [];
}

// Componente principal
function MostrarModelos({ cantidad = 9, anio = null }) {
    const modelos = obtenerModelosPorAnio(anio).slice(0, cantidad);

    return (
        <>
            {modelos.map((modelo, i) => (
                <div className="post col" id="post-model" key={i}>
                    <div className="card shadow-sm">
                        <div id={`carouselExampleIndicators${i}`} className="carousel slide">
                            <div className="carousel-indicators">
                                <button
                                    id="slide"
                                    type="button"
                                    data-bs-target={`#carouselExampleIndicators${i}`}
                                    data-bs-slide-to="0"
                                    className="active"
                                    aria-current="true"
                                    aria-label="Slide 1"
                                ></button>
                                <button
                                    id="slide"
                                    type="button"
                                    data-bs-target={`#carouselExampleIndicators${i}`}
                                    data-bs-slide-to="1"
                                    aria-label="Slide 2"
                                ></button>
                                <button
                                    id="slide"
                                    type="button"
                                    data-bs-target={`#carouselExampleIndicators${i}`}
                                    data-bs-slide-to="2"
                                    aria-label="Slide 3"
                                ></button>
                            </div>
                            <div className="carousel-inner">
                                <div className="carousel-item active">
                                    <img src="img/Imagen_ONU_Prueba.png" className="d-block w-100 h-100" alt="..." />
                                </div>
                                <div className="carousel-item">
                                    <img src="img/Imagen_ONU_Prueba.png" className="d-block w-100" alt="..." />
                                </div>
                                <div className="carousel-item">
                                    <img src="img/Imagen_ONU_Prueba.png" className="d-block w-100" alt="..." />
                                </div>
                            </div>
                            <button
                                id="carousel-btn"
                                className="carousel-control-prev"
                                type="button"
                                data-bs-target={`#carouselExampleIndicators${i}`}
                                data-bs-slide="prev"
                            >
                                <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" fill="currentColor" class="bi bi-caret-left-fill" viewBox="0 0 16 16" style={{ color: "black" }}>
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
                                <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" fill="currentColor" class="bi bi-caret-right-fill" viewBox="0 0 16 16" style={{ color: "black" }}>
                                    <path d="m12.14 8.753-5.482 4.796c-.646.566-1.658.106-1.658-.753V3.204a1 1 0 0 1 1.659-.753l5.48 4.796a1 1 0 0 1 0 1.506z" />
                                </svg>
                                <span className="visually-hidden">Next</span>
                            </button>
                        </div>
                        <div className="card-body">
                            <h5 className="card-text" style={{ color: "white" }}>
                                <strong>{modelo.institucion}</strong>
                            </h5>
                            <h4 className="card-text">{modelo.nombre}</h4>
                            <h5 className="card-text" style={{ color: "white" }}>
                                <i>Fecha: {modelo.Fecha}</i>
                            </h5>
                            <p className="card-text" id="direccion" style={{ color: "white" }}>
                                Dirección: {modelo.locacion}
                            </p>
                            <p className="card-text" id="linkIns" style={{ color: "white" }}>
                                <a href={modelo.linkInstagram}>Instagram </a>
                            </p>
                            <div className="d-flex justify-content-between align-items-center">
                                <div className="btn-group">{/* Botón "Ver más..." aquí si lo necesitas */}</div>
                            </div>
                        </div>
                    </div>
                </div>
            ))}
        </>
    );
}

export default MostrarModelos;