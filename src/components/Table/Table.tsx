import React from "react";

import { useAppSelector, useAppDispatch } from "../../redux/hooks";

import TableRow from "../TableRow/TableRow";

import "./Table.scss";
interface ITableProps {
  id: string;
  firstName: string;
  lastName: string;
  email: string;
  phone: string;
}

const Table = () => {
  const dispatch = useAppDispatch();
  const loadedData = useAppSelector((state) => state.data.longData);

  return (
    <div>
      <div>
        <div>
          <ul>
            <li>id</li>
            <li>firstName</li>
            <li>lastName </li>
            <li>email </li>
            <li>phone</li>
          </ul>
        </div>

        <div>
          {loadedData.map((person: ITableProps) => (
            <TableRow key={person.email} data={person} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default Table;
