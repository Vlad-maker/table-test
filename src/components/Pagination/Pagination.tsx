import React from "react";

import { useAppSelector, useAppDispatch } from "../../redux/hooks";

import { setLongData, setPersonData } from "../../redux/store/appSlice";

import "./Pagination.scss";

interface IBtn {
  // item: any;
  index: any;
}

const Pagination = () => {
  const dispatch = useAppDispatch();
  const paginationButtons = useAppSelector((state) => state.data.buttons);
  const [page, setPage] = React.useState(0);

  return (
    <div>
      {paginationButtons.map(({ index }: IBtn) => (
        <button
          className="pagination__btn"
          key={index}
          onClick={() => {
            setPage(index);
            dispatch(setLongData({ page: index, limit: 50 }));
            dispatch(setPersonData(""));
          }}
        >
          {index + 1}
        </button>
      ))}
    </div>
  );
};

export default Pagination;
