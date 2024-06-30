import React from "react";
import { Form, Input, message, Select } from "antd";
import axios from "axios";
import { Link, useNavigate } from "react-router-dom";
import Header from "../pages/Header";

const Register = () => {
  const navigate = useNavigate();

  const onFinishHandler = async (values) => {
    try {
      const res = await axios.post("http://localhost:8080/api/v1/users/register", values);
      if (res.data.success) {
        message.success("Registered Successfully!");
        navigate("/login");
      } else {
        message.error(res.data.message);
      }
    } catch (error) {
      if (error.response && error.response.data.error) {
          message.error(error.response.data.error);
      } else {
          message.error("Something Went Wrong");
      }
  }
  };

  const validateConfirmPassword = ({ getFieldValue }) => ({
    validator(rule, value) {
      if (!value || getFieldValue('password') === value) {
        return Promise.resolve();
      }
      return Promise.reject('Passwords do not match!');
    }
  });

  return (
    <>
      <Header />
      <Form layout="vertical" onFinish={onFinishHandler}>
        <div className="form-container">
          <div className="input-container">
            <h3 className="form-heading">Register Form</h3>
            <div className="join-item">
              <div className="form-item">
                <Form.Item label="Name" name="name" rules={[{ required: true, message: 'Please input your name!' }]}>
                  <Input type="text" />
                </Form.Item>
              </div>
              <div className="form-item">
                <Form.Item label="Role" name="role" rules={[{ required: true, message: 'Please select your role!' }]}>
                  <Select placeholder="Select your role">
                    <Select.Option value="patient">Patient</Select.Option>
                    <Select.Option value="doctor">Doctor</Select.Option>
                  </Select>
                </Form.Item>
              </div>
            </div>
            <div className="join-item">
              <div className="form-item">
                <Form.Item label="Email" name="email" rules={[{ required: true, message: 'Please input your email!', type: 'email' }]}>
                  <Input type="email" />
                </Form.Item>
              </div>
              <div className="form-item">
                <Form.Item label="Mobile Number" name="mobileNo" rules={[{ required: true, message: 'Please input your mobile number!' }]}>
                  <Input type="number" />
                </Form.Item>
              </div>
            </div>
            <div className="join-item">
              <div className="form-item">
                <Form.Item label="Password" name="password" rules={[{ required: true, message: 'Please input your password!' }]}>
                  <Input type="password" />
                </Form.Item>
              </div>
              <div className="form-item">
                <Form.Item
                  label="Confirm Password"
                  name="confirmPassword"
                  dependencies={['password']}
                  hasFeedback
                  rules={[
                    { required: true, message: 'Please confirm your password!' },
                    validateConfirmPassword
                  ]}
                >
                  <Input type="password" />
                </Form.Item>
              </div>
            </div>
            <div className="join-item">
              <div className="form-item">
                <Form.Item label="Date of Birth" name="DOB">
                  <Input type="date" />
                </Form.Item>
              </div>
              <div className="form-item">
                <Form.Item label="Address" name="address" rules={[{ required: true, message: 'Please input your address!' }]}>
                  <Input type="text" />
                </Form.Item>
              </div>
            </div>
            <Link to="/login" className="m-2">
              Already a user? Login here.
            </Link>
            <button className="btn btn-primary" type="submit">
              Register
            </button>
          </div>
        </div>
      </Form>
    </>
  );
};

export default Register;
