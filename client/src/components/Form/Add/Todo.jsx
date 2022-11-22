const FormAddTodo = ({ todo, handleChange, handleSubmit }) => {
  return (
    <>
      <div className="mt-4">
        <div className="md:grid md:grid-cols-6 md:gap-6">
          <div className="md:mt-0 md:col-span-6">
            <div className="overflow-hidden overflow-x-auto border rounded-lg">
              <form onSubmit={handleSubmit}>
                <div className="px-4 py-5 sm:p-6">
                  <div className="grid grid-cols-6 gap-4">
                    <div className="col-span-6 sm:col-span-3">
                      <label
                        htmlFor="title"
                        className="block text-xs font-medium"
                      >
                        Judul
                      </label>
                      <input
                        type="text"
                        id="title"
                        name="title"
                        value={todo.title}
                        onChange={handleChange}
                        className="mt-1 block w-full text-xs border-gray-200 focus:ring-transparent focus:border-gray-200 rounded-lg"
                      />
                    </div>
                    <div className="col-span-6 sm:col-span-3">
                      <label
                        htmlFor="content"
                        className="block text-xs font-medium"
                      >
                        Konten
                      </label>
                      <input
                        type="text"
                        id="content"
                        name="content"
                        value={todo.content}
                        onChange={handleChange}
                        className="mt-1 block w-full text-xs border-gray-200 focus:ring-transparent focus:border-gray-200 rounded-lg"
                      />
                    </div>
                  </div>
                </div>
                <div className="px-4 py-3 border-t text-right sm:px-6">
                  <button
                    type="submit"
                    className="inline-flex items-center justify-center px-3 py-2 rounded-lg border text-xs font-semibold hover:text-sky-600 hover:bg-sky-100 focus:outline-none focus:ring-transparent sm:w-auto"
                  >
                    Simpan
                  </button>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default FormAddTodo;
