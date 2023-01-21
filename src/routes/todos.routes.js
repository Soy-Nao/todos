const { Router } = require('express');
const { getAllTasks, getTasksById, getTodosWithCategories, createTasks, updateTasks, deleteTasks,  } = require('../controllers/todos.controllers')
const authMiddleware = require('../middlewares/auth.middleware');
const router = Router();

//localhost:8000/Tasks
//controlador
router.get('/tasks', authMiddleware, getAllTasks);

router.get('/tasks/:id', getTasksById);

router.get('/todos/:id/categories', getTodosWithCategories);

router.post('/tasks', createTasks);

router.put('/tasks/:id', updateTasks);

router.delete('/tasks/:id', deleteTasks);


module.exports = router;