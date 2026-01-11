let carrito = [];

//array de objetos, del 0 al 4
let productos = [
    { id: 1, nombre: "guitarra", precio: 150000 },
    { id: 2, nombre: "bajo", precio: 170000 },
    { id: 3, nombre: "pedal", precio: 50000 },
    { id: 4, nombre: "amplificador", precio: 13000 },
    { id: 5, nombre: "auriculares", precio: 30000 }
];

//funcion para agregar al carrito
const agregarAlCarrito = (i) => { // usa el incidice para agregar al carrito
    carrito.push(productos[parseInt(i) - 1]);
};

//funcion para calcular IVA
const calcularIVA = (subtotal, porcentaje = 21) => {
    return subtotal * (porcentaje / 100);
};

//funcion para mostrar el carrito
const mostrarCarrito = () => {
    if (carrito.length === 0) {
        return "Tu carrito está vacío.";
    }
    let detalle = "";
    for (let i = 0; i < carrito.length; i++) {
        detalle += carrito[i].nombre + " - $" + carrito[i].precio + "\n";
    }
    return detalle;
};

// función para vaciar el carrito con confirmación
const vaciarCarrito = () => {
    let confirmar = confirm("¿Estás seguro de que quieres vaciar el carrito?"); // let porque es variable local que se modifica
    if (confirmar) {
        carrito.length = 0; // vacía el array sin cambiar la referencia
        alert("El carrito ha sido vaciado.");
    } else {
        alert("Acción cancelada, el carrito sigue igual.");
    }
};

//funcion para mostrar la cantidad de productos en el carrito
const mostrarCantidadCarrito = () => {
    return carrito.length;
};


//bucle principal
let opcion;

do {
    opcion = prompt(
        "Bienvenido\n\n" + // \n\n salto de línea doble para dejar espacio
        "Ingrese el número del producto que desea agregar al carrito:\n\n" + // \n\n
        "1) Guitarra - $150.000\n" +
        "2) Bajo - $170.000\n" +
        "3) Pedal - $50.000\n" +
        "4) Amplificador - $130.000\n" +
        "5) Auriculares - $30.000\n\n" + // \n\n
        "6) Detalle del carrito\n" +
        "7) Mostrar total + IVA\n" +
        "8) Vaciar carrito\n" +
        "9) Cantidad de productos en el carrito\n"+
        "10) Salir"
    );


    //usa lo que se asigna en opcion con prompt
    switch (opcion) {
        case "1":
            agregarAlCarrito(opcion);
            break;
        case "2":
            agregarAlCarrito(opcion);
            break;
        case "3":
            agregarAlCarrito(opcion);
            break;
        case "4":
            agregarAlCarrito(opcion);
            break;
        case "5":
            agregarAlCarrito(opcion);
            break;
        case "6":
            alert("Detalle del carrito:\n" + mostrarCarrito());
            break;
        case "7":
            let suma = 0;
            for (let i = 0; i < carrito.length; i++) { //reccorre la cantidad de elementos en el carrito
                suma += carrito[i].precio; //suma el precio de cada elemento
            }
            let iva = calcularIVA(suma);
            let totalConIVA = suma + iva;
            alert("Gracias por su compra\n" + "Subtotal: $" + suma + "\n" + "IVA (21%): $" + iva + "\n" + "TOTAL: $" + totalConIVA
            );
            break;
        case "8":
            vaciarCarrito();
            break;
        case "9":
            alert("Cantidad de productos en el carrito: " + mostrarCantidadCarrito());
            break;
        case "10": alert("Programa finalizado. ¡Gracias por su compra!");
            break;
        default:
            alert("Opción no válida, por favor ingrese un número del 1 al 10");
            break;
    }
} while (opcion !== "10"); // trabajar con strings
