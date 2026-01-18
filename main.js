let carrito = [];

//array de objetos (CATÁLOGO, no lleva cantidad)
let productos = [
    { id: 1, nombre: "guitarra", precio: 150000 },
    { id: 2, nombre: "bajo", precio: 170000 },
    { id: 3, nombre: "pedal", precio: 50000 },
    { id: 4, nombre: "amplificador", precio: 13000 },
    { id: 5, nombre: "auriculares", precio: 30000 }
];

// (1) función para agregar al carrito con acumulación de cantidades
const agregarAlCarrito = (i) => {
    let producto = productos[parseInt(i) - 1];
    // (1a) buscamos si ya existe en el carrito
    let item = carrito.find(itemCarrito => itemCarrito.id === producto.id);
    if (item) {
        item.cantidad += 1; // (1b) si existe, aumentamos cantidad
    } else {
        // (1c) si no existe, lo agregamos con cantidad = 1
        carrito.push({
            id: producto.id,
            nombre: producto.nombre,
            precio: producto.precio,
            cantidad: 1
        });
    }
};

// función para calcular IVA
const calcularIVA = (subtotal, porcentaje = 21) => {
    return subtotal * (porcentaje / 100);
};

// (2) función para mostrar el carrito con cantidades
const mostrarCarrito = () => {
    if (carrito.length === 0) {
        return "Tu carrito está vacío.";
    }
    let detalle = "";
    for (let i = 0; i < carrito.length; i++) {
        // (2a) mostramos nombre, cantidad y precio total por producto
        detalle += carrito[i].nombre + " x" + carrito[i].cantidad +
                   " - $" + (carrito[i].precio * carrito[i].cantidad) + "\n";
    }
    return detalle;
};

// función para vaciar el carrito con confirmación
const vaciarCarrito = () => {
    let confirmar = confirm("¿Estás seguro de que quieres vaciar el carrito?");
    if (confirmar) {
        carrito.length = 0;
        alert("El carrito ha sido vaciado.");
    } else {
        alert("Acción cancelada, el carrito sigue igual.");
    }
};

// (3) función para mostrar la cantidad total de productos en el carrito
const mostrarCantidadCarrito = () => {
    // (3a) ahora sumamos todas las cantidades, no solo la longitud del array
    return carrito.reduce((acc, item) => acc + item.cantidad, 0);
};

// función principal
const iniciarPrograma = () => {
    let opcion;
    do {
        opcion = prompt(
            "Bienvenido\n\n" +
            "Ingrese el número del producto que desea agregar al carrito:\n\n" +
            "1) Guitarra - $150.000\n" +
            "2) Bajo - $170.000\n" +
            "3) Pedal - $50.000\n" +
            "4) Amplificador - $13.000\n" +
            "5) Auriculares - $30.000\n\n" +
            "6) Detalle del carrito\n" +
            "7) Mostrar total + IVA\n" +
            "8) Vaciar carrito\n" +
            "9) Cantidad de productos en el carrito\n" +
            "10) Salir"
        );

        switch (opcion) {
            case "1": case "2": case "3": case "4": case "5":
                agregarAlCarrito(opcion);
                break;
            case "6":
                alert("Detalle del carrito:\n" + mostrarCarrito());
                break;
            case "7":
                let suma = 0;
                for (let i = 0; i < carrito.length; i++) {
                    // (4) ahora el subtotal se calcula con precio * cantidad
                    suma += carrito[i].precio * carrito[i].cantidad;
                }
                let iva = calcularIVA(suma);
                let totalConIVA = suma + iva;

                alert("Resumen de compra\nSubtotal: $" + suma +
                      "\nIVA (21%): $" + iva +
                      "\nTOTAL: $" + totalConIVA);

                // confirmación de compra
                let confirmarCompra = confirm("¿Desea finalizar la compra?");
                if (confirmarCompra) {
                    carrito.length = 0;
                    alert("¡Gracias por su compra! El carrito ha sido vaciado.");
                } else {
                    alert("Compra cancelada. El carrito sigue igual.");
                }
                break;
            case "8":
                vaciarCarrito();
                break;
            case "9":
                alert("Cantidad de productos en el carrito: " + mostrarCantidadCarrito());
                break;
            case "10":
                alert("Programa finalizado. ¡Gracias por su compra!");
                break;
            default:
                alert("Opción no válida, por favor ingrese un número del 1 al 10");
                break;
        }
    } while (opcion !== "10");
};

iniciarPrograma();
