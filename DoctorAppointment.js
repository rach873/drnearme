import React,{useState,useEffect} from 'react'
import axios from 'axios'
import moment from 'moment'
import { Table, message } from 'antd'
import Layout from '../../components/Layout'

const DoctorAppointment = () => {

    const [appointments,setAppointments] = useState([])
    const getAppointments = async()=>{
        try {
            const res = await axios.get('/api/v1/doctor/doctor-appointments',{
                headers:{
                    Authorization:`Bearer ${localStorage.getItem("token")}`,
                },

            });
            if(res.data.success){
                setAppointments(res.data.data);
            }
        } catch (error) {
           console.log(error)            
        }
    };

    useEffect(() => {
        getAppointments();
    },[]);

    const handleStatus = async(record,status) =>{
        try{
           const res = await axios.post('/api/v1/doctor/update-status',{appointmentsId:record._id,status},
           {
            headers:{
                Authorization:`Bearer ${localStorage.getItem("token")}`,
            },
           }
           );
           if(res.data.success){
            message.success(res.data.message);
            getAppointments();
           }
        }catch(error)
        {
            console.log(error)
            message.error('Response saved')
        }
    };


    const columns = [
        {
            title:'ID',
            dataIndex:'_id',
        },
   
         {
            title:'Date&Time',
            dataIndex:'date',
            render:(text,record) => (
                <span>
               {moment (record.date).format("DD-MM-YYYY")}
               {moment (record.time).format("HH:mm")}
                </span>
            
            ),       
         },
         {
            title:"Status",
            dataIndex:"status",
         },
         {
            title:"Actions",
            dataIndex:"actions",
            render:(text,record) => (
                <div className='d-flex'>
                    {record.status === "pending" && ( 
                        <div className="d-flex">
                            <button className='btn btn-success m-2' onClick={() => handleStatus(record,'approved')}>Approve</button> 
                             <button className='btn btn-danger m-2' onClick={() => handleStatus(record,'reject')}>Reject</button>
                       </div>                  
                        )}            
             </div>                   
              )
                // </div>
            }
         
    ];
  return (
    <Layout>
         <div className="appointment">
      <h1 className="text">Appointment lists</h1>
      <div className="table">
      <Table columns = {columns} dataSource={appointments}/>
      </div>
      </div>
    </Layout>
  )
}

export default DoctorAppointment
