


const Promesas = () => {
    // Programacion sincronica, ejecuta una tarea a la vez:
    console.log('Tarea uno');
    console.log('Tarea dos');

    // Programacion asincronica: Ejecuta varias tareas a la vez, en orden no secuencial. 2000 (dos segundos); 1000 (1 segundo).

    setTimeout(() => {
        console.log('Tarea B')
    }, 2000)

    // Se muestra primero 'Tarea C' porque tarda menos segundos, despues 'Tarea B'

    setTimeout(() => {
        console.log('Tarea C')
    }, 1000)

    return (
        <div>Promesas</div>
    )
}

export default Promesas