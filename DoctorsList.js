import React from 'react'
import { useNavigate } from 'react-router-dom';


const DoctorsList = ({doctor}) => {
    const navigate = useNavigate()
  return (
    <>
    <div className='polaroid'>
        <div className='card m-3'
    style={{cursor:'pointer'}}
     onClick={() => navigate(`/doctor/book-appointment/${doctor._id}`)}>
    <div className='card-header'>
        Dr. {doctor.firstName} {doctor.lastName}
    </div>
    <div className='card-body'>
    <p>
        <b>Specialization:</b> {doctor.specialization}
    </p>
    <p>
        <b>Experience:</b> {doctor.experience}
    </p>
    <p>
        <b>Fees per Consultation:</b> {doctor. feesPerConsultation}
    </p>
    <p>
        <b>Timings:</b> {doctor. timings[0]}-{doctor. timings[1]}
    </p>
</div>
    </div>
    </div>
    </>
  )
}

export default DoctorsList
