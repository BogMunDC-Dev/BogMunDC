import React from 'react';
import '../Bootstrap/css/bootstrap.min.css';
import '../Bootstrap/js/bootstrap.bundle.min.js';
import '../css/style.css';
import Header_Models from './header_models.jsx';
import db from './modelos.js';
import mostrarPost from './index.jsx';

function mostrarPostsDefault() {
    const numeroPostsDefault = 6;
    const contenedorPosts = document.querySelector('.contenedor-posts');
    contenedorPosts.innerHTML = ''; // Limpiar el contenedor antes de agregar nuevos posts

    for (let i = 0; i < numeroPostsDefault; i++) {
        const post = document.createElement('div');
        post.classList.add('post', 'col', 'id="post-model"'); // Add all provided classes

        const postContent = `
                                <div class="card shadow-sm">
                                    <div id="carouselExampleIndicators${i}" class="carousel slide">
                                        <div class="carousel-indicators">
                                            <button id="slide" type="button" data-bs-target="#carouselExampleIndicators${i}"
                                                data-bs-slide-to="0" class="active" aria-current="true"
                                                aria-label="Slide 1"></button>
                                            <button id="slide" type="button" data-bs-target="#carouselExampleIndicators${i}"
                                                data-bs-slide-to="1" aria-label="Slide 2"></button>
                                            <button id="slide" type="button" data-bs-target="#carouselExampleIndicators${i}"
                                                data-bs-slide-to="2" aria-label="Slide 3"></button>
                                        </div>
                                        <div class="carousel-inner">
                                            <div class="carousel-item active">
                                                <img src="img/Imagen_ONU_Prueba.png" class="d-block w-100 h-100" alt="...">
                                            </div>
                                            <div class="carousel-item">
                                                <img src="img/Imagen_ONU_Prueba.png" class="d-block w-100" alt="...">
                                            </div>
                                            <div class="carousel-item">
                                                <img src="img/Imagen_ONU_Prueba.png" class="d-block w-100" alt="...">
                                            </div>
                                        </div>
                                        <button id="carousel-btn" class="carousel-control-prev" type="button"
                                            data-bs-target="#carouselExampleIndicators${i}" data-bs-slide="prev">
                                            <span class="carousel-control-prev-icon" aria-hidden="true"></span>
                                            <span class="visually-hidden">Previous</span>
                                        </button>
                                        <button id="carousel-btn" class="carousel-control-next" type="button"
                                            data-bs-target="#carouselExampleIndicators${i}" data-bs-slide="next">
                                            <span class="carousel-control-next-icon" aria-hidden="true"></span>
                                            <span class="visually-hidden">Next</span>
                                        </button>
                                    </div>
                                    <div class="card-body">
                                        <h5 class="card-text"><strong>${db.modelosAll[i].institucion}</strong></h5>
                                        <h4 class="card-text">${db.modelosAll[i].nombre}</h4>
                                        <h5 class="card-text"><i>Fecha: ${db.modelosAll[i].Fecha}</i></h5>
                                        <p class="card-text" id="direccion">Dirección: ${db.modelosAll[i].locacion} </p>
                                        <p class="card-text" id="linkIns"><a href="${db.modelosAll[i].linkInstagram}">Instagram </a></p>
                                        <div class="d-flex justify-content-between align-items-center">
                                            <div class="btn-group">
                                                <!--- <button type="button" class="btn btn-outline-secondary" data-bs-toggle="modal" data-bs-target="#ViewModal">Ver mas...</button> --->
                                            </div>
                                            <!-- <small class="text-body-secondary">9 mins</small> -->
                                        </div>
                                    </div>
                                </div>
                                `;
        post.innerHTML = postContent;
        contenedorPosts.appendChild(post);
    }
}

document.addEventListener("DOMContentLoaded", function () {
    mostrarPostsDefault();
});


function UnModels() {
    return (
        <>
            <main>
                <section class="py-5 text-center container">
                    <div class="row py-lg-5">
                        <div class="col-lg-6 col-md-8 mx-auto">
                            <h1 class="fw-light">Bienvenido/a a Bogotá Mun D.C.</h1>
                            <p class="lead text-body-secondary">
                                Bienvenido/a a la base de datos sobre Modelos de Naciones Unidas en Bogotá (próximamente en toda
                                Colombia)
                            </p>
                        </div>
                    </div>
                </section>
                <div class="album py-5 bg-body-tertiary">
                    <div class="container" id="main-container">
                        <button class="btn" id="numeroPostModalBtn" type="button" data-bs-toggle="modal" data-bs-target="#contenedor-numero-postsModal">
                            <span class="navbar-toggler-icon"></span>
                        </button>
                        <div class="modal fade" id="contenedor-numero-postsModal" tabindex="-1" aria-labelledby="NumeroPostModalLabel" aria-hidden="true">
                            <div class="modal-dialog modal-dialog-centered modal-dialog-scrollable">
                                <div class="modal-content">
                                    <div class="modal-header">
                                        <h1 class="modal-title fs-5" id="loginModalLabel">Filtros de busqueda</h1>
                                        <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                                    </div>
                                    <div class="modal-body">
                                        <div class="shadow-sm container w-100 card" id="contenedor-numero-posts">
                                            <label> Cantidad de post que quieres ver: </label>
                                            <input type="number" id="number-post" min="3" value="3" max="38" />
                                                <button onclick={mostrarPost} type="button" class="enterBtn btn btn-sm btn-outline-secondary">
                                                    Enter
                                                </button>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div class="contenedor-posts row row-cols-1 row-cols-sm-2 row-cols-md-3 g-3" id="list-post">
                        </div>
                    </div>
                </div>
            </main>
        </>
    );
}

export default UnModels;