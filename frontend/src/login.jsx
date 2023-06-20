import React from "react";
import { Link, useNavigate } from "react-router-dom";
import { useState } from "react";
import './loginValidation';
import Validation from './loginValidation';
import axios from 'axios';

export default function Login() {
    const [values, setValues] = useState({
        email: "",
        password: ""
    });

    const navigate = useNavigate();
    const [errors, setErrors] = useState({});

    const handleInput = (e) => {
        setValues(prev =>({...prev, [e.target.name]: e.target.value}));
    }

    const handleSubmit = (e) => {
        e.preventDefault();
        setErrors(Validation(values));
        if (errors.email === "" && errors.password === "") {
          axios
            .post("http://localhost:8081/login", values)
            .then((res) => {
              if(res.data === "Success"){
                navigate("/home");
              }
              else{
                alert("Invalid Credentials");
              }
            })
            .catch((err) => {
              console.log(err);
            });
          // alert("Form Submitted Successfully");
        }
    } 

  return (
    <div className="d-flex justify-content-center align-items-center bg-primary vh-100 vw-100">
      <div className="bg-white p-3 rounded w-50">
        <h1>Sign-in</h1>
        <form action="" onSubmit={handleSubmit}>
            <div className="mb-3">
                <label htmlFor="email"><strong>Email</strong></label>
                <input type="email" placeholder="Enter Email" onChange={handleInput} name="email" className="form-control rounded-0"/>
                {errors.email && <span className="text-danger">{errors.email}</span>}
            </div>
            <div className="mb-3">
                <label htmlFor="password"><strong>Password</strong></label>
                <input type="password" placeholder="Enter Password" onChange={handleInput} name="password" className="form-control rounded-0"/>
                {errors.password && <span className="text-danger">{errors.password}</span>}
            </div>
            <button type="submit" className="btn btn-success w-100 rounded-0"><strong>Login</strong></button>
            <p>You are agree to our terms and policies</p>
            <Link to="/signup" className="btn btn-default border w-100 rounded-0 text-decoration-none">Create Account</Link>
        </form>
      </div>
    </div>
  );
}