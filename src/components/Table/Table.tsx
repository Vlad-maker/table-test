import React from "react";

import { useAppSelector, useAppDispatch } from "../../redux/hooks";
import { sortData } from "../../redux/store/appSlice";

import TableRow from "../TableRow/TableRow";

import arrowUp from "../../assets/icons/up.png";
import arrowDown from "../../assets/icons/down.png";

import "./Table.scss";

interface ITableProps {
  id: number;
  firstName: string;
  lastName: string;
  email: string;
  phone: string;
}

const Table = () => {
  const dispatch = useAppDispatch();
  const loadedData = useAppSelector((state) => state.data.longData);
  const page = useAppSelector((state) => state.data.page);

  const [filterIcon, setFilterIcon] = React.useState({
    id: false,
    firstName: false,
    lastName: false,
    email: false,
    phone: false,
  });

  return (
    <div className="table__title">
      <div>
        <ul className="table__title_list">
          <li
            className="table__title_item"
            onClick={() => {
              dispatch(sortData("id"));
              setFilterIcon((prev) => ({
                ...prev,
                id: !filterIcon.id,
              }));
            }}
          >
            ID
            <img
              src={filterIcon.id ? arrowUp : arrowDown}
              alt="arrow"
              style={{ maxWidth: "15px", marginLeft: "5px" }}
            />
          </li>
          <li
            className="table__title_item"
            onClick={() => {
              dispatch(sortData("firstName"));
              setFilterIcon((prev) => ({
                ...prev,
                firstName: !filterIcon.firstName,
              }));
            }}
          >
            FirstName
            <img
              src={filterIcon.firstName ? arrowUp : arrowDown}
              alt="arrow"
              style={{ maxWidth: "15px", marginLeft: "5px" }}
            />
          </li>
          <li
            className="table__title_item"
            onClick={() => {
              dispatch(sortData("lastName"));
              setFilterIcon((prev) => ({
                ...prev,
                lastName: !filterIcon.lastName,
              }));
            }}
          >
            LastName{" "}
            <img
              src={filterIcon.lastName ? arrowUp : arrowDown}
              alt="arrow"
              style={{ maxWidth: "15px", marginLeft: "5px" }}
            />
          </li>
          <li
            className="table__title_item"
            onClick={() => {
              dispatch(sortData("email"));
              setFilterIcon((prev) => ({
                ...prev,
                email: !filterIcon.email,
              }));
            }}
          >
            Email{" "}
            <img
              src={filterIcon.email ? arrowUp : arrowDown}
              alt="arrow"
              style={{ maxWidth: "15px", marginLeft: "5px" }}
            />
          </li>
          <li
            className="table__title_item"
            onClick={() => {
              dispatch(sortData("phone"));
              setFilterIcon((prev) => ({
                ...prev,
                phone: !filterIcon.phone,
              }));
            }}
          >
            Phone
            <img
              src={filterIcon.phone ? arrowUp : arrowDown}
              alt="arrow"
              style={{ maxWidth: "15px", marginLeft: "5px" }}
            />
          </li>
        </ul>
      </div>

      <div>
        {loadedData
          .slice((page - 1) * 50, page * 50)
          .map((person: ITableProps) => (
            <TableRow key={person.email} data={person} />
          ))}
      </div>
    </div>
  );
};

export default Table;
