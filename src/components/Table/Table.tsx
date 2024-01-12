import React from "react";

import { useAppSelector, useAppDispatch } from "../../redux/hooks";
import { sortData } from "../../redux/store/appSlice";

import TableRow from "../TableRow/TableRow";

import arrowUp from "../../assets/icons/up.png";
import arrowDown from "../../assets/icons/down.png";

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

  const [filterIcon, setFilterIcon] = React.useState({
    id: false,
    firstName: false,
    lastName: false,
    email: false,
    phone: false,
  });

  return (
    <div>
      <div>
        <div>
          <ul style={{ display: "flex", gap: "20px", listStyleType: "none" }}>
            <li
              onClick={() => {
                dispatch(sortData("id"));
                setFilterIcon((prev) => ({
                  ...prev,
                  id: !filterIcon.id,
                }));
              }}
            >
              id
              <img
                src={filterIcon.id ? arrowUp : arrowDown}
                alt="arrow"
                style={{ maxWidth: "15px" }}
              />
            </li>
            <li
              onClick={() => {
                dispatch(sortData("firstName"));
                setFilterIcon((prev) => ({
                  ...prev,
                  firstName: !filterIcon.firstName,
                }));
              }}
            >
              firstName
              <img
                src={filterIcon.firstName ? arrowUp : arrowDown}
                alt="arrow"
                style={{ maxWidth: "15px" }}
              />
            </li>
            <li
              onClick={() => {
                dispatch(sortData("lastName"));
                setFilterIcon((prev) => ({
                  ...prev,
                  lastName: !filterIcon.lastName,
                }));
              }}
            >
              lastName{" "}
              <img
                src={filterIcon.lastName ? arrowUp : arrowDown}
                alt="arrow"
                style={{ maxWidth: "15px" }}
              />
            </li>
            <li
              onClick={() => {
                dispatch(sortData("email"));
                setFilterIcon((prev) => ({
                  ...prev,
                  email: !filterIcon.email,
                }));
              }}
            >
              email{" "}
              <img
                src={filterIcon.email ? arrowUp : arrowDown}
                alt="arrow"
                style={{ maxWidth: "15px" }}
              />
            </li>
            <li
              onClick={() => {
                dispatch(sortData("phone"));
                setFilterIcon((prev) => ({
                  ...prev,
                  phone: !filterIcon.phone,
                }));
              }}
            >
              phone
              <img
                src={filterIcon.phone ? arrowUp : arrowDown}
                alt="arrow"
                style={{ maxWidth: "15px" }}
              />
            </li>
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
