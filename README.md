# ¡Bienvenid@ a BogMunDC!

### ¿Qué es BogMunDC?

BogMunDC es una base de datos creada y mantenido por estudiantes de distintos colegios de Bogotá D.C. con el objetivo de dar toda la información que un/a delegad@ en MUN pueda necesitar para movilizarse y estructurar sus horarios inicialmente dentro de la ciudad de Bogotá.

## Etapas de desarrollo:

- [ ] [Etapa 1: Principios](https://github.com/BogMunDC-Dev/BogMunDC/issues/3)


### Ultimos cambios:
- El archivo `legacy.txt` almacena todo el codigo basura de `index.html`, para evitar errores en `index.html`
- La base de datos provicional esta en index.js como un JSON, para poder almacenar detalles basicos de los modelos
- Se eliminaron los botones para editar los modelos, para iniciar sesion y registrarse en la pagina temporalmente hasta sean necesarios utilizarlos
- En `index.html` ahora se puede ver el nombre y fecha de los modelos


### Lista de proximas mejoras a la pagina:
- [x] Pasar un JSON a un .js para la base de datos, y luego usar `index.js` para manipular las plantillas
- [ ] Detectar si el dispositivo que esta viendo la pagina tiene el tamaño minimo para que la intervaz no se rompa, y si no llega al minimo, cambiarla a otro diseño
- Mejorar la interfaz del contenedor `contenedor-numero-posts` para que no ocupe mucho espacio
- [x] Quitar todos los botones relacionados a editar algun post, o de iniciar sesion/registrarse
