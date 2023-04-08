const Todo = require("../models/todoModel");

const createTodo = (newTodo) => {
  return new Promise(async (resolve, reject) => {
    const { title, type, detail_todo, time, user } = newTodo;
    try {
      const created = await Todo.create({
        title,
        type,
        detail_todo,
        time,
        user,
      });
      resolve({
        status: "OK",
        message: "SUCCESS",
        data: created,
      });
    } catch (e) {
      reject(e);
    }
  });
};

const updateTodo = (id, data) => {
  return new Promise(async (resolve, reject) => {
    try {
      const checkProduct = await Todo.findOne({
        _id: id,
      });
      if (checkProduct === null) {
        resolve({
          status: "OK",
          message: "The todo is not define!",
        });
      }
      const update = await Todo.findByIdAndUpdate(id, data, { new: true });
      resolve({
        status: "OK",
        message: "Success!",
        data: update,
      });
    } catch (e) {
      reject(e);
    }
  });
};

const deleteTodo = (id) => {
  return new Promise(async (resolve, reject) => {
    try {
      const checkProduct = await Todo.findOne({
        _id: id,
      });
      if (checkProduct === null) {
        resolve({
          status: "OK",
          message: "The todo is not define!",
        });
      }
      const del = await Todo.findByIdAndDelete(id);
      resolve({
        status: "OK",
        message: "Delete todo Success!",
      });
    } catch (e) {
      reject(e);
    }
  });
};

const getTodo = (id) => {
    return new Promise(async (resolve, reject) => {
      try {
        const allTodo = await Todo.find({user: id}).sort({time: 1})
        const todoComplete = await Todo.find({user: id,isComplete: true})
        resolve({
          status: "OK",
          message: "Get All Todo Success!",
          data: allTodo,
          totalTodo: allTodo.length,
          todoCompleted: todoComplete.length
        })
      } catch (e) {
        reject(e);
      }
    });
  };

const getTodoComplete = (id) => {
    return new Promise(async (resolve, reject) => {
      try {
        const countTodo = await Todo.find({user: id})
        const allTodo = await Todo.find({user: id,isComplete: true})
        resolve({
          status: "OK",
          message: "Get All Todo Success!",
          data: allTodo,
          totalComplete: allTodo.length,
          totalTodo: countTodo.length
        })
      } catch (e) {
        reject(e);
      }
    });
  };

const getTodoNotComplete = (id) => {
    return new Promise(async (resolve, reject) => {
      try {
        const countTodo = await Todo.find({user: id})
        const allTodo = await Todo.find({user: id,isComplete: false})
        resolve({
          status: "OK",
          message: "Get All Todo Success!",
          data: allTodo,
          totalComplete: allTodo.length,
          totalTodo: countTodo.length
        })
      } catch (e) {
        reject(e);
      }
    });
  };

  const getTodoType = (id,filter) => {
    return new Promise(async (resolve, reject) => {
      console.log(filter)
      try {
        const allTodo = await Todo.find({user: id,type: filter}).sort({time: 1})
        resolve({
          status: "OK",
          message: "Get All Todo Success!",
          data: allTodo,
          totalTodo: allTodo.length,
        })
      } catch (e) {
        reject(e);
      }
    });
  };

module.exports = {
  createTodo,
  updateTodo,
  deleteTodo,
  getTodo,
  getTodoComplete,
  getTodoNotComplete,
  getTodoType
};
