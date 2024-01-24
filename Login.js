import { Form, Input,message} from "antd";
import React from "react";
import { Button } from "antd";
import { useDispatch } from "react-redux";
import { showLoading,hideLoading } from "../redux/features/alertSlice";
import { Link,useNavigate } from "react-router-dom";
import axios from 'axios';

const Login = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const onfinishHandler = async(values) => {
    try{
      dispatch(showLoading())
      const res = await axios.post('/api/v1/user/login',values);
      window.location.reload();
      dispatch(hideLoading())
      if(res.data.success){
        localStorage.setItem("token",res.data.token);
        message.success("Login Successfully");
        navigate("/");
      }
      else{
        message.error(res.data.message);
      }
    }catch(error){
      dispatch(hideLoading())
      console.log(error)
      message.error('Something went wrong')
    }
    
  };
  return (
    <div className="authentication">
      <h1 className="header1">Scheduling Is Just A Click Away</h1>
      <div className="authentication-form1 card p-3">
        <h1 className="card-title">Login Form</h1>
        <Form layout="vertical" onFinish={onfinishHandler}>
          <Form.Item label="Email" name="email">
            <Input placeholder="email" required />
          </Form.Item>
          <Form.Item label="Password" name="password">
            <Input placeholder="Password" type="password" />
          </Form.Item>
        <Button className="primary-button my-2" htmlType="submit">Login</Button>
       <br />
          <Link to="/register" className="anchor mt-2">
            Don't have an account.Click here!
          </Link>
        </Form>
      </div>
    </div>
  );
};
export default Login;
