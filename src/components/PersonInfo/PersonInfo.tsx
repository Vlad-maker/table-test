import React from "react";
import { useAppSelector } from "../../redux/hooks";
import "./PersonInfo.scss";

function PersonInfo() {
  const personId = useAppSelector((state) => state.data.personId);
  const longData = useAppSelector((state) => state.data.longData);
  const currentPerson = longData.find(({ id }) => id === personId);

  return (
    <>
      {!currentPerson ? null : (
        <div className="person__info">
          <h3 className="person__info_heading">Person:</h3>
          <div className="person__info_block">
            <p className="person__info_title">ID:</p>
            <p className="person__info_data">{currentPerson.id}</p>
          </div>
          <div className="person__info_block">
            <p className="person__info_title">First name:</p>
            <p className="person__info_data">{currentPerson.firstName}</p>
          </div>
          <div className="person__info_block">
            <p className="person__info_title">Last name:</p>
            <p className="person__info_data">{currentPerson.lastName}</p>
          </div>
          <div className="person__info_block">
            <p className="person__info_title">Email:</p>
            <p className="person__info_data">{currentPerson.email}</p>
          </div>
          <div className="person__info_block">
            <p className="person__info_title">Phone:</p>
            <p className="person__info_data">{currentPerson.phone}</p>
          </div>
          {currentPerson.address?.streetAddress ? (
            <div className="person__info_block">
              <p className="person__info_title">StreetAddress:</p>
              <p className="person__info_data">
                {currentPerson.address?.streetAddress}
              </p>
            </div>
          ) : null}
          {currentPerson.address?.city ? (
            <div className="person__info_block">
              <p className="person__info_title">City:</p>
              <p className="person__info_data">{currentPerson.address?.city}</p>
            </div>
          ) : null}
          {currentPerson.address?.state ? (
            <div className="person__info_block">
              <p className="person__info_title">State:</p>
              <p className="person__info_data">
                {currentPerson.address?.state}
              </p>
            </div>
          ) : null}
          {currentPerson.address?.zip ? (
            <div className="person__info_block">
              <p className="person__info_title">Zip:</p>
              <p className="person__info_data">{currentPerson.address?.zip}</p>
            </div>
          ) : null}
          {currentPerson.description ? (
            <div className="person__info_block">
              <p className="person__info_title">Description:</p>
              <p className="person__info_data">{currentPerson.description}</p>
            </div>
          ) : null}
        </div>
      )}
    </>
  );
}

export default PersonInfo;
