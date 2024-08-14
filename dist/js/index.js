const db = {
    "modelos": [
      {
        "nombre": "RMUN XIX",
        "institucion": "Colegio Rochester",
        "Fecha": "29 y 30 de Enero",
        "linkInstagram": "https://www.instagram.com/rochester.mun/",
        "locacion": "Vereda Fusca, Chia, Cundinamarca, 250008"
      },
      {
        "nombre": "CNGMUN XLII",
        "institucion": "Colegio Nueva Granada",
        "Fecha": "8, 9 y 10 de Febrero",
        "linkInstagram": "https://www.instagram.com/cngmun2024/",
        "locacion": "Cra 2 Este #70-20, Bogota"
      },
      {
        "nombre": "MUNEB 2024",
        "institucion": "Universidad del Bosque",
        "Fecha": "15, 16, 17 y  18 de Febrero",
        "linkInstagram": "https://www.instagram.com/stories/muneb_org/",
        "locacion": "Ak. 9 #131a-2, Bogota"
      },
      {
        "nombre": "CSVMUN III",
        "institucion": "Colegio San Viator",
        "Fecha": "22 y 23 de Febrero",
        "linkInstagram": "https://www.instagram.com/csvmun_/",
        "locacion": "Autopista Nte. #209-51, Suba, Bogota"
      },
      {
        "nombre": "TVSMUN XVII",
        "institucion": "Colegio The Victoria School",
        "Fecha": "23, 24 y 25 de Febrero",
        "linkInstagram": "https://www.instagram.com/tvsmun/",
        "locacion": "Calle 215 No. 50-60, Suba, Bogota"
      },
      {
        "nombre": "CLNMUN VI",
        "institucion": "Colegio Los Nogales",
        "Fecha": "8, 9 y 10 de Marzo",
        "linkInstagram": "https://www.instagram.com/p/Ctjo3t3OQbz/",
        "locacion": "Cl. 202 #5650, Bogota"
      },
      {
        "nombre": "SACMUN XVIII",
        "institucion": "Colegio San Carlos",
        "Fecha": "21, 22 y 23 de Marzo",
        "linkInstagram": "https://www.instagram.com/sacmuncsc/",
        "locacion": "Cl. 192 #9 - 45, Bogota"
      },
      {
        "nombre": "CUMUN",
        "institucion": "Colegio Cumbres",
        "Fecha": "10, 11 y 12 de Abril",
        "linkInstagram": "https://www.instagram.com/cumun__/",
        "locacion": "Autonor. Km. 6 Vereda Yerbabuena, Chia"
      },
      {
        "nombre": "CSMUN X",
        "institucion": "Colegio Bilingue Clermont",
        "Fecha": "10, 11 y 12 de Abril",
        "linkInstagram": "https://www.instagram.com/csmun_/",
        "locacion": "Tv. 80 #213a-17, Bogota"
      }
    ]
};

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
                    <h5 class="card-text"><strong>${db.modelos[i].nombre} ${db.modelos[i].Fecha}</strong></h5>
                    <p class="card-text"> Una breve descripción hablando sobre el modelo.</p>
                    <div class="d-flex justify-content-between align-items-center">
                        <div class="btn-group">
                            <button type="button" class="btn btn-outline-secondary" data-bs-toggle="modal" data-bs-target="#ViewModal">View</button>
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



/*
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
*/