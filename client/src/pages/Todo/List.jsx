import { Link } from "react-router-dom";

import Navbar from "../../components/Navbar";
import Header from "../../components/Header";
import TableTodo from "../../components/Table/Todo";
import { useEffect, useState } from "react";
import axios from "axios";

const TodoList = () => {
  const [todos, setTodos] = useState([]);

  useEffect(() => {
    document.title = "Todo";
    getTodos();
  }, []);

  async function getTodos() {
    try {
      await axios
        .get(`http://localhost:5000/api/todo`)
        .then((res) => setTodos(res.data));
    } catch (err) {
      throw err;
    }
  }

  async function deleteTodo(id) {
    try {
      await axios.delete(`http://localhost:5000/api/todo/${id}`);
      getTodos();
    } catch (err) {
      throw err;
    }
  }

  return (
    <>
      <Navbar />
      <Header title={"Daftar Todo"} />
      <main>
        <div className="max-w-3xl mx-auto p-4 sm:px-6 lg:px-8">
          <div className="sm:flex-none space-x-2">
            <Link
              to={`/dashboard/todo/add`}
              className="inline-flex items-center justify-center px-3 py-2 rounded-lg border text-xs font-semibold hover:text-sky-600 hover:bg-sky-50 hover:border-sky-600 focus:outline-none focus:ring-transparent sm:w-auto"
            >
              Tambah Todo
            </Link>
          </div>
          <TableTodo todos={todos} deleteTodo={deleteTodo} />
        </div>
      </main>
    </>
  );
};

export default TodoList;
