import React from "react";
import { useAppSelector } from "../../redux/hooks";
import "./PersonInfo.scss";

interface IPersonInfo {
  firstName: string;
  lastName: string;
  description: string;
  address: { streetAddress: string; city: string; state: string; zip: string };
}

function PersonInfo() {
  const personId = useAppSelector((state) => state.data.personId);
  const longData = useAppSelector((state) => state.data.longData);
  const currentPerson = longData.find(({ id }) => id === personId);

  return (
    <div>
      {!currentPerson ? null : (
        <div>
          <h3>Выбран пользователь:</h3>
          <div>
            <p>First name:</p>
            <p>{currentPerson.firstName}</p>
          </div>
          <div>
            <p>Last name:</p>
            <p>{currentPerson.lastName}</p>
          </div>
          <div>
            <p>Описание:</p>
            <p>{currentPerson.description}</p>
          </div>
          <div>
            <p>Адрес проживания:</p>
            <p>{currentPerson.address?.streetAddress}</p>
          </div>
          <div>
            <p>Город:</p>
            <p>{currentPerson.address?.city}</p>
          </div>
          <div>
            <p>Провинция/штат:</p>
            <p>{currentPerson.address?.state}</p>
          </div>
          <div>
            <p>Индекс:</p>
            <p>{currentPerson.address?.zip}</p>
          </div>
        </div>
      )}
    </div>
  );
}

export default PersonInfo;
