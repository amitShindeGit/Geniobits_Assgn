import React, { useState } from "react";
import Users from "../Services/user-service";
import classes from "../Styles/Form.module.css";

const Form = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [pass, setPass] = useState("");
  const [gender, setGender] = useState("");
  const [status, setStatus] = useState("");

  const handleSubmit = (event) => {
    event.preventDefault();
    // const user = {name, email, pass, gender, status}
    // console.log(user)
    Users.createUser({name, email, pass, gender, status})
      .then((res) => console.log(res))
      .catch((err) => console.log(err));
  };

  return (
    <div className={classes.formMainDIv}>
      <h1>Add Employee</h1>
      <div>
        <form className={classes.formDIv} onSubmit={handleSubmit}>
          <label>
            Enter name:
            <input
              type="text"
              value={name}
              onChange={(e) => setName(e.target.value)}
            />
          </label>
          <label>
            Enter email:
            <input
              type="text"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
          </label>
          <label>
            Enter gender:
            <input
              type="text"
              value={gender}
              onChange={(e) => setGender(e.target.value)}
            />
          </label>
          <label>
            Enter status:
            <input
              type="text"
              value={status}
              onChange={(e) => setStatus(e.target.value)}
            />
          </label>
          <label>
            Enter password:
            <input
              type="text"
              value={pass}
              onChange={(e) => setPass(e.target.value)}
            />
          </label>
          <button type="submit" className={classes.formBtn}>
            Save
          </button>
        </form>
      </div>
    </div>
  );
};

export default Form;
