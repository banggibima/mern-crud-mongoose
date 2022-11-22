const { model, Schema } = require("mongoose");

const todoSchema = new Schema({
  title: { type: String, required: true },
  content: { type: String, required: true },
});

const Todo = model("Todo", todoSchema);

module.exports = Todo;
