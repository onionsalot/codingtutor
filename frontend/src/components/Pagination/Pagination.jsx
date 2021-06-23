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
  function handleClick(e, number) {
    e.preventDefault();
    paginate(number);
  }

  return (
      <div className="pagination">
        {currentPage === 1 ? (
          <button disabled className="pagination-button arrows">&laquo;</button>
        ) : (
          <button
            className="pagination-button arrows"
            onClick={(e) => {
              const next = currentPage - 1;
              handleClick(e, next);
            }}
          >
            &laquo;
          </button>
        )}
        &nbsp;&nbsp;&nbsp;
        {pageNumbers.map((number, idx) => (
          <button
            className="pagination-button"
            id={currentPage===idx+1 ? "chosen":""}
            onClick={(e) => {
              handleClick(e, number);
            }}
          >
            {number}
          </button>
        ))}
        &nbsp;&nbsp;&nbsp;
        {currentPage >= pageNumbers.length ? (
          <button disabled className="pagination-button arrows">&raquo;</button>
        ) : (
          <button
            className="pagination-button arrows"
            onClick={(e) => {
              const next = currentPage + 1;
              handleClick(e, next);
            }}
          >
            &raquo;
          </button>
        )}
      </div>
  );
}
