import React from "react";
import { FunctionComponent } from "react";

// Redux
import { useAppSelector, useAppDispatch } from "../../redux/hooks";
import {
  setLoading,
  setShortData,
  setLongData,
  setPaginationBtn,
} from "../../redux/store/appSlice";

// Components
import QuantitySelect from "../QuantitySelect/QuantitySelect";
import Form from "../Form/Form";
import Pagination from "../Pagination/Pagination";
import Table from "../Table/Table";
import PersonInfo from "../PersonInfo/PersonInfo";

// Styles
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
      dispatch(setLongData(result));
      dispatch(setPaginationBtn(result.length));
    }
    getData();
  }, [dispatch, dataLength]);

  return (
    <section className="main">
      <QuantitySelect />
      <Form />
      {loading ? null : <Pagination />}
      {loading ? <p>Loading data, please wait</p> : <Table />}
      <PersonInfo />
    </section>
  );
};

export default Main;
