const OpcionalList = ({ pages, currentPage, setCurrentPage }) => {
  return (
    <section>
      <ul className="text-lg flex gap-3 justify-center flex-wrap pb-10">
        {pages.map((page) => (
          <li key={page}>
            <button
              className={`bg-white text-black p-2 ${
                page === currentPage && "bg-green-400"
              }`}
              onClick={() => setCurrentPage(page)}
            >
              {page}
            </button>
          </li>
        ))}
      </ul>
    </section>
  );
};
export default OpcionalList;
