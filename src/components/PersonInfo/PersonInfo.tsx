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
  const personInfo: IPersonInfo[] = useAppSelector(
    (state) => state.data.personData
  );
  return (
    <div>
      {!personInfo ? null : (
        <div>
          <h3>Выбран пользователь:</h3>
          <div>
            <p>First name:</p>
            <p>{personInfo[0]?.firstName}</p>
          </div>
          <div>
            <p>Last name:</p>
            <p>{personInfo[0]?.lastName}</p>
          </div>
          <div>
            <p>Описание:</p>
            <p>{personInfo[0]?.description}</p>
          </div>
          <div>
            <p>Адрес проживания:</p>
            <p>{personInfo[0]?.address?.streetAddress}</p>
          </div>
          <div>
            <p>Город:</p>
            <p>{personInfo[0]?.address?.city}</p>
          </div>
          <div>
            <p>Провинция/штат:</p>
            <p>{personInfo[0]?.address?.state}</p>
          </div>
          <div>
            <p>Индекс:</p>
            <p>{personInfo[0]?.address?.zip}</p>
          </div>
        </div>
      )}
    </div>
  );
}

export default PersonInfo;
