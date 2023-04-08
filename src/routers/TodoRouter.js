const express = require("express")
const router = express.Router()
const todoController = require("../controllers/todoController")

router.post("/create", todoController.createTodo)
router.put("/update/:id", todoController.updateTodo)
router.delete("/delete/:id", todoController.deleteTodo)
router.get("/get-todo/:id", todoController.getTodo)
router.get("/get-todo-type/:id", todoController.getTodoType)
router.get("/get-todo-completed/:id", todoController.getTodoComplete)
router.get("/get-todo-not-complete/:id", todoController.getTodoNotComplete)

module.exports = router