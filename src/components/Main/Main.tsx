import React from "react";
import { FunctionComponent } from "react";
import { useAppSelector, useAppDispatch } from "../../redux/hooks";

import {
  // setDataLength,
  setLoading,
  setShortData,
  setLongData,
  setPaginationBtn,
} from "../../redux/store/appSlice";

import QuantitySelect from "../QuantitySelect/QuantitySelect";
import Table from "../Table/Table";
import Pagination from "../Pagination/Pagination";
import PersonInfo from "../PersonInfo/PersonInfo";

import "./Main.scss";

const Main: FunctionComponent = () => {
  const dispatch = useAppDispatch();
  const loading = useAppSelector((state) => state.data.loading);
  const dataLength = useAppSelector((state) => state.data.dataLength);

  React.useEffect(() => {
    async function getData() {
      const response = await fetch(
        `http://www.filltext.com/?rows=${dataLength}&id=%7Bnumber%7C1000%7D&firstName=%7BfirstName%7D&lastName=%7BlastName%7D&email=%7Bemail%7D&phone=%7Bphone%7C(xxx)xxx-xx-xx%7D&address=%7BaddressObject%7D&description=%7Blorem%7C32%7D`
      );
      let result = await response.json();
      dispatch(setLoading(false));
      dispatch(setShortData(result));
      dispatch(setLongData({ page: 0, limit: 50 }));
      dispatch(setPaginationBtn(result.length));
    }
    getData();
  }, [dispatch, dataLength]);

  return (
    <section className="main">
      <QuantitySelect />
      <div>
        {loading ? null : <Pagination />}
        {loading ? <p>Loading data, please wait</p> : <Table />}
        <PersonInfo />
      </div>
    </section>
  );
};

export default Main;
