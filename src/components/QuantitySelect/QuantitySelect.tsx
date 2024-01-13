import React from "react";

import { useAppSelector, useAppDispatch } from "../../redux/hooks";
import { setPage, setDataLength, setLoading } from "../../redux/store/appSlice";

import "./QuantitySelect.scss";

const QuantitySelect = () => {
  const dispatch = useAppDispatch();
  const dataLength = useAppSelector((state) => state.data.dataLength);
  return (
    <div className="select">
      <button
        className="select__btn"
        onClick={() => {
          if (dataLength !== 50) {
            dispatch(setPage(1));
            dispatch(setDataLength(50));
            dispatch(setLoading(true));
          }
        }}
      >
        Short list
      </button>
      <button
        className="select__btn"
        onClick={() => {
          if (dataLength !== 1000) {
            dispatch(setDataLength(1000));
            dispatch(setLoading(true));
          }
        }}
      >
        Long list
      </button>
    </div>
  );
};

export default QuantitySelect;
