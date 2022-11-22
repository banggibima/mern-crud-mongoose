import axios from "axios";
import { useEffect, useState } from "react";
import { Link, useNavigate, useParams } from "react-router-dom";

import Header from "../../components/Header";
import Navbar from "../../components/Navbar";
import FormEditTodo from "../../components/Form/Edit/Todo";

const TodoEdit = () => {
  const [todo, setTodo] = useState({
    title: "",
    content: "",
  });

  const { id } = useParams();
  const navigate = useNavigate();

  useEffect(() => {
    document.title = "Todo";
    getTodo(id);
  }, [id]);

  async function getTodo(id) {
    try {
      await axios
        .get(`http://localhost:5000/api/todo/${id}`)
        .then((res) => setTodo(res.data));
    } catch (err) {
      throw err;
    }
  }

  async function putTodo(id) {
    try {
      await axios.put(`http://localhost:5000/api/todo/${id}`, todo);
      navigate("/dashboard/todo");
    } catch (err) {
      throw err;
    }
  }

  function handleChange(e) {
    try {
      setTodo({ ...todo, [e.target.name]: e.target.value });
    } catch (err) {
      throw err;
    }
  }

  function handleSubmit(e) {
    try {
      e.preventDefault();
      putTodo(id);
    } catch (err) {
      throw err;
    }
  }

  return (
    <>
      <Navbar />
      <Header title={"Edit Todo"} />
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
          <FormEditTodo
            todo={todo}
            handleChange={handleChange}
            handleSubmit={handleSubmit}
          />
        </div>
      </main>
    </>
  );
};

export default TodoEdit;
