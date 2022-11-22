const CardTodo = ({ todo }) => {
  return (
    <>
      <div className="mt-4">
        <div className="md:grid md:grid-cols-6 md:gap-6">
          <div className="md:mt-0 md:col-span-6">
            <div className="overflow-hidden overflow-x-auto border rounded-lg">
              <div className="px-4 py-4 sm:px-6">
                <div className="grid grid-cols-1 gap-x-4 gap-y-4 sm:grid-cols-2">
                  <div className="sm:col-span-1">
                    <p className="text-xs font-medium">Judul</p>
                    <p className="mt-1 text-xs">{todo.title}</p>
                  </div>
                  <div className="sm:col-span-1">
                    <p className="text-xs font-medium">Konten</p>
                    <p className="mt-1 text-xs">{todo.content}</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default CardTodo;
