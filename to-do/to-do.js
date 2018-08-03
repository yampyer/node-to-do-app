const fs = require('fs');
const colors = require('colors');

let toDoList = [];

const saveDB = () => {
    let data = JSON.stringify(toDoList);
    fs.writeFile(`db/data.json`, data, error => {
        if (error) throw new Error('No se pudo guardar', error);
    });
}

const loadDB = () => {

    try {
        toDoList = require('../db/data.json');
    } catch (error) {
        toDoList = [];
    }
}

const create = description => {
    let toDo = {
        description,
        completed: false
    }

    loadDB();

    toDoList.push(toDo);

    saveDB();

    return toDo;
}

const list = () => {
    loadDB();
    return toDoList;
}

const update = (description, completed = true) => {
    loadDB();

    let index = toDoList.findIndex(task => task.description == description);

    if (index >= 0) {
        toDoList[index].completed = completed;
        saveDB();
        return true;
    } else {
        return false;
    }
}

const deleteTask = description => {
    loadDB();

    let newList = toDoList.filter(task => task.description !== description);

    if (toDoList.length === newList.length) {
        return false;
    } else {
        toDoList = newList;
        saveDB();
        return true;
    }
}

module.exports = {
    create,
    list,
    update,
    delete: deleteTask
}