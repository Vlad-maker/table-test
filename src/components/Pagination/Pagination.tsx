import React from "react";

import { useAppSelector, useAppDispatch } from "../../redux/hooks";

import { setPage, setPersonId } from "../../redux/store/appSlice";

import "./Pagination.scss";

const Pagination = () => {
  const dispatch = useAppDispatch();
  const paginationButtons = useAppSelector((state) => state.data.buttons);

  return (
    <div className="pagination">
      {paginationButtons.length > 1 &&
        paginationButtons.map((_, index) => (
          <button
            className="pagination__btn"
            key={index}
            onClick={() => {
              dispatch(setPage(index + 1));
              dispatch(setPersonId(null));
            }}
          >
            {index + 1}
          </button>
        ))}
    </div>
  );
};

export default Pagination;
