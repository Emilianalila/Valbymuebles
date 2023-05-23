
const productos = [
    {nombre: "Cambiador", precio: `$`+ 500, id:"1", img:"../img/organizador.png", meGusta: "../img/meGusta.png", idCat:"2"},
    {nombre: "Mesa", precio: `$`+ 800, id:"2", img:"../img/muebleverdulero.png", meGusta: "../img/meGusta.png", idCat:"2"},
    {nombre: "Juguete", precio:`$`+ 600, id:"3", img:"../img/muebleverdulero2.png", meGusta: "../img/meGusta.png", idCat:"3"},
    {nombre: "Silla", precio: `$`+ 400, id:"4", img:"../img/zapatero.png", meGusta: "../img/meGusta.png", idCat:"4"},
];

//async mock,  se refiere a la simulacion o creación de una función asincrónica para realizar pruebas unitarias en JavaScript. En el contexto de pruebas, a menudo se necesita simular el comportamiento de una función asincrónica, como una llamada a una API o una operación de lectura en una base de datos, sin ejecutar realmente la operación real durante las pruebas.
 export const getProductos = () => { //funcion flecha con export adelante, lo cual hace q la pueda utilizar de manera global.
    return new Promise ((resolve) =>{ // que me retorna una promesa la cual va a ser resuelta (resolve) o true por defecto, ya que es solo de practica, entonces vamos por el camino resuelto, para nuestra simulacion
        setTimeout( () => {           // esa promesa en su cuerpo y a la vez contiene a una funcion asincronica (setTimeout) la cual me va a devolver o retornar mis productos con un retraso de 2 segundos.
            resolve(productos)        // el setTimeout pregunta a la promesa, que quieres hacer una vez q tu operacion asincronica termine?
        }, 500)                      // lo que vas a hacer es mostrar que la promesa tiene un resultado exitoso, mostrando los productos de mi array y simulando un retraso de 2 seg
    })
}

//Nueva funcion q nos retorna un item (cuando apretamos el boton Ver detalles nos dirige a un producto en particular dependiendo del Id que elijamos)
export const getProductById = (id) => { 
    return new Promise ((resolve) => { //vamos por el lado del resolve, por q estamos simulando
        setTimeout( () => {           
            resolve(productos.find(prod => prod.id === id))        
        }, 500)  
    })
}

//nueva funcion q retorna toda la categoria
export const getProductoCategoria = (idCategoria) => {
    return new Promise (resolve => {
        setTimeout (() => {
            const productosCategoria = productos.filter(prod => prod.idCat === idCategoria);
            resolve (productosCategoria);
        },100)
      })
    }