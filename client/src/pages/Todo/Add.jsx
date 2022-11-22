import axios from "axios";
import { useEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom";

import Header from "../../components/Header";
import Navbar from "../../components/Navbar";
import FormAddTodo from "../../components/Form/Add/Todo";

const TodoAdd = () => {
  const [todo, setTodo] = useState({
    title: "",
    content: "",
  });

  const navigate = useNavigate();

  useEffect(() => {
    document.title = "Todo";
  });

  const postTodo = async () => {
    try {
      await axios.post(`http://localhost:5000/api/todo`, todo);
      navigate("/dashboard/todo");
    } catch (err) {
      throw err;
    }
  };

  async function handleChange(e) {
    try {
      setTodo({ ...todo, [e.target.name]: e.target.value });
    } catch (err) {
      throw err;
    }
  }

  async function handleSubmit(e) {
    try {
      e.preventDefault();
      postTodo();
    } catch (err) {
      throw err;
    }
  }

  return (
    <>
      <Navbar />
      <Header title={"Tambah Todo"} />
      <main>
        <div className="max-w-3xl mx-auto p-4 sm:px-6 lg:px-8">
          <div className="sm:flex-none space-x-2">
            <Link
              to={`/dashboard/todo`}
              className="inline-flex items-center justify-center px-3 py-2 rounded-lg border text-xs font-semibold hover:text-sky-600 hover:bg-sky-50 hover:border-sky-600 focus:outline-none focus:ring-transparent sm:w-auto"
            >
              Kembali
            </Link>
          </div>
          <FormAddTodo
            todo={todo}
            handleChange={handleChange}
            handleSubmit={handleSubmit}
          />
        </div>
      </main>
    </>
  );
};

export default TodoAdd;
