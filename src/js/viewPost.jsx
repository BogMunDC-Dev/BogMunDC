import { React } from 'react';
import { getImagenesModelo } from './getImagenes.js'; // Asegúrate de importar la función correctamente

function ViewPost({ modelo, onClose, ciudad, modeloImagenes }) {
    if (!modelo) return null;
    let imagenes = getImagenesModelo(modelo, ciudad, modeloImagenes); // Asumiendo que tienes una función para obtener las imágenes del modelo
    // Puedes adaptar aquí para mostrar los datos reales del modelo
    return (
        <div className="modal show d-block" tabIndex="-1" role="dialog" style={{ background: 'rgba(0,0,0,0.5)', position: 'fixed', top: '-16px' }} id='viewPostModal'>
            <div className="modal-dialog modal-dialog-centered modal-dialog-scrollable modal-xxl" role="document" style={{ minWidth: '70vw', height: '80vh', overflow: 'auto' }}>
                <div className="modal-content">
                    <div className="modal-header">
                        <h1 className="modal-title fs-5" style={{ color: 'white' }}>Más detalles del modelo</h1>
                        <button type="button" className="btn-close btn-close-white" aria-label="Close" onClick={onClose}></button>
                    </div>
                    <div className="modal-body">
                        <div className="col">
                            <main className="w-100 m-auto">
                                <div className="card shadow-sm">
                                    <div className="row">
                                        <div className="col">
                                            {/* Carousel de imágenes */}
                                            <div id={`carouselExampleIndicators`} className="carousel slide align-content-center">
                                                <div className="carousel-indicators">
                                                    {imagenes.map((img, idx) => (
                                                        <button
                                                            id="slide"
                                                            type="button"
                                                            data-bs-target={`#carouselExampleIndicators`}
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
                                                            <img src={img} style={{ maxWidth: '100%', maxHeight: '100%', margin: '0 auto', display: 'block' }} alt={modelo.nombre} />
                                                        </div>
                                                    ))}
                                                </div>
                                                <button
                                                    id="carousel-btn"
                                                    className="carousel-control-prev"
                                                    type="button"
                                                    data-bs-target={`#carouselExampleIndicators`}
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
                                                    data-bs-target={`#carouselExampleIndicators`}
                                                    data-bs-slide="next"
                                                >
                                                    <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" fill="currentColor" className="bi bi-caret-right-fill" viewBox="0 0 16 16" style={{ color: "black" }}>
                                                        <path d="m12.14 8.753-5.482 4.796c-.646.566-1.658.106-1.658-.753V3.204a1 1 0 0 1 1.659-.753l5.48 4.796a1 1 0 0 1 0 1.506z" />
                                                    </svg>
                                                    <span className="visually-hidden">Next</span>
                                                </button>
                                            </div>
                                        </div>
                                        <div className="col detalles-basicos">
                                            <h3 className="card-text">
                                                <strong style={{ color: 'white' }}>{modelo.nombre}</strong>
                                            </h3>
                                            <h4 className="card-text" style={{ color: 'white' }}>
                                                {modelo.Fecha}
                                            </h4>
                                            <p className="card-text" style={{ color: 'white', fontSize: '1.07rem' }}>
                                                <i>Dirección del Modelo:</i> <br /> {modelo.locacion}
                                            </p>
                                            <div className="row">
                                                <div className="col detalles-varios">
                                                    <p className="card-text" style={{ color: 'white' }}>
                                                        <strong>Staff:</strong>
                                                    </p>
                                                    <div className="row" style={{ color: 'white' }}>
                                                        <div className="col">
                                                            <strong>Staff Académico</strong>
                                                            <ul>
                                                                {/*(modelo.staffAcademico && modelo.staffAcademico.length > 0)
                                                                    ? modelo.staffAcademico.map((persona, idx) => <li key={idx}>{persona}</li>)
                                                                    : <li>No hay datos</li>*/}
                                                                <li>Nombre del Staff Académico 1</li>
                                                                <li>Nombre del Staff Académico 2</li>
                                                                <li>Nombre del Staff Académico 3</li>
                                                            </ul>
                                                        </div>
                                                        <div className="col">
                                                            <strong>Staff Ejecutivo</strong>
                                                            <ul>
                                                                {/*(modelo.staffEjecutivo && modelo.staffEjecutivo.length > 0)
                                                                    ? modelo.staffEjecutivo.map((persona, idx) => <li key={idx}>{persona}</li>)
                                                                    : <li>No hay datos</li>*/}
                                                                <li>Nombre del Staff Ejecutivo 1</li>
                                                                <li>Nombre del Staff Ejecutivo 2</li>
                                                                <li>Nombre del Staff Ejecutivo 3</li>
                                                            </ul>
                                                        </div>
                                                        <div className="col">
                                                            <strong>Staff Prensa</strong>
                                                            <ul>
                                                                {/*(modelo.staffPrensa && modelo.staffPrensa.length > 0)
                                                                    ? modelo.staffPrensa.map((persona, idx) => <li key={idx}>{persona}</li>)
                                                                    : <li>No hay datos</li>*/}
                                                                <li>Nombre del Staff Prensa 1</li>
                                                                <li>Nombre del Staff Prensa 2</li>
                                                                <li>Nombre del Staff Prensa 3</li>
                                                            </ul>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>

                                        </div>
                                    </div>
                                    <div className="card-body descripcion-modelo" style={{ color: 'white', marginTop: '1rem' }}>
                                        <h5><strong>[Una breve descripción hablando sobre el modelo]</strong></h5>

                                        <p className="card-text" style={{ color: 'white' }}>
                                            Comites:
                                        </p>
                                        <div className="row" style={{ color: 'white' }}>
                                            {/*{
                                                (modelo.comites && modelo.comites.length > 0)
                                                    ? modelo.comites.map((comite, idx) => (
                                                        <div className="col" key={idx}>
                                                            <strong>{comite.nombre || `Comité ${idx + 1}`}</strong>
                                                            <div>
                                                                <span>Presidentes:</span>
                                                            <ul>
                                                                {(comite.presidentes && comite.presidentes.length > 0)
                                                                    ? comite.presidentes.map((pres, i) => <li key={i}>{pres}</li>)
                                                                    : <li>No hay datos</li>}
                                                            </ul>
                                                        </div>
                                                        <div>
                                                            <span>Temas:</span>
                                                            <ul>
                                                                {(comite.temas && comite.temas.length > 0)
                                                                    ? comite.temas.map((tema, i) => <li key={i}>{tema}</li>)
                                                                    : <li>No hay datos</li>}
                                                            </ul>
                                                        </div>
                                                    </div>
                                                ))
                                                : <div className="col">No hay comités</div>
                                            }*/}

                                            <div className="row" style={{ color: 'white' }}>
                                                <div className="col">
                                                    <strong>Nombre Comité 1</strong>
                                                    <ul>
                                                        <li>Nombre Presidente 1</li>
                                                        <li>Nombre Presidente 2</li>
                                                        <li>Nombre Presidente 3</li>
                                                    </ul>
                                                    <div className='row'>
                                                        <div className='col'>
                                                            <span>Temas:</span>
                                                            <ul>
                                                                <li>Tema 1</li>
                                                                <li>Tema 2</li>
                                                                <li>Tema 3</li>
                                                            </ul>
                                                        </div>
                                                    </div>
                                                </div>
                                                <div className="col">
                                                    <strong>Nombre Comité 2</strong>
                                                    <ul>
                                                        <li>Nombre Presidente 1</li>
                                                        <li>Nombre Presidente 2</li>
                                                        <li>Nombre Presidente 3</li>
                                                    </ul>
                                                    <div className='row'>
                                                        <div className='col'>
                                                            <span>Temas:</span>
                                                            <ul>
                                                                <li>Tema 1</li>
                                                                <li>Tema 2</li>
                                                                <li>Tema 3</li>
                                                            </ul>
                                                        </div>
                                                    </div>
                                                </div>
                                                <div className="col">
                                                    <strong>Nombre Comité 3</strong>
                                                    <ul>
                                                        <li>Nombre Presidente 1</li>
                                                        <li>Nombre Presidente 2</li>
                                                        <li>Nombre Presidente 3</li>
                                                    </ul>
                                                    <div className='row'>
                                                        <div className='col'>
                                                            <span>Temas:</span>
                                                            <ul>
                                                                <li>Tema 1</li>
                                                                <li>Tema 2</li>
                                                                <li>Tema 3</li>
                                                            </ul>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>

                                        <h5 className="card-text" style={{ color: 'white' }}>
                                            Documentos: 
                                            <ul>
                                                <li><a href="#" id='linkDoc'>Documento 1</a></li>
                                                <li><a href="#" id='linkDoc'>Documento 2</a></li>
                                                <li><a href="#" id='linkDoc'>Documento 3</a></li>
                                            </ul>
                                        </h5>
                                        {/*<div className="tiempo-post d-flex justify-content-between align-items-center">
                                            <small className="text-body-secondary" style={{ color: 'white' }}>9 mins</small>
                                        </div>*/}
                                    </div>
                                </div>
                            </main>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default ViewPost;