import React from "react";

import { useAppSelector, useAppDispatch } from "../../redux/hooks";
import { setDataLength, setLoading } from "../../redux/store/appSlice";

import "./QuantitySelect.scss";

const QuantitySelect = () => {
  const dispatch = useAppDispatch();
  const dataLength = useAppSelector((state) => state.data.dataLength);
  return (
    <div>
      <button
        onClick={() => {
          if (dataLength !== 50) {
            dispatch(setDataLength(50));
            dispatch(setLoading(true));
          }
        }}
      >
        Short list
      </button>
      <button
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
