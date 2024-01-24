import React,{useState,useEffect} from 'react'
import axios from 'axios'
import Layout from '../components/Layout'
import moment from 'moment'
import { Table } from 'antd'

const Appointment = () => {

    const [appointments,setAppointments] = useState([])
    const getAppointments = async()=>{
        try {
            const res = await axios.get('/api/v1/user/user-appointment',{
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

    const columns = [
        {
            title:'ID',
            dataIndex:'_id'
        },
        /*{
            title:"Name",
            dataIndex:"name",
            render:(text,record) => (
                <span>
                {record.doctorId.firstName} {record.doctorId.lastName}
                </span>
            
            ),       
         },
         {
            title:"Phone",
            dataIndex:"phone",
            render:(text,record) => (
                <span>
                {record.doctorId.phone} 
                </span>
            
            ),       
         },*/
         {
            title:'Date&time',
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

export default Appointment
