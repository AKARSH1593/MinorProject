import React from 'react'

import { FaStar } from "react-icons/fa";
import { BiSolidMessageRounded } from "react-icons/bi";
import { BsBriefcaseFill } from "react-icons/bs";
import { IoSearch } from "react-icons/io5";
import { FaRegBell } from "react-icons/fa6";
import { CgProfile } from "react-icons/cg";
import { MdGroups } from "react-icons/md";

const Navbar2 = () => {
  return (
    <div style={{display:'flex', justifyContent:'space-between', alignItems:'center',background:'#FFE4E4'}}>
      <div style={{marginLeft:'5%',fontSize:'2rem'}}>
        <FaStar />
      </div>
      <div  style={{display:'flex', justifyContent:'center', alignItems:'center',gap:'4rem',marginRight:'5%',fontSize:'1.5rem'}}>
        <div>
            <ul style={{display:'flex', justifyContent:'center', alignItems:'center',listStyleType: 'none',gap:'3rem'}}>
                <li>Events</li>
                <li>Groups</li>
            </ul>
        </div>
        <div style={{ display: 'flex', alignItems: 'center', justifyContent:"space-around", gap:"3rem" }}>
            <MdGroups />  
            <BiSolidMessageRounded />
            <BsBriefcaseFill />
            <IoSearch />
            <FaRegBell />
            <CgProfile />
        </div>
      </div>
    </div>
  )
}

export default Navbar2
