import React from "react";
import { Form, Input, message } from "antd";
import axios from "axios";
import { Link, useNavigate } from "react-router-dom";
import Header from "./Header";
const Register = () => {
  const navigate = useNavigate();

  //form handler
  const onfinishHandler = async (values) => {
    try {
      const res = await axios.post("/api/v1/user/register", values);
      if (res.data.success) {
        message.success("Register Successfully!");
        navigate("/login");
      } else {
        message.error(res.data.message);
      }
    } catch (error) {
      console.log(error);
      message.error("Something Went Wrong");
    }
  };
  return (
    <>
    <Header />
      <Form
        layout="vertical"
        onFinish={onfinishHandler}
      >
        <div className="form-container">
          <div className="input-container">
            <h3 className="form-heading">Register From</h3>
            <div className="join-item">
              <div className="form-item">
                <Form.Item label="Name" name="name">
                  <Input type="text" required />
                </Form.Item>
              </div>
              <div className="form-item">
                <Form.Item label="Mobile Number" name="mobileNo">
                  <Input type="Number" required />
                </Form.Item>
              </div>
            </div>

            <div className="join-item">
              <div className="form-item">
                <Form.Item label="Email" name="email">
                  <Input type="email" required />
                </Form.Item>
              </div>
              <div className="form-item">
                <Form.Item label="Date of Birth" name="DOB">
                  <Input type="date" />
                </Form.Item>
              </div>
            </div>
            <div className="join-item">
              <div className="form-item">
                <Form.Item label="Address" name="address">
                <Input type="text" required />
              </Form.Item>
              </div>
              <div className="form-item">
                <Form.Item label="Password" name="password">
                  <Input type="password" required />
                </Form.Item>
              </div>
              
            </div>
            <Link to="/login" className="m-2">
              Already user login here
            </Link>
            <button className="btn btn-primary" type="submit">
              Register
            </button>
          </div>
        </div>
      </Form >
    </>
  );
};

export default Register;
