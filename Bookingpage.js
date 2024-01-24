import React, { useEffect, useState } from "react";
import Layout from "../components/Layout";
import { useParams } from "react-router-dom";
import axios from "axios";
import { DatePicker, TimePicker, message } from "antd";
import { useDispatch ,useSelector} from "react-redux";
import moment from "moment";
import { showLoading,hideLoading } from "../redux/features/alertSlice";
const Bookingpage = () => {
    const {user} = useSelector(state => state.user)
  const params = useParams();
  const [doctors, setDoctors] = useState();
  const [date, setDate] = useState();
  const [time, setTime] = useState();
  const dispatch = useDispatch();
  const [isAvailable, setIsAvailable] = useState(false);
  const getUserData = async () => {
    try {
      const res = await axios.post(
        "/api/v1/doctor/getDoctorById", //getDoctorById
        { doctorId: params.doctorId },
        {
          headers: {
            Authorization: "Bearer " + localStorage.getItem("token"),
          },
        }
      );
      if (res.data.success) {
        setDoctors(res.data.data);
      }
    } catch (error) {
      console.log(error);
    }
  };

  const handleBooking = async() => {
    try {
        dispatch(showLoading())
        const res  = await axios.post('/api/v1/user/book-appointment',
        {
            doctorId:params.doctorId,
            userId:user._id,
            doctorInfo:doctors,
            date:date,
            userInfo:user,
            time:time,
        },
       {
        headers:{
            Authorization:`Bearer ${localStorage.getItem("token")}`
        }
       } 
        )
        dispatch(hideLoading())
        if(res.data.success){
            message.success(res.data.message)
        }
    }catch(error) {
        dispatch(hideLoading())
        console.log(error)
    }
  }

  {/* const handleAvailability = async() => {
    try{
        dispatch(showLoading())
        const res  = await axios.post('api/v1/user/booking-availability',
        {doctorId:params.doctorId,date,time},
            {
                headers:{
                    Authorization:`Bearer ${localStorage.getItem('token')}`
                }
            }
        )
        dispatch(hideLoading())
        if(res.data.success){
            setIsAvailable(true)
            message.success(res.data.message)
        }else{
            message.error(res.data.message)
        }
    }catch(error){
        dispatch(hideLoading())
        console.log(error)
    }*/}
  

  useEffect(() => {
    getUserData();
  }, []);

  return (
    <Layout>
     
      <h3 className="booking">Booking Page</h3>
      <div className="container m-2">
        {doctors && (
          <div className="bookingpage">
            <h4>
              Dr.{doctors.firstName} {doctors.lastName}
            </h4>
            <h4>Fees: {doctors.feesPerConsultation}</h4>
            <h4>
              Timing: {doctors.timings && doctors.timings[0]} - {" "}
              {doctors.timings && doctors.timings[1]}{""}
            </h4>
            <div className="d-flex flex-column w-50" >
              <DatePicker
              className="m-2"
                format="DD-MM-YYYY"
                onChange={(value) =>{
                  setIsAvailable(false)
                    setDate(moment(value).format("DD-MM-YYYY"))
                 
                }
                  
                }
              />
           
              <TimePicker
                format="HH:mm"
                className="m-2"
                onChange={(value) =>{
                    setIsAvailable(false)
                    setTime(moment(value).format("HH:mm"));
                }
            
                }
              />
              {/* <button className="btn btn-primary mt-2" onClick={handleAvailability}> 
                Check Availability
              </button> */}
               <button className="btn btn-dark mt-2" onClick={handleBooking}>
                 Book Now
               </button>
            
              
            
            </div>
          </div>
        )}
      </div>
    
    </Layout>
  );
};

export default Bookingpage;
