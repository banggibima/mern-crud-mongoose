import { Route, Routes } from "react-router-dom";

import Home from "./pages/Home";
import Dashboard from "./pages/Dashboard";
import TodoList from "./pages/Todo/List";
import TodoAdd from "./pages/Todo/Add";
import TodoInfo from "./pages/Todo/Info";
import TodoEdit from "./pages/Todo/Edit";
import About from "./pages/About";
import Error from "./pages/Error";

const App = () => {
  return (
    <>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/dashboard" element={<Dashboard />} />
        <Route path="/dashboard/todo" element={<TodoList />} />
        <Route path="/dashboard/todo/add" element={<TodoAdd />} />
        <Route path="/dashboard/todo/info/:id" element={<TodoInfo />} />
        <Route path="/dashboard/todo/edit/:id" element={<TodoEdit />} />
        <Route path="/about" element={<About />} />
        <Route path="*" element={<Error />} />
      </Routes>
    </>
  );
};

export default App;
