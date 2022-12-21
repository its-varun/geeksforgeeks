import React from 'react'
import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import './Add.css'
import Navbar from './Navbar';

function Add() {


  const [credentials1, setCredentials1] = useState({id:"", Name: "", doj:"", dol:""});
  let navigate1 = useNavigate();


  const handleSignup = async (e)=>{
    e.preventDefault();
    
    const {id,Name,doj,dol} = credentials1;
    const response = await fetch("http://localhost:5000/addEmployee", {
        method: "POST",
        headers: {
            'Content-type': 'application/json'
        },

        body: JSON.stringify({id,Name,doj,dol})

    });
    // console.log(email, password);
    // console.log(email, firstName,secondName);
    const json = await response.json();
    console.log("hello");
    if(json.status === 200){
        alert("Employee added!")
        navigate1('/');
        
    }
    else{
        alert("Please enter all the details correctly");
    }
    // console.log(json);  
}

  const onChange1 = (e)=>{
    setCredentials1({...credentials1, [e.target.name]: e.target.value}); // This took 2 hours. Don't put [] over e.target.value.
  }

  return (
    <>
    <Navbar/>
      <div className='form'>
            <h1>Add Employee</h1>
            <form onSubmit={handleSignup} className="mainForm">
                <div class="form-row">
                    <div class="form-group col-md-6">
                    <label for="inputName4">Employee Id *</label>
                    <input type="number" name="id" class="form-control"  placeholder="Employee Id" onChange={onChange1}/>
                    </div>
                    <div class="form-group col-md-6">
                    <label for="inputPassword4">Name *</label>
                    <input type="text" name="Name" class="form-control"  placeholder="Name" onChange={onChange1}/>
                    </div>
                </div>
                <div class="form-row">
                    <div class="form-group col-md-6">
                    <label for="inputName4">Date of Joining *</label>
                    <input type="date" name="doj" class="form-control"  placeholder="Employee Id" onChange={onChange1}/>
                    </div>
                    <div class="form-group col-md-6">
                    <label for="inputPassword4">Date of Leaving</label>
                    <input type="date" name="dol" class="form-control"  placeholder="Name" onChange={onChange1} disabled/>
                    </div>
                </div>
                <button type="submit" class="btn btn-primary" >Add</button>
            </form>
        </div>
    </>
  )
}

export default Add