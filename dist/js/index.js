function mostrarPosts() {
    const numeroPosts = document.getElementById('number-post').value;
    const contenedorPosts = document.querySelector('.contenedor-posts');
    contenedorPosts.innerHTML = ''; // Limpiar el contenedor antes de agregar nuevos posts

    for (let i = 0; i < numeroPosts; i++) {
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
                            <img src="img/Imagen_ONU_Prueba.png" class="d-block w-100" alt="...">
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
                    <h5 class="card-text"><strong>[Nombre del Modelo] [Fecha de modelo]</strong></h5>
                    <p class="card-text"> Una breve descripción hablando sobre el modelo.</p>
                    <div class="d-flex justify-content-between align-items-center">
                        <div class="btn-group">
                            <button type="button" class="btn btn-outline-secondary" data-bs-toggle="modal" data-bs-target="#ViewModal">View</button>
                            <button type="button" class="btn btn-sm btn-outline-secondary" data-bs-toggle="modal" data-bs-target="#EditModal">Edit</button>
                        </div>
                        <small class="text-body-secondary">9 mins</small>
                    </div>
                </div>
            </div>
        `;
        post.innerHTML = postContent;
        contenedorPosts.appendChild(post);
    }
}
const editCardBody = document.getElementById("editCardBody");
const editBtnY = document.getElementById("editBtn1");
function editarPosts() {
    editCardBody.innerHTML =
        `<h8 class='card-text'><strong>Selecciona la Imagen: </strong></h8>
        <br>
        <input type='file' id='imagen'>
        <br>
        <br>
        <h8 class='card-text'><strong>Escribe el nuevo nombre y Fecha con el siguiente formato: </strong></h8>
        <p class='card-text'>[Nombre del Modelo] [Fecha de modelo]</p>
        <input type='text' id='titulo-fecha'></input>
        <br>
        <br>
        <h9 class='card-text'><strong>Ingresa la nueva descripción del modelo</strong></h9>
        <br>
        <input type='text' id='descripcion'></input>
        <h5 class="card-text">¿Quieres salir del modo de edición?</h5>
        <div class="btn-group">
            <button onclick="salirEditMode()" id='editBtn1' type="button" class="btn btn-sm btn-outline-secondary">
                Si
            </button>
            <button onclick="quedarseEditMode()" id='editBtn0' type="button" class="btn btn-sm btn-outline-secondary">
                No
            </button>
        </div>`;
}

const editBtnN = document.getElementById("editBtn0");
function noEditarPosts() {
    editCardBody.innerHTML = `
    <div id="editModalCarouselIndicators" class="carousel slide">
        <div class="carousel-indicators">
            <button id="slide" type="button" data-bs-target="#editModalCarouselIndicators"
                data-bs-slide-to="0" class="active" aria-current="true"
                aria-label="Slide 1"></button>
            <button id="slide" type="button" data-bs-target="#editModalCarouselIndicators"
                data-bs-slide-to="1" aria-label="Slide 2"></button>
            <button id="slide" type="button" data-bs-target="#viewModalCarouselIndicators"
                data-bs-slide-to="2" aria-label="Slide 3"></button>
        </div>
        <div class="carousel-inner">
            <div class="carousel-item active">
                <img src="img/Imagen_ONU_Prueba.png" class="d-block w-100" alt="...">
            </div>
            <div class="carousel-item">
                <img src="img/Imagen_ONU_Prueba.png" class="d-block w-100" alt="...">
            </div>
            <div class="carousel-item">
                <img src="img/Imagen_ONU_Prueba.png" class="d-block w-100" alt="...">
            </div>
        </div>
        <button id="carousel-btn" class="carousel-control-prev" type="button"
            data-bs-target="#editModalCarouselIndicators" data-bs-slide="prev">
            <span class="carousel-control-prev-icon" aria-hidden="true"></span>
            <span class="visually-hidden">Previous</span>
        </button>
        <button id="carousel-btn" class="carousel-control-next" type="button"
            data-bs-target="#editModalCarouselIndicators" data-bs-slide="next">
            <span class="carousel-control-next-icon" aria-hidden="true"></span>
            <span class="visually-hidden">Next</span>
        </button>
    </div>
    <br>
    <h5 class="card-text">
        <strong>[Nombre del Modelo] [Fecha de modelo]</strong>
    </h5>
    <p class="card-text">
        Una breve descripción hablando sobre el modelo.
        <div class="d-flex justify-content-between align-items-center">
            <small class="text-body-secondary">9 mins</small>
        </div>
    </p>`
}

function quedarseEditMode() {
    editCardBody.innerHTML =
        `<h8 class='card-text'><strong>Selecciona la Imagen: </strong></h8>
        <br>
        <input type='file' id='imagen'>
        <br>
        <br>
        <h8 class='card-text'><strong>Escribe el nuevo nombre y Fecha con el siguiente formato: </strong></h8>
        <p class='card-text'>[Nombre del Modelo] [Fecha de modelo]</p>
        <input type='text' id='titulo-fecha'></input>
        <br>
        <br>
        <h9 class='card-text'><strong>Ingresa la nueva descripción del modelo</strong></h9>
        <br>
        <input type='text' id='descripcion'></input>`;
}

function salirEditMode() {
    editCardBody.innerHTML =`
    <div id="editModalCarouselIndicators" class="carousel slide">
        <div class="carousel-indicators">
            <button id="slide" type="button" data-bs-target="#editModalCarouselIndicators"
                data-bs-slide-to="0" class="active" aria-current="true"
                aria-label="Slide 1"></button>
            <button id="slide" type="button" data-bs-target="#editModalCarouselIndicators"
                data-bs-slide-to="1" aria-label="Slide 2"></button>
            <button id="slide" type="button" data-bs-target="#viewModalCarouselIndicators"
                data-bs-slide-to="2" aria-label="Slide 3"></button>
        </div>
        <div class="carousel-inner">
            <div class="carousel-item active">
                <img src="img/Imagen_ONU_Prueba.png" class="d-block w-100" alt="...">
            </div>
            <div class="carousel-item">
                <img src="img/Imagen_ONU_Prueba.png" class="d-block w-100" alt="...">
            </div>
            <div class="carousel-item">
                <img src="img/Imagen_ONU_Prueba.png" class="d-block w-100" alt="...">
            </div>
        </div>
        <button id="carousel-btn" class="carousel-control-prev" type="button"
            data-bs-target="#editModalCarouselIndicators" data-bs-slide="prev">
            <span class="carousel-control-prev-icon" aria-hidden="true"></span>
            <span class="visually-hidden">Previous</span>
        </button>
        <button id="carousel-btn" class="carousel-control-next" type="button"
            data-bs-target="#editModalCarouselIndicators" data-bs-slide="next">
            <span class="carousel-control-next-icon" aria-hidden="true"></span>
            <span class="visually-hidden">Next</span>
        </button>
    </div>
    <h5 class="card-text"><strong>¿Deseas editar la información del modelo?</strong></h5>
    <div class="btn-group">
        <button onclick="editarPosts()" id='editBtn1' type="button" class="btn btn-sm btn-outline-secondary">
            Si
        </button>
        <button onclick="noEditarPosts()" id='editBtn0' type="button" class="btn btn-sm btn-outline-secondary">
            No
        </button>
    </div>
    <br>
    <h5 class="card-text">
        <strong>[Nombre del Modelo] [Fecha de modelo]</strong>
    </h5>
    <p class="card-text">
        Una breve descripción hablando sobre el modelo.
        <div class="d-flex justify-content-between align-items-center">
            <small class="text-body-secondary">9 mins</small>
        </div>
    </p>`
}