import React from 'react';
import '../Bootstrap/css/bootstrap.min.css';
import '../Bootstrap/js/bootstrap.bundle.min.js';
import '../css/style.css';


function Navbar() {
    return (
        <>
            <header data-bs-theme="dark">
                <div class="collapse text-bg-dark" id="navbarHeader">
                    <div class="container">
                        <div class="row">
                            <div class="col-sm-8 col-md-7 py-4">
                                <h4>Acerca de nosotros</h4>
                                <p class="text-body-secondary">El objetivo general de BOGMUNDC es dar toda la información que
                                    un/a delegad@ en MUN pueda necesitar para movilizarse y estructurar sus horarios,
                                    inicialmente dentro de la ciudad de Bogotá, sin embargo, está dentro del plan salir de la
                                    capital Colombiana y formar delegaciones en más ciudades del país.
                                </p>
                            </div>
                            <div class="col-sm-4 offset-md-1 py-4">
                                <h4>Contáctanos</h4>
                                <ul class="list-unstyled">
                                    <li><a href="https://twitter.com/bogmundc" target="_blank" class="text-white">Nuestro
                                        Twitter</a></li>
                                    <li><a href="https://www.instagram.com/bogmundc/" target="_blank" class="text-white">Nuestro
                                        Instagram</a></li>
                                    <li><a href="https://www.whatsapp.com/channel/0029VaIRAZ26RGJJNPEPca24" target="_blank"
                                        class="text-white">¡Únete a nuestro grupo de WhatsApp!</a></li>
                                    <li><a href="https://l.instagram.com/?u=https%3A%2F%2Fforms.gle%2FTCM8C2WKdbZkCiKC6&e=AT3qn5sgdgS0BhxQzOKS0LA3UgMgXvdF9N4c6QKe4hbHoNk4RFEc6Cwr1BlUt-CG52uKsW8_yd2VJIMuyjTVFykeG6fdG_b1GYfuIvM2gFO7teUx6uzFIw"
                                        target="_blank" class="text-white">
                                        ¿Quieres ser parte de nuestro equipo?
                                    </a></li>
                                </ul>
                            </div>
                        </div>
                    </div>
                </div>
                <div class="navbar navbar-dark bg-dark navbar-custom shadow-sm">
                    <div class="container">
                        <a href="index.html" class="navbar-brand d-flex align-items-center">
                            <strong>Bogotá MUN D.C.</strong>
                        </a>
                        <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarHeader"
                            aria-controls="navbarHeader" aria-expanded="false" aria-label="Toggle navigation">
                            <span class="navbar-toggler-icon"></span>
                        </button>
                    </div>
                </div>
            </header>
        </>
    );
}

export default Navbar;