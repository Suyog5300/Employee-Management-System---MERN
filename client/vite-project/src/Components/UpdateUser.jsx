import React, { useEffect, useState } from 'react'
import Sidebar from './Sidebar'
import "../style.css"
import { useParams, useNavigate } from "react-router-dom";
import axios from 'axios';


function UpdateUser() {

  const [name, setName] = useState()
  const [email, setEmail] = useState()
  const [age, setAge] = useState()
  const [designation, setDesignation] = useState()
  const [image, setImage] = useState()

  useEffect(()=>{
    axios.get("http://localhost:3000/getUser/"+id)
    .then(result => {
      setName(result.data.name)
      setEmail(result.data.email)
      setAge(result.data.age)
      setDesignation(result.data.designation)
      setImage(result.data.image)
    })
    .catch(err => console.log(err))
  }, [])
  
  const navigate = useNavigate();
  const {id} = useParams();

  const handleUpdate = (e) =>{
    e.preventDefault();
    axios.put("http://localhost:3000/updateUser/"+id, {name, email, age, designation, image})
    .then(result=> {
      console.log(result)
      navigate('/employee')
    })
    .catch(err => console.log(err))
  }
  return (
    <div className="container">
      <Sidebar/> 
      <form onSubmit={handleUpdate}>
      <div className="bg-container ">
      <h2>Update User</h2>
      <div className="input-group mb-3 input-danger w-75">
  <span className="input-group-text" id="basic-addon1">Name</span>
  <input type="text" className="form-control " placeholder="Full Name" value={name} onChange={(e) => setName(e.target.value)}/>
</div>

<div className="input-group mb-3 w-75">
  <input type="text" className="form-control" placeholder="Mail id" value={email} onChange={(e) => setEmail(e.target.value)}/>
  <span className="input-group-text" id="basic-addon2">@company.com</span>
</div>

<div class="input-group mb-3 w-75">
  <input type="file" class="form-control"  onChange={(e) => setImage(e.target.value)}/>
  <span class="input-group-text" for="inputGroupFile02">Profile Pic</span>
</div>

<div className="input-group mb-3 w-75">
  <span className="input-group-text" >Age</span>
  <input type="text" className="form-control" value={age} placeholder="Age" onChange={(e) => setAge(e.target.value)}/>
</div>

<div className="input-group mb-3 w-75">
<span className="input-group-text">Designation</span>
<select className="form-select" value={designation} onChange={(e) => setDesignation(e.target.value)}>
  <option selected>Choose...</option>
  <option value="Developer">Developer</option>
  <option value="HR Manager">HR Manager</option>
  <option value="Consultant">Consultant</option>
  <option value="Recruiter">Recruiter</option>
</select>
</div>

<button className="btn btn-danger w-75">Update</button>
    </div>
    </form>
    </div>
  )
}

export default UpdateUser