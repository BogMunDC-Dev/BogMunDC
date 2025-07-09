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
                        <a href="#">Vuelve al inicio</a>
                    </p>
                    <p className="mb-1">
                        Desarrollada por el equipo de <a href="https://github.com/BogMunDC-Dev"> BogMunD.C.</a> usando &copy;<a
                            href="https://getbootstrap.com/">Bootstrap</a>
                    </p>
                </div>
            </footer>
        </>
    );
}

export default Footer;