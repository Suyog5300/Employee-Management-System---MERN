import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import "../style.css";
import Sidebar from "../Components/Sidebar";
import axios from "axios";

function AddUser() {
  const [name, setName] = useState();
  const [email, setEmail] = useState();
  const [age, setAge] = useState();
  const [designation, setDesignation] = useState();
  const [file, setFile] = useState();

  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();
    // const formData = new FormData()
    // formData.append('file', file)
    axios
      .post("http://localhost:3000/createUser", {
        name,
        email,
        age,
        designation,
        file,
      })
      .then((result) => {
        console.log(result);
        navigate("/employee");
      })
      .catch((err) => console.log(err));

    // axios.post("http://localhost:3000/upload", formData)
    // .then(result => setFile(res.data[0].file))
    // .catch(err=> console.log(err))
  };

  return (
    <div className="container ">
      <Sidebar />
      <form onSubmit={handleSubmit}>
        <div className="bg-container ">
          <h2>Add User</h2>
          <div className="input-group mb-3 input-danger w-75">
            <span className="input-group-text" id="basic-addon1">
              Name
            </span>
            <input
              type="text"
              className="form-control "
              placeholder="Full Name"
              onChange={(e) => setName(e.target.value)}
            />
          </div>

          <div className="input-group mb-3 w-75">
            <input
              type="text"
              className="form-control"
              placeholder="Mail id"
              onChange={(e) => setEmail(e.target.value + "@company.com")}
            />
            <span className="input-group-text" id="basic-addon2">
              @company.com
            </span>
          </div>

          <div className="input-group mb-3 w-75">
            <input
              type="file"
              className="form-control"
              id="inputGroupFile02"
              onChange={(e) => setFile(e.target.files[0])}
            />
            <span className="input-group-text" htmlFor="inputGroupFile02">
              Profile Pic
            </span>
          </div>

          <div className="input-group mb-3 w-75">
            <span className="input-group-text">Age</span>
            <input
              type="number"
              className="form-control"
              placeholder="Age"
              onChange={(e) => setAge(e.target.value)}
            />
          </div>

          <div className="input-group mb-3 w-75">
            <span className="input-group-text">Designation</span>
            <select
              className="form-select"
              value={designation}
              onChange={(e) => setDesignation(e.target.value)}
            >
              <option selected>Choose...</option>
              <option value="Developer">Developer</option>
              <option value="HR Manager">HR Manager</option>
              <option value="Consultant">Consultant</option>
              <option value="Recruiter">Recruiter</option>
            </select>
          </div>

          <button className="btn btn-danger w-75">Add</button>
        </div>
      </form>
    </div>
  );
}

export default AddUser;
