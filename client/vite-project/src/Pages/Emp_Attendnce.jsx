import React, { useState, useEffect } from 'react'
import "../style.css"
import Sidebar from '../Components/Sidebar'
import axios  from 'axios'
import { Link } from 'react-router-dom'
import VanillaTilt from 'vanilla-tilt';

function Emp_Attendnce() {
    const [users, setUsers] = useState([])

    useEffect(()=>{
      axios.get('http://localhost:3000/')
      .then(result => setUsers(result.data))
      .catch(err => console.log(err))
    }, [])

    VanillaTilt.init(document.querySelectorAll(".emp_container"), {
      max: 5,
      speed: 100
    });
    
    //It also supports NodeList
    // VanillaTilt.init(document.querySelectorAll(".emp_container"));

  return (
    <div >
    <Sidebar/>
        <h2>Employee Attendance</h2>
        <div className="emp_section">
    {
        users.map((user)=>{

            return <div className=" emp_container container">
            <div className='card-img'>
            <img src="https://static.miraheze.org/greatcharacterswiki/thumb/3/3d/Eren_Paths.jpg/330px-Eren_Paths.jpg"  alt="" />
            {/* <img src={user.image}  alt="" /> */}
            </div>
            <div className="card-text">
                <h1>{user.name}</h1>
                <p>{user.email}</p>
                <h4>{user.designation}</h4>
                <h4>{user.age}</h4>
                {/* <h1>28%</h1>
                <p>Attendance</p> */}
                <Link to={`/updateUser/${user._id}`}><i className="fa-solid fa-pen update-btn" id='edit-btn'></i></Link>
            </div>
        </div>
        })
    }


    </div>
    </div>
  )
}

export default Emp_Attendnce