const db = require("../utils/database");
const Users = require("../models/users.model");
const Todos = require("../models/todos.model");	

const users = [
  {
    //id: 1,
    username: "Nao",
    email: "nao@gmail.com",
    password: "1234",
  },
  {
    //id : 2,
    username: "Stivents",
    email: "stivents@gmail.com",
    password: "1234",
  },
  {
    //id : 3,
    username: "Will",
    email: "will@gmail.com",
    password: "1234",
  },
];

const todos = [
  {
    title: "Tarea 1",
    description: "Tarea 1 Description",
    userId: 1,
  },
  {
    title: "Tarea 2",
    description: "Tarea 1 y 2 Description",
    userId: 1,
  },
  {
    title: "Tarea 3 imposible",
    userId: 2,
  },
  {
    title: "Tarea 3",
    description: "Tarea 3 Description node no me deja",
    userId: 3,
  },
];

// const categories = [];

// const todosCategories = [];

// create
// findOne, findAll, findByPk
// update
// destroy

db.sync({ force: true })
  .then(() => {
    console.log("Iniciando con el sembradio malicioso");
    users.forEach((user) => Users.create(user));
    setTimeout(() => {
        todos.forEach((todo) => Todos.create(todo));
    }, 100);
  })
  .catch((error) => console.log(error));
