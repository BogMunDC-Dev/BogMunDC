// Helper para obtener imágenes del modelo
export const getImagenesModelo = (modelo, ciudad, modeloImagenes) => {
    const ciudadKey = modelo.ciudad || ciudad;
    let nombreModelo = modelo.nombre;
    // Normaliza: elimina año, espacios, puntos y mayúsculas
    let base = nombreModelo
        .replace(/\s*([XVIL]+|\d+|['’]\d+|\d{4})$/, "")
        .replace(/\s+/g, "")
        .replace(/['’]/g, "")
        .replace(/\./g, "")
        .toUpperCase();
    let imagenes = null;
    if (modeloImagenes[ciudadKey]) {
        imagenes = modeloImagenes[ciudadKey][nombreModelo];
        if (!imagenes) {
            imagenes = modeloImagenes[ciudadKey][base];
        }
    }
    if (imagenes && imagenes.length) return imagenes;
    return ["img/Imagen_ONU_Prueba.png"];
};
