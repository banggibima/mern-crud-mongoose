const { Router } = require("express");

const { index, create, destroy, show, update } = require("../controllers/todo");

const Todo = Router();

Todo.route("/").get(index);
Todo.route("/").post(create);
Todo.route("/:id").get(show);
Todo.route("/:id").put(update);
Todo.route("/:id").delete(destroy);

module.exports = Todo;
