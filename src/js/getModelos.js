// Función para obtener los modelos según el año
function obtenerModelosPorAnioCiudad(anio, ciudad, db) {
    const ciudades = [
        { key: 'Bogota', db: db.modelosBogota },
        { key: 'Cali', db: db.modelosCali },
        { key: 'Medellin', db: db.modelosMedellin },
        { key: 'Barranquilla', db: db.modelosBarranquilla },
        { key: 'Cartagena', db: db.modelosCartagena }
    ];
    let modelos = [];
    if (ciudad === 'Todas') {
        ciudades.forEach(({ key, db }) => {
            if (!anio || anio === "All") {
                if (db.modelosLegacy) modelos = modelos.concat(Object.values(db.modelosLegacy).map(m => ({ ...m, ciudad: key })));
                if (db.modelos2024) modelos = modelos.concat(Object.values(db.modelos2024).map(m => ({ ...m, ciudad: key })));
                if (db.modelos2025) modelos = modelos.concat(Object.values(db.modelos2025).map(m => ({ ...m, ciudad: key })));
            } else if (anio === "Legacy" && db.modelosLegacy) {
                modelos = modelos.concat(Object.values(db.modelosLegacy).map(m => ({ ...m, ciudad: key })));
            } else if (anio === "2024" && db.modelos2024) {
                modelos = modelos.concat(Object.values(db.modelos2024).map(m => ({ ...m, ciudad: key })));
            } else if (anio === "2025" && db.modelos2025) {
                modelos = modelos.concat(Object.values(db.modelos2025).map(m => ({ ...m, ciudad: key })));
            }
        });
        return modelos;
    } else {
        let dbCiudad = ciudades.find(c => c.key === ciudad)?.db || db.modelosBogota;
        if (!anio || anio === "All") {
            if (dbCiudad.modelosLegacy) modelos = modelos.concat(Object.values(dbCiudad.modelosLegacy).map(m => ({ ...m, ciudad }))); 
            if (dbCiudad.modelos2024) modelos = modelos.concat(Object.values(dbCiudad.modelos2024).map(m => ({ ...m, ciudad }))); 
            if (dbCiudad.modelos2025) modelos = modelos.concat(Object.values(dbCiudad.modelos2025).map(m => ({ ...m, ciudad }))); 
            return modelos;
        }
        if (anio === "Legacy" && dbCiudad.modelosLegacy) {
            return Object.values(dbCiudad.modelosLegacy).map(m => ({ ...m, ciudad }));
        }
        if (anio === "2024" && dbCiudad.modelos2024) {
            return Object.values(dbCiudad.modelos2024).map(m => ({ ...m, ciudad }));
        }
        if (anio === "2025" && dbCiudad.modelos2025) {
            return Object.values(dbCiudad.modelos2025).map(m => ({ ...m, ciudad }));
        }
        return [];
    }
}

export default obtenerModelosPorAnioCiudad;