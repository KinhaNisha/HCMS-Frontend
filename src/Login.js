import React from "react";
import { Form, Input, message, Select} from "antd";
import { Link, useNavigate } from "react-router-dom";
import axios from "axios";
import Header from "./Header";


const Login = () => {
  const navigate = useNavigate();

  const onFinishHandler = async (values) => {
    
    try {
      const res = await axios.post("http://localhost:8080/api/v1/users/login", values);
      if (res.data.success) {
        localStorage.setItem("token", res.data.token);
        message.success("Login Successfully");
        navigate("/");
      } else {
        message.error(res.data.message);
      }
    } catch (error) {
      console.log(error);
      message.error("Invalid credientiels, Please check credientials or register if new user!");
    }
  };
  return (
    <>
      <Header />
      <Form layout="vertical" onFinish={onFinishHandler}>
        <div className="form-container">
          <div className="input-container">
            <h3 className="form-heading">Login Form</h3>
            <div className="form-item">
                <Form.Item label="Role" name="role" rules={[{ required: true, message: 'Please select your role!' }]}>
                  <Select placeholder="Select your role">
                  <Select.Option value="patient">Patient</Select.Option>
                  <Select.Option value="doctor">Doctor</Select.Option>
                  </Select>
                </Form.Item>
              </div>
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
