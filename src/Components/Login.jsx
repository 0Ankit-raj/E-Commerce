import React from "react";
import "./css/Style.css";
import { useState } from "react";
import { useNavigate } from 'react-router-dom';


function Login() {
  const navigate = useNavigate();
  const [user, setuser] = useState({
    name: "",
    password: "",
  });
  let name, value;
  const handleinput = (e) => {
    name = e.target.name;
    value = e.target.value;
    setuser({ ...user, [name]: value });
  };
  const registerbtn = async (e) => {
    e.preventDefault();
    const { name, password } = user;
    console.log(name,password);
    const res = await fetch("/register", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        name,
        password,
      }),
    });
    // const data = await res.json();
    if(res.status === 422 )
    {
      window.alert("Invalid registration");
    }
    else
    {
      window.alert("Registration succesfull");
    }
  };

  const loginbtn = async (e) => {
    e.preventDefault();
    const { name, password } = user;
    // console.log(name,password);
    const res = await fetch("/login", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        name,
        password,
      }),
    });

    const data =  res.json();
    if(res.status === 400 || !data ){
      window.alert("Invalid credentials");
    }
    else
    {
      window.alert("Login  succesfull");
      navigate('/home');
    }
  };

  return (
    <>
      <div className="cont2">
        <div className="container">
          <form method="POST">
            <h1>User Login</h1>
            <p>
              <input
                type="text"
                id="user"
                name="name"
                placeholder="E-mail"
                value={user.name}
                onChange={handleinput}
              />
              <i className="fas fa-user"></i>
            </p>
            <p>
              <input
                type="password"
                id="password"
                name="password"
                placeholder="Password"
                value={user.password}
                onChange={handleinput}
              />
              <i className="fas fa-lock"></i>
            </p>
            <p id="drop"></p>
            <p>
              <button onClick={loginbtn} id="p3" value="login">
                Login
              </button>
            </p>
            <p id="forget">
              Forgot Password? <a href="/">Click Here</a>
            </p>
            <p className="Create" value="register">
            <button onClick={registerbtn}  value="login">
                Register
              </button>
            </p>
          </form>
        </div>
      </div>
    </>
  );
}

export default Login;
