import React from 'react';
import '../Bootstrap/css/bootstrap.min.css';
import '../Bootstrap/js/bootstrap.bundle.min.js';
import '../css/style.css';

function Navbar() {
    const [show, setShow] = React.useState(false);

    const handleToggle = (e) => {
        e.preventDefault();
        setShow((prev) => !prev);
    };

    return (
        <>
            <header data-bs-theme="dark">
                <div className={`collapse text-bg-dark${show ? ' show' : ''}`} id="navbarHeader">
                    <div className="container">
                        <div className="row" id="navbarContent">
                            <div className="col-sm-8 col-md-7 py-4">
                                <h4 style={{ color: "#5c4b09ff" }}>Acerca de nosotros</h4>
                                <p style={{ color: "#5c4b09ff" }}>El objetivo general de BOGMUNDC es dar toda la información que
                                    un/a delegad@ en MUN pueda necesitar para movilizarse y estructurar sus horarios,
                                    inicialmente dentro de la ciudad de Bogotá, sin embargo, está dentro del plan salir de la
                                    capital Colombiana y formar delegaciones en más ciudades del país.
                                </p>
                            </div>
                            <div className="col-sm-4 offset-md-1 py-4">
                                <h4 style={{ color: "#5c4b09ff" }}>Contáctanos</h4>
                                <ul className="list-unstyled">
                                    <li><a href="https://twitter.com/bogmundc" target="_blank" style={{ color: "#5c4b09ff" }}>Nuestro
                                        Twitter</a></li>
                                    <li><a href="https://www.instagram.com/bogmundc/" target="_blank" style={{ color: "#5c4b09ff" }}>Nuestro
                                        Instagram</a></li>
                                    <li><a href="https://www.whatsapp.com/channel/0029VaIRAZ26RGJJNPEPca24" target="_blank"
                                        style={{ color: "#5c4b09ff" }}>¡Únete a nuestro grupo de WhatsApp!</a></li>
                                    <li><a href="https://l.instagram.com/?u=https%3A%2F%2Fforms.gle%2FTCM8C2WKdbZkCiKC6&e=AT3qn5sgdgS0BhxQzOKS0LA3UgMgXvdF9N4c6QKe4hbHoNk4RFEc6Cwr1BlUt-CG52uKsW8_yd2VJIMuyjTVFykeG6fdG_b1GYfuIvM2gFO7teUx6uzFIw"
                                        target="_blank" style={{ color: "#5c4b09ff" }}>
                                        ¿Quieres ser parte de nuestro equipo?
                                    </a></li>
                                </ul>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="navbar navbar-dark bg-dark navbar-custom shadow-sm">
                    <div id="navbarcontainer" className="container">
                        <a href="index.html" id="navbar-brand" className="navbar-brand d-flex align-items-center">
                            <strong style={{ color: "#5c4b09ff" }}>Bogotá MUN D.C.</strong>
                        </a>
                        <button className="navbar-toggler" id="navbarBTN" type="button"
                            aria-controls="navbarHeader" aria-expanded={show} aria-label="Toggle navigation"
                            onClick={handleToggle} style={{ backgroundColor: "#e2b70aff" }}>
                            <span className="navbar-toggler-icon" style={{ borderColor: "#ffffff", borderWidth: "3px" }}></span>
                        </button>
                    </div>
                </div>
            </header>
        </>
    );
}

export default Navbar;
