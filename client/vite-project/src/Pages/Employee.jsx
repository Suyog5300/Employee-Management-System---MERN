import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import "../style.css"
import Sidebar from '../Components/Sidebar'
import axios  from 'axios'

function Employee() {
    const [users, setUsers] = useState([])
    // const [image, setImage] = useState()

    useEffect(()=>{
      axios.get('http://localhost:3000/')
      .then(result => setUsers(result.data))
      .catch(err => console.log(err))
    }, [])

    const handleDelete = (id) =>{
      axios.delete("http://localhost:3000/deleteUser/"+id)
      .then(result => {
        window.location.reload()
      })
      .catch(err=> console.log(err))
    }

    // useEffect(() => {
    //   axios.get("http://localhost:3000/getImage")
    //   .then(result => console.log(result))
    //   .catch(err=> console.log(err))
    // }, [])
    
  return (
    <section className="employee-section">

<div className="container_new">
    <Sidebar />
  <table className="rwd-table">
    <tbody>
      <tr>
        <th>Sr no.</th>
        <th>Image</th>
        <th>Name</th>
        <th>Mail Id</th>
        <th>Designation</th>
        <th>Age</th>
        <th>Action</th>
      </tr>
    {users.map((user, index)=>{


      return <tr>
        <td data-th="Sr no.">
          {index+1}
        </td>
        
        <td data-th="Image" className="profile-pic">
          <img src="https://static.miraheze.org/greatcharacterswiki/thumb/3/3d/Eren_Paths.jpg/330px-Eren_Paths.jpg" alt="" />
          
        </td>
        <td data-th="Name" >
          {user.name}
        </td>
        <td data-th="Mail Id">
          {user.email}
        </td>
        <td data-th="Designation">
          {user.designation}
        </td>
        <td data-th="Age">
          {user.age}
        </td>
        <td data-th="Action">
          <Link to={`/updateUser/${user._id}`}><i className="fa-solid fa-pen update-btn"></i></Link>
          <button onClick={(e)=> handleDelete(user._id)}><i className="fa-solid fa-trash delete-button"></i></button>
        </td>
      </tr>
})}
      {/* <tr>
        <td data-th="Sr no.">
          {counter+1}
        </td>
        
        <td data-th="Image" className="profile-pic">
          <img src={user.user2.image} alt="" />
        </td>
        <td data-th="Name" >
          {user.user2.name}
        </td>
        <td data-th="Mail Id">
          {user.user2.email  + "@company.com"}
        </td>
        <td data-th="Age">
          {user.user2.age}
        </td>
        <td data-th="Action">
          <Link to="/updateUser"><i className="fa-solid fa-pen update-btn"></i></Link>
          <Link to=""><i className="fa-solid fa-trash delete-btn"></i></Link>
        </td>
      </tr> */}
      
    </tbody>
  </table>
  <Link to="/addUser" className="btn btn-danger">Add User</Link>
</div>

    </section>
  )
}

export default Employee
