import { React, useState } from 'react'
import { BrowserRouter, Routes, Route } from 'react-router-dom'

import Home from './Pages/Home'
import Employee from './Pages/Employee'
import AddUser from "./Components/AddUser"
import UpdateUser from "./Components/UpdateUser"
import Sidebar from './Components/Sidebar'
import Emp_Attendnce from './Pages/Emp_Attendnce'

function App() {

  return (
    <>
      <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />}></Route>
        <Route path="/employee" element={<Employee />}></Route>
        <Route path="/addUser" element={<AddUser/>}></Route>
        <Route path="/updateUser/:id" element={<UpdateUser/>}></Route>
        <Route path="/sidebar" element={<Sidebar />}></Route>
        <Route path="/empcard" element={<Emp_Attendnce />}></Route>
      </Routes>
      </BrowserRouter>
    </>
  )
}

export default App
