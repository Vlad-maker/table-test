import React, { FunctionComponent } from "react";
import { useAppDispatch } from "../../redux/hooks";
import { setPersonData } from "../../redux/store/appSlice";

import "./TableRow.scss";

interface ITableRowProps {
  data: {
    id: string;
    firstName: string;
    lastName: string;
    email: string;
    phone: string;
  };
}

const TableRow = (props: ITableRowProps) => {
  const dispatch = useAppDispatch();

  return (
    <ul onClick={() => dispatch(setPersonData(props.data.id))}>
      <li>{props.data.id}</li>
      <li>{props.data.firstName}</li>
      <li>{props.data.lastName}</li>
      <li>{props.data.email}</li>
      <li>{props.data.phone}</li>
    </ul>
  );
};

export default TableRow;
