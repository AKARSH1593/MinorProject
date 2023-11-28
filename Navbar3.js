import React from 'react'

import { FaStar } from "react-icons/fa6";
import { IoSearch } from "react-icons/io5";
import { FaRegBell } from "react-icons/fa6";
import { CgProfile } from "react-icons/cg";


const Navbar3 = () => {
  return (
    <div style={{background:'#FFE4E4',display:'flex',justifyContent:'space-between',alignItems:'center',fontSize:"1.5rem"}}>
      <div style={{marginLeft:'5rem'}}>
        <FaStar />
      </div>
      <div style={{display:'flex',justifyContent:'space-evenly', alignItems:'center',gap:'3rem',marginRight:'5rem'}}>
        <div>
            <ul style={{display:'flex',justifyContent:'space-between', alignItems:'center',listStyleType: 'none',gap:'3rem'}}>
                <li>Job Listings</li>
                <li>Workshops</li>
                <li>Industry Experts</li>
                <li>Internships</li>
            </ul>
        </div>
        <IoSearch />
        <FaRegBell />
        <CgProfile />
      </div>
    </div>
  )
}

export default Navbar3
