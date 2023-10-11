const paginationLogic = (currentPage, residents) => {
  if (residents.length === 0) {
    return {
      pages: [1],
      residentsPage: [],
    };
  }
  const RESIDENTS_PER_PAGE = 20;

  const totalPages = Math.ceil(residents.length / RESIDENTS_PER_PAGE);

  const sliceEnd = RESIDENTS_PER_PAGE * currentPage;
  const sliceStar = sliceEnd - RESIDENTS_PER_PAGE;

  const residentsPage = residents.slice(sliceStar, sliceEnd);

  const pages = [];
  for (let i = 1; i <= totalPages; i++) {
    pages.push(i);
  }

  return {
    residentsPage,
    pages,
  };
};
export { paginationLogic };
