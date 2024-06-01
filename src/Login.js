import React from "react";
import { Form, Input, message} from "antd";
import { Link, useNavigate } from "react-router-dom";
import axios from "axios";
import Header from "./Header";


const Login = () => {
  const navigate = useNavigate();
  const role = localStorage.getItem("role");
  console.log("MY ROLE: ", role)
  //form handler
  const onFinishHandler = async (values) => {
    // Append role to the form data
    values.role = role;
    console.log(values);
    alert('login successful')
    navigate('/')
    try {
      const res = await axios.post("/api/v1/user/login", values);
      if (res.data.success) {
        localStorage.setItem("token", res.data.token);
        message.success("Login Successfully");
        navigate("/");
      } else {
        message.error(res.data.message);
      }
    } catch (error) {
      console.log(error);
      message.error("something went wrong");
    }
  };
  return (
    <>
      <Header />
      <Form layout="vertical" onFinish={onFinishHandler}>
        <div className="form-container">
          <div className="input-container">
            <h3 className="form-heading">Login Form</h3>
            <Form.Item label="Email" name="email" rules={[{ required: true, message: 'Please input your email!' }]}>
              <Input type="email" />
            </Form.Item>
            <Form.Item label="Password" name="password" rules={[{ required: true, message: 'Please input your password!' }]}>
              <Input type="password" />
            </Form.Item>
            <Link to="/registration" className="m-2">
              Not a user? Register here
            </Link>
            <button className="btn btn-primary" type="submit">
              Login
            </button>
          </div>
        </div>
      </Form>
    </>
  );
};

export default Login;
