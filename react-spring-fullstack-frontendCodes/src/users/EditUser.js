import axios from "axios";
import React, { useState } from "react";
import { Link, useNavigate, useParams } from "react-router-dom";
import { useEffect } from "react";

export default function EditUser() {
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

  useEffect(() => {
    loadUser();
  }, []);

  const onSubmitHandler = async (e) => {
    e.preventDefault();
    await axios.put(`http://localhost:8080/user/${id}`, user);
    navigate("/");
  };

  const loadUser = async () => {
    const result = await axios.get(`http://localhost:8080/user/${id}`);
    setUser(result.data);
  };
  return (
    <div className="container">
      <div className="row">
        <div className="col-md-6 offset-md-3 border rounded p-4 mt-2 shadow">
          <form onSubmit={(e) => onSubmitHandler(e)}>
            <h2 className="text-center m-4">Edit User</h2>
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

            <Link className="btn btn-danger" to="/">
              Cancel
            </Link>
          </form>
        </div>
      </div>
    </div>
  );
}
