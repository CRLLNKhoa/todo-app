const TodoService = require("../services/todoService");

const createTodo = async (req, res) => {
  try {
    const { title, type, detail_todo, time, user } = req.body;
    if (!title || !type || !detail_todo || !time || !user) {
      return res.status(200).json({
        status: "ERR",
        massage: "Nhập chưa đủ thông tin!",
      });
    }
    const response = await TodoService.createTodo(req.body);
    return res.status(200).json(response);
  } catch (e) {
    return res.status(404).json({
      message: e,
    });
  }
};

const updateTodo = async (req, res) => {
  try {
    const todoId = req.params.id;
    const data = req.body;
    if (!todoId) {
      return res.status(200).json({
        status: "ERR",
        message: "Thiếu ID!",
      });
    }
    const response = await TodoService.updateTodo(todoId, data);
    return res.status(200).json(response);
  } catch (e) {
    return res.status(404).json({
      message: e,
    });
  }
};

const deleteTodo = async (req, res) => {
  const todoId = req.params.id;
  try {
    if (!todoId) {
      return res.status(200).json({
        status: "ERR",
        message: "The id is required",
      });
    }
    const response = await TodoService.deleteTodo(todoId);
    return res.status(200).json(response);
  } catch (e) {
    return res.status(404).json({
      message: e,
    });
  }
};

const getTodo = async (req, res) => {
  try {
    const Id = req.params.id;
    const response = await TodoService.getTodo(Id);
    return res.status(200).json(response);
  } catch (e) {
    return res.status(404).json({
      message: e,
    });
  }
};

const getTodoType = async (req, res) => {
  try {
    const { filter } = req.query;
    const Id = req.params.id;
    const response = await TodoService.getTodoType(Id,filter);
    return res.status(200).json(response);
  } catch (e) {
    return res.status(404).json({
      message: e,
    });
  }
};

const getTodoComplete = async (req, res) => {
  try {
    const Id = req.params.id;
    const response = await TodoService.getTodoComplete(Id);
    return res.status(200).json(response);
  } catch (e) {
    return res.status(404).json({
      message: e,
    });
  }
};
const getTodoNotComplete = async (req, res) => {
  try {
    const Id = req.params.id;
    const response = await TodoService.getTodoNotComplete(Id);
    return res.status(200).json(response);
  } catch (e) {
    return res.status(404).json({
      message: e,
    });
  }
};

module.exports = {
  createTodo,
  updateTodo,
  deleteTodo,
  getTodo,
  getTodoComplete,
  getTodoNotComplete,
  getTodoType,
};
