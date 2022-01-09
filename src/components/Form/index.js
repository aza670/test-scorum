import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { ToastContainer, toast } from "react-toastify";

const Form = () => {
  const navigate = useNavigate();
  const [user, setUser] = useState({
    name: "",
    password: "",
  });

  const handleChange = (e) => {
    setUser({ ...user, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (user.name === "admin" && user.password === "123456") {
      localStorage.setItem("isAuth", "true");
      navigate("/", { replace: true });
    } else {
      toast.error("Name or password is not correct!");
      setUser({ name: "", password: "" });
    }
  };

  return (
    <form onSubmit={ handleSubmit } className="w-25">
      <ToastContainer />
      <input
        value={ user.name }
        name="name"
        onChange={ handleChange }
        type="text"
        className="form-control mb-3"
        placeholder="Name"
      />
      <input
        value={ user.password }
        name="password"
        onChange={ handleChange }
        type="password"
        className="form-control mb-3"
        placeholder="Password"
      />
      <button type="submit" className="btn btn-success w-100">
        Sign in
      </button>
    </form>
  );
};

export default Form;
