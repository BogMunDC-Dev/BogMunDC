import React from 'react';
import '../Bootstrap/css/bootstrap.min.css';
import '../Bootstrap/js/bootstrap.bundle.min.js';
import '../css/style.css';

function Footer() {
    return (
        <>
            <footer className="text-body-secondary py-5">
                <div className="container">
                    <p className="float-end mb-1">
                        <a href="#" id='linkInicio'>Vuelve al inicio</a>
                    </p>
                    <p className="mb-1" style={{ color: "white" }}>
                        Desarrollada por el equipo de <a href="https://github.com/BogMunDC-Dev" id='linkDEV'> BogMunD.C.</a> usando &copy;<a
                            href="https://getbootstrap.com/" id='linkBootstrap'>Bootstrap</a>
                    </p>
                    <p className="mb-1" style={{ color: "white" }}>
                    ¿Tienes comentarios o encontraste un problema? <a href="https://github.com/BogMunDC-Dev/BogMunDC/issues/new" target="_blank" rel="noopener noreferrer" id="linkFeedback">Haz tu feedback aquí</a>
                    </p>
                </div>
            </footer>
        </>
    );
}

export default Footer;