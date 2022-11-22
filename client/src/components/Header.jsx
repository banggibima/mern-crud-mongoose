const Header = ({ title }) => {
  return (
    <>
      <header>
        <div className="max-w-3xl mx-auto py-2 px-4 sm:px-6 lg:px-8">
          <h1 className="text-3xl font-bold">{title}</h1>
        </div>
      </header>
    </>
  );
};

export default Header;
