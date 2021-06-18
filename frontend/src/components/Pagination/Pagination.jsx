import React from "react";
import "./Pagination.css";

export default function Pagination({
  reviewsPerPage,
  totalReviews,
  paginate,
  currentPage,
}) {
  const pageNumbers = [];

  for (let i = 1; i <= Math.ceil(totalReviews / reviewsPerPage); i++) {
    pageNumbers.push(i);
  }
  console.log("page numbers = >", pageNumbers);
  function handleClick(e, number) {
    e.preventDefault();
    paginate(number);
  }

  return (
    <nav>
      <div className="pagination">
        {currentPage === 1 ? (
          <button disabled>&laquo;</button>
        ) : (
          <button
            onClick={(e) => {
              const next = currentPage - 1;
              handleClick(e, next);
            }}
          >
            &laquo;
          </button>
        )}

        {pageNumbers.map((number) => (
          <button
            onClick={(e) => {
              handleClick(e, number);
            }}
          >
            {number}
          </button>
        ))}

        {currentPage >= pageNumbers.length ? (
          <button disabled>&raquo;</button>
        ) : (
          <button
            onClick={(e) => {
              const next = currentPage + 1;
              handleClick(e, next);
            }}
          >
            &raquo;
          </button>
        )}
      </div>
    </nav>
  );
}
