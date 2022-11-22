import { Link } from "react-router-dom";

const TableTodo = ({ todos, deleteTodo }) => {
  return (
    <>
      <div className="mt-4">
        <div className="md:grid md:grid-cols-6 md:gap-6">
          <div className="md:mt-0 md:col-span-6">
            <div className="overflow-hidden overflow-x-auto border rounded-lg">
              <table className="min-w-full divide-y">
                {todos.length > 0 ? (
                  <thead className="">
                    <tr>
                      <th
                        scope="col"
                        className="px-4 py-2 text-left text-xs font-semibold"
                      >
                        Judul
                      </th>
                      <th
                        scope="col"
                        className="px-4 py-2 text-left text-xs font-semibold"
                      >
                        Konten
                      </th>
                      <th
                        scope="col"
                        className="relative py-3.5 pl-3 pr-4 sm:pr-6"
                      >
                        <span className="sr-only">Action</span>
                      </th>
                    </tr>
                  </thead>
                ) : (
                  <></>
                )}
                <tbody className="divide-y divide-zinc-200 bg-white">
                  {todos.length > 0 ? (
                    todos.map((todo) => (
                      <tr key={todo._id}>
                        <td className="whitespace-nowrap px-4 py-2 text-xs">
                          {todo.title}
                        </td>
                        <td className="whitespace-nowrap px-4 py-2 text-xs">
                          {todo.content}
                        </td>
                        <td className="relative whitespace-nowrap py-1 pl-3 pr-4 text-right text-xs font-medium sm:pr-6 space-x-2">
                          <Link
                            to={`/dashboard/todo/info/${todo._id}`}
                            className="hover:text-sky-600"
                          >
                            Detail
                          </Link>
                          <Link
                            to={`/dashboard/todo/edit/${todo._id}`}
                            className="hover:text-sky-600"
                          >
                            Edit
                          </Link>
                          <button
                            onClick={() => deleteTodo(todo._id)}
                            className="hover:text-rose-600"
                          >
                            Hapus
                          </button>
                        </td>
                      </tr>
                    ))
                  ) : (
                    <tr>
                      <td className="whitespace-nowrap px-3 py-4 text-xs font-semibold text-zinc-700">
                        Data todo kosong
                      </td>
                    </tr>
                  )}
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default TableTodo;
