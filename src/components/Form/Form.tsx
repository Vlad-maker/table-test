import React from "react";

import { useAppDispatch } from "../../redux/hooks";

import { setNewPerson } from "../../redux/store/appSlice";

import "./Form.scss";

const Form = () => {
  const dispatch = useAppDispatch();
  const [openForm, setOpenForm] = React.useState(false);
  const [sendBtn, setSendBtn] = React.useState(false);
  const [inputValue, setInputValue] = React.useState({
    id: "",
    firstName: "",
    lastName: "",
    email: "",
    phone: "",
  });

  React.useEffect(() => {
    Object.values(inputValue).some((item) => item === "")
      ? setSendBtn(true)
      : setSendBtn(false);
  }, [inputValue]);

  return (
    <div className="form__section">
      <button
        className="form__btn_toggle"
        onClick={() => setOpenForm(!openForm)}
      >
        {openForm ? "Close form" : "Add new person"}
      </button>
      {openForm ? (
        <form
          className="form"
          onSubmit={(event) => {
            event.preventDefault();
            dispatch(setNewPerson(inputValue));
          }}
        >
          <label className="input__label">
            <p>ID:</p>
            <input
              className="input"
              type="number"
              onChange={(event) =>
                setInputValue((id) => ({ ...id, id: event.target.value }))
              }
            />
          </label>

          <label className="input__label">
            <p>FirstName:</p>
            <input
              className="input"
              type="text"
              value={inputValue.firstName}
              onChange={(event) =>
                setInputValue((firstName) => ({
                  ...firstName,
                  firstName: event.target.value.replace(
                    /[^a-zA-ZА-Яа-яЁё]/gi,
                    ""
                  ),
                }))
              }
            />
          </label>

          <label className="input__label">
            <p>LastName:</p>
            <input
              className="input"
              type="text"
              value={inputValue.lastName}
              onChange={(event) =>
                setInputValue((lastName) => ({
                  ...lastName,
                  lastName: event.target.value.replace(
                    /[^a-zA-ZА-Яа-яЁё]/gi,
                    ""
                  ),
                }))
              }
            />
          </label>

          <label className="input__label">
            <p>Email:</p>
            <input
              className="input"
              type="email"
              onChange={(event) =>
                setInputValue((email) => ({
                  ...email,
                  email: event.target.value,
                }))
              }
            />
          </label>

          <label className="input__label">
            <p>Phone:</p>
            <input
              className="input"
              type="phone"
              placeholder="(000)000-0000"
              value={inputValue.phone}
              minLength={10}
              maxLength={10}
              onChange={(event) =>
                setInputValue((phone) => ({
                  ...phone,
                  phone: event.target.value,
                }))
              }
            />
          </label>

          <button className="form__btn_submit" disabled={sendBtn} type="submit">
            Add to list
          </button>
        </form>
      ) : null}
    </div>
  );
};

export default Form;
