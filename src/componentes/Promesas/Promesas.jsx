// Clase 6. Las Promesas son un objeto de JS que tiene dos objetos y representa un evento a futuro, en general, el resultado eventual de una peticion asincrona. Estas tienen 3 estados: pending, fullfilled, rejected. 

const Promesas = () => {
    // Programacion sincronica, ejecuta una tarea a la vez:
    console.log('Tarea uno');
    console.log('Tarea dos');

    // Programacion asincronica: Ejecuta varias tareas a la vez, en orden no secuencial. Se usan eventos de tiempo para retrasar la ejecución de cierto código setTimeout(), o para repetir código a un intervalo de tiempo específico setInterval(), con milisegundos 2000 (dos segundos); 1000 (1 segundo). 
    // setTimeout() utiliza dos parametros la función que quieres llamar y el tiempo a retrasar la ejecución de la función. 
    // setInterval() tambien utiliza dos parametros la función que quieres llamar y el tiempo en milisegundos a retrasar cada ejecución de la función. Por ejemplo si se quiere mostrar informacion actualizada de otra pagina como seria la cotizacion del dolar, que cada tantos segundos se actualice. 

    setTimeout(() => {
        console.log('Tarea B')
    }, 2000)

    // Se muestra primero 'Tarea C' porque tarda menos segundos, despues 'Tarea B'

    setTimeout(() => {
        console.log('Tarea C')
    }, 1000)

    // Promesa con dos objetos. Puede ser resolve(true) o reject(false)

    const cumplirPromesas = (estado) => {
        return new Promise((resolve, reject) => {
            if (estado) {
                resolve('Promesa cumplida');
            } else {
                reject('Promesa incumplida');
            }
        })
    }

    console.log(cumplirPromesas(false));

    // THEN y CATCH. Se pueden concatenar dos metodos que permiten ejecutar una funcion cuando la promesa se cumple o se rechaza. Metodo THEN (cumple), CATCH (rechaza) y FINALLY (se ejecuta siempre).

    cumplirPromesas(true)
        .then(respuesta => console.log("Todo joya"))
        .catch(error => console.log("Todo mal"))

    // Practicar con un array de datos:

    const array = ["Inuyasha", "Sakura", "Dragon Ball", "Death Note"];

    const solicitarAnimes = (estado) => {
        return new Promise((resolve, reject) => {
            if (estado) {
                resolve(array);
            } else {
                reject("No se emiten animes");
            }
        })
    }

    solicitarAnimes(true)
        .then(respuesta => {
            console.table(respuesta);
        })
        .catch(error => console.log(error))


    return (
        <div>Promesas</div>
    )
}


export default Promesas