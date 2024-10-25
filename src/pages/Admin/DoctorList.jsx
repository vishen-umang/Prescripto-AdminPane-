import React, { useContext, useEffect } from 'react'
import { AdminContext } from '../../context/AdminContext'

const DoctorList = () => {
  const {doctors, aToken, getAllDoctors } = useContext(AdminContext)

   useEffect(()=>{
    if(aToken) {
      getAllDoctors
    }
   },[aToken])


  return (
    <div>
        doctors[0];
    </div>
  )
}

export default DoctorList