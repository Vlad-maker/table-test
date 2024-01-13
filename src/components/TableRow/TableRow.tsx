import React from "react";
import { useAppDispatch } from "../../redux/hooks";
import { setPersonId } from "../../redux/store/appSlice";

import "./TableRow.scss";

interface ITableRowProps {
  data: {
    id: number;
    firstName: string;
    lastName: string;
    email: string;
    phone: string;
  };
}

const TableRow = (props: ITableRowProps) => {
  const dispatch = useAppDispatch();

  return (
    <ul
      onClick={() => dispatch(setPersonId(props.data.id))}
      className="table__row"
    >
      <li className="table__row_item">{props.data.id}</li>
      <li className="table__row_item">{props.data.firstName}</li>
      <li className="table__row_item">{props.data.lastName}</li>
      <li className="table__row_item">{props.data.email}</li>
      <li className="table__row_item">{props.data.phone}</li>
    </ul>
  );
};

export default TableRow;
