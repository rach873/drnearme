import { Form, Input,message } from "antd";
import React from "react";
import { useDispatch } from "react-redux";
import { showLoading,hideLoading } from "../redux/features/alertSlice"
import { Link ,useNavigate} from "react-router-dom";
import axios from 'axios';


const Register = () => {

  const navigate  = useNavigate();
  const dispatch = useDispatch();
  const onfinishHandler = async(values) => {
    try{
      dispatch(showLoading())
      const res = await axios.post('api/v1/user/register',values);
      dispatch(hideLoading())
      if(res.data.success)
      {
        message.success('Registered Successfully!')
        navigate('/login')
      }else
      {
        message.error(res.data.message);
      }
    }catch(error){
      dispatch(hideLoading())
      console.log(error);
      message.error('Something went wrong');
    }
  };
return (
    <div className="authentication" >
      <h1 className="heading">No more waiting in lines – book appointments online.</h1>
   
{/* style={{backgroundImage:url(doctorappointment.png)}}> */}
      <div className="authentication-form card p-3">
        <h1 className="card-title">Register Form</h1>
        <Form layout="vertical" onFinish={onfinishHandler}>
          <Form.Item label="Name" name="name">
            <Input type="text" required />
          </Form.Item>
          <Form.Item label="Email" name="email">
            <Input type="email" required />
          </Form.Item>
          <Form.Item label="Password" name="password">
            <Input type="Password" required />
          </Form.Item>
          <button className="primary-button my-2" type="submit"> Register</button>
          <Link to="/login" className="anchor mt-2">
            Click here to login
          </Link>
        </Form>
      </div>
    </div>
  );
}
export default Register;


