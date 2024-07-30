import axios from "axios";
import React, { useState } from "react";
import { Link, useNavigate, useParams } from "react-router-dom";

export default function AddUser() {
  const { id } = useParams();

  let navigate = useNavigate();

  const [user, setUser] = useState({
    name: "",
    userName: "",
    email: "",
  });

  const { name, userName, email } = user;

  const onInputChange = (event) => {
    setUser({ ...user, [event.target.name]: event.target.value });
  };

  const onSubmitHandler = async (e) => {
    e.preventDefault();
    await axios.post(`http://localhost:8080/user`, user);
    navigate("/");
  };

  return (
    <div className="container">
      <div className="row">
        <div className="col-md-6 offset-md-3 border rounded p-4 mt-2 shadow">
          <h2 className="text-center m-4">Register User</h2>

          <form onSubmit={(e) => onSubmitHandler(e)}>
            <div className="mb-3">
              <label htmlFor="Name" className="form-label">
                Name
              </label>
              <input
                type={"text"}
                className="form-control"
                placeholder="Enter Name"
                name="name"
                value={name}
                onChange={(event) => onInputChange(event)}
              ></input>
            </div>

            <div className="mb-3">
              <label htmlFor="userName" className="form-label">
                Username
              </label>
              <input
                type={"text"}
                className="form-control"
                placeholder="Enter Username"
                name="userName"
                value={userName}
                onChange={(event) => onInputChange(event)}
              ></input>
            </div>

            <div className="mb-3">
              <label htmlFor="Email" className="form-label">
                Email
              </label>
              <input
                type={"text"}
                className="form-control"
                placeholder="Enter Email"
                name="email"
                value={email}
                onChange={(event) => onInputChange(event)}
              ></input>
            </div>
            <button type="submit" className="btn btn-primary">
              Submit
            </button>

            <Link className="btn btn-danger" to="/users">
              Cancel
            </Link>
          </form>
        </div>
      </div>
    </div>
  );
}
