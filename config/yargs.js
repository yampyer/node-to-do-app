const description = {
    demand: true,
    alias: 'd',
    desc: 'Descripción de la tarea por hacer'
};

const completed = {
    default: true,
    alias: 'c',
    desc: 'Marca tarea como completado o pendiente'
};

const argv = require('yargs')
    .command('listar', 'Lista las tareas por hacer')
    .command('crear', 'Crear un elemento por hacer', { description })
    .command('borrar', 'Elimina un elemento por hacer', { description })
    .command('actualizar', 'Actualiza el estado completado de una tarea', {
        description,
        completed
    })
    .help()
    .argv;

module.exports = {
    argv
}