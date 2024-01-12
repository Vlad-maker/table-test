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
      style={{ display: "flex", gap: "20px", listStyleType: "none" }}
    >
      <li>{props.data.id}</li>
      <li>{props.data.firstName}</li>
      <li>{props.data.lastName}</li>
      <li>{props.data.email}</li>
      <li>{props.data.phone}</li>
    </ul>
  );
};

export default TableRow;
