const { argv } = require('./config/yargs');
const toDo = require('./to-do/to-do');

let command = argv._[0];

switch (command) {
    case 'crear':
        let task = toDo.create(argv.description);
        console.log(task);
        break;

    case 'listar':
        let list = toDo.list();
        for (let task of list) {
            console.log('======== To Do ========'.green);
            console.log(task.description);
            console.log('Status: ', task.completed);
            console.log('======================='.green);
        }
        break;

    case 'actualizar':
        let updated = toDo.update(argv.description, argv.completed);
        console.log(updated);
        break;

    case 'borrar':
        let deleted = toDo.delete(argv.description);
        console.log(deleted);
        break;

    default:
        console.log('Comando no reconocido');
}