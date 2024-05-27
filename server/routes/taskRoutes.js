const express = require('express');
const { getTasks, createTask, getTaskById, updateTask, deleteTask } = require('../controllers/taskController');
const auth = require('../middlewares/authMiddleware');
const router = express.Router();

router.get('/', auth, getTasks);
router.post('/', auth, createTask);
router.get('/:id', auth, getTaskById);
router.put('/:id', auth, updateTask);
router.delete('/:id', auth, deleteTask);

module.exports = router;
