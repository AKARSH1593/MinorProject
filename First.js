import React from 'react'

import { MdGroups } from "react-icons/md";
import { SlCalender } from "react-icons/sl";
import { CgProfile } from "react-icons/cg";
import { MdOutlinePermMedia } from "react-icons/md";
import { MdOutlineEventNote } from "react-icons/md";



const First = () => {
  return (
    <div style={{background:'#FAD2D2'}}>
      <h1 style={{color:'#004080',display:'flex', justifyContent:'center', alignItems:'center'}}>Connect And Collaborate</h1>
      <div style={{display:'flex', justifyContent:'space-evenly',marginTop:'50px'}}>
        {/* left */}
        <div style={{background:'#FFE4E4'}}>
            <div style={{background:'white', padding:'5%',width:'8vw',height:'28vh',borderRadius:'10px'}}>
            <div style={{display:'flex',justifyContent:'center', alignItems:'center'}}>
                <h5>My Groups</h5>
            </div>
            <div style={{display:'flex',justifyContent:'space-evenly'}}>
                <MdGroups />
                <MdGroups />
            </div>
            <div style={{display:'flex',justifyContent:'space-evenly'}}>
                <MdGroups />
                <MdGroups />
            </div>
            <div style={{marginTop:'30px'}}>
            <div style={{display:'flex',justifyContent:'center', alignItems:'center'}}>
                <h5>Events</h5>
            </div>
            <div style={{display:'flex',justifyContent:'space-evenly'}}>
            <SlCalender />
            <SlCalender />
            </div>
            <div style={{display:'flex',justifyContent:'space-evenly',marginTop:'4px'}}>
            <SlCalender />
            <SlCalender />
            </div>
            </div>
            </div>
        </div>
        {/* mid */}
        <div style={{background:'#FFE4E4',height:'20vh',width:'30vw',borderRadius:'10px'}}>
           <div style={{display:'flex',justifyContent:'space-evenly'}}>
            <div style={{fontSize:'3rem'}}>
                <CgProfile />
            </div>
            <div style={{marginTop:'15px'}}>
                <label htmlFor='search'></label>
                <input id='search' placeholder='Create Post...' style={{background:'white', borderRadius:'10px',height:'8vh',width:'20vw',}}></input>
            </div>
           </div>
           <div style={{display:'flex',fontSize:'2rem',justifyContent:'space-evenly'}}>
            <span>Media <MdOutlinePermMedia/></span>        
            <span>event <MdOutlineEventNote/></span>   
           </div>
        </div>
        {/* right */}
        <div style={{background:'#FFE4E4'}}>
          <div style={{background:'white', padding:'5%',justifyContent:'center',alignItems:'center',width:'10vw',borderRadius:'10px'}}>
            <h5 style={{display:'flex',justifyContent:'center', alignItems:'center'}}>Top News</h5>
            <div style={{background:'#FFE4E4', padding:'5%',justifyContent:'center',alignItems:'center',borderRadius:'5px'}}>
                <h6 style={{display:'flex',justifyContent:'center', alignItems:'center'}}>News 1</h6>
                <h6 style={{display:'flex',justifyContent:'center', alignItems:'center'}}>News 2</h6>
                <h6 style={{display:'flex',justifyContent:'center', alignItems:'center'}}>News 3</h6>
                <h6 style={{display:'flex',justifyContent:'center', alignItems:'center'}}>News 4</h6>
                <h6 style={{display:'flex',justifyContent:'center', alignItems:'center'}}>News 5</h6>
            </div>
          </div>
        </div>
      </div>
      <div style={{display:'flex',justifyContent:'center', alignItems:'center'}}>
        <img src='MinorProject-master\src\components\imgs\chhotkaImage.jpg' alt='image'/>
      </div>
    </div>
  )
}

export default First
