// el doble ampersan equivale al operador ternario, pero el bloque solo se ejecuta si es verdadero.
document.getElementById("gallery") &&
    new Macy({ // Macy es una librería para el uso de imágenes
        container: "#gallery",
        trueOrder: false,
        waitForImages: false,
        useOwnImageLoader: false,
        debug: true,
        mobileFirst: true,
        columns: 1,
        margin: {
            y: 15,
            x: 15
        },
        breakAt: {
            1200: 5,
            940: 4,
            520: 1
        }
    });