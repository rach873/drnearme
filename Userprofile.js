import React ,{useState} from "react";
import Layout from "../../components/Layout";
//import axios from "axios";
//import { useParams } from "react-router-dom";
import { Col, Form, Input, Row, TimePicker, message } from "antd";
//import { useSelector, useDispatch } from "react-redux";
//import { useNavigate } from "react-router-dom";
//import { showLoading, hideLoading } from "../../redux/features/alertSlice";
import moment from 'moment';

const Profile = () => {
  /*const { user } = useSelector((state) => state.user);*/
  const [doctor, setDoctor] = useState(null);
  /*const params = useParams();
  const dispatch = useDispatch();
  const navigate = useNavigate();*/
  //update doc

  /*const handleFinish = async (values) => {
    try {
      dispatch(showLoading());
      //router.post("/apply-doctor", authMiddleware, applyDoctorController);
      const res = await axios.post(
        "/api/v1/doctor/updateProfile",
        { ...values, userId: user._id,
            timing:[
                moment(values.timings[0]).format('HH:mm'),
                
                moment(values.timings[1]).format('HH:mm'),
            ]},
        {
          headers: {
            Authorization: `Bearer ${localStorage.getItem("token")}`,
          },
        }
      );
      dispatch(hideLoading());
      if (res.data.success) {
        message.success(res.data.message);
        navigate("/");
      } else {
        message.error(res.data.success);
      }
    } catch (error) {
      dispatch(hideLoading());
      console.log(error);
      message.error("Something went wrong");
    }
  };

  //update doc
  const getDoctorInfo = async () => {
    try {
      const res = await axios.post(
        "/api/v1/doctor/getDoctorInfo",
        { userId: params.id },
        {
          headers: {
            Authorization: `Bearer ${localStorage.getItem("token")}`,
          },
        }
      );
      if (res.data.success) {
        setDoctor(res.data.data);
      }
    } catch(error) {
      console.log(error);
    }
  };

  useEffect(() => {
    getDoctorInfo();
  }, []);*/
  /*return (
    <Layout>
      <h1>Profile</h1>
      {doctor && (
        <Form
          layout="vertical"
        
          className="m-3"
          initialValues={{
            ...doctor,
            timings:[
                moment(doctor.timings[0] ,'HH:mm'),
                moment(doctor.timings[1],'HH:mm'),
            ],
          }}
        >
          <h4 className="">Personal Details : </h4>

          <Row gutter={20}>
            <Col xs={24} md={24} lg={8}>
              <Form.Item
                label="First Name"
                name="firstName"
                required
                rules={[{ required: true }]}
              >
                <Input type="text" placeholder="your name" />
              </Form.Item>
            </Col>
            <Col xs={24} md={24} lg={8}>
              <Form.Item
                label="Last Name"
                name="lastName"
                required
                rules={[{ required: true }]}
              >
                <Input type="text" placeholder="your name" />
              </Form.Item>
            </Col>
            <Col xs={24} md={24} lg={8}>
              <Form.Item
                label="Phone No"
                name="phoneno"
                required
                rules={[{ required: true }]}
              >
                <Input type="number" placeholder="your number" />
              </Form.Item>
            </Col>
            <Col xs={24} md={24} lg={8}>
              <Form.Item
                label="email"
                name="email"
                required
                rules={[{ required: true }]}
              >
                <Input type="email" placeholder="your email" />
              </Form.Item>
            </Col>
            <Col xs={24} md={24} lg={8}>
              <Form.Item
                label="Website"
                name="website"
                required
                rules={[{ required: true }]}
              >
                <Input type="text" placeholder="your website" />
              </Form.Item>
            </Col>
            <Col xs={24} md={24} lg={8}>
              <Form.Item
                label="Address"
                name="address"
                required
                rules={[{ required: true }]}
              >
                <Input type="text" placeholder="your address" />
              </Form.Item>
            </Col>
            <Col xs={24} md={24} lg={8}>
              <Form.Item
                label="Location"
                name="location"
                required
                rules={[{ required: true }]}
              >
                <Input type="text" placeholder="your location" />
              </Form.Item>
            </Col>
            {/* remove this */}
          /*</Row>

          <h4 className="">Professional Details : </h4>

          <Row gutter={20}>
            <Col xs={24} md={24} lg={8}>
              <Form.Item
                label="Specialization"
                name="specialization"
                required
                rules={[{ required: true }]}
              >
                <Input type="text" placeholder="your specialization" />
              </Form.Item>
            </Col>
            <Col xs={24} md={24} lg={8}>
              <Form.Item
                label="Experience"
                name="experience"
                required
                rules={[{ required: true }]}
              >
                <Input type="text" placeholder="your Experience" />
              </Form.Item>
            </Col>
            <Col xs={24} md={24} lg={8}>
              <Form.Item
                label="Fee per Consultation"
                name="feesPerConsultation"
                required
                rules={[{ required: true }]}
              >
                <Input type="number" placeholder="consultation fee" />
              </Form.Item>
            </Col>
            <Col xs={24} md={24} lg={8}>  
              <Form.Item label="Timings" name="timings" required>
                <TimePicker.RangePicker format="HH:mm" />
              </Form.Item>
       </Col>  
            <Col xs={24} md={24} lg={8}></Col>
            <Col xs={24} md={24} lg={8}>
              <button className="btn btn-primary form-btn" type="submit">
                Update
              </button>
            </Col>
          </Row>
        </Form>
      )}
    </Layout>
  );
};

export default Profile;*/
