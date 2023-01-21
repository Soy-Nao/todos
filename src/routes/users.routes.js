const { Router } = require('express');
const { getAllUsers, getUserById, getUserWithTasks, createUser,updateUser, deleteUser, getUserTodosCategory, } = require('../controllers/users.controllers')
const router = Router();

//localhost:8000/users
//controlador
router.get('/users', getAllUsers);

router.get('/users/:id', getUserById);

//obtener un usuario con sus tareas
router.get('/users/:id/todos', getUserWithTasks);

router.post('/users', createUser);

router.put('/users/:id', updateUser);

router.delete('/users/:id', deleteUser);
module.exports = router;