import React from 'react'
import Navbar2 from '../Navbars/Navbar2'

const SecondPage = () => {
  return (
    <div style={{background:'#FAD2D2'}}>
      <Navbar2/>
      <div style={{display:'flex',flexDirection:'column', justifyContent:'center', alignItems:'center',background:'#FAD2D2',marginTop:'80px'}}>
        <div style={{display:'flex',justifyContent:'space-evenly',alignItems:'center'}}>
            <h1 style={{color:'#004080'}}>Welcome to the Academic Resources</h1>
        </div>
        <div style={{display:'flex',alignItems:'center',marginTop:'50px'}}>
            <div style={{background:'#D2F2F2',height:'30vh',width:'15vw',padding:'10px'}}>
                <h5 style={{color:'#004080'}}>Lecture Notes</h5>
                <ul>
                    <li>Access <br/> comprehensive <br/> lecture notes.</li>
                    <li>Contribute your <br/> own notes.</li>
                </ul>
            </div>
            <div style={{background:'#A8B49A',height:'30vh',width:'15vw',padding:'10px'}}>
                <h5 style={{color:'#004080'}}>Collaborative Learning Environment</h5>
                <ul>
                    <li>Engage with shared <br/> resources.</li>
                    <li>Discuss and<br/> collaborate with <br/> peers.</li>
                </ul>
            </div>
            <div style={{background:'#D2F2F2',height:'30vh',width:'15vw',padding:'10px'}}>
                <h5 style={{color:'#004080'}}>Previous Year Papers</h5>
                <ul>
                    <li>Refer to the  <br/> previous year's <br/> exam papers.</li>
                    <li>Contribute your <br/> own papers.</li>
                </ul>
            </div>
            <div style={{background:'#A8B49A',height:'30vh',width:'15vw',padding:'10px'}}>
                <h5 style={{color:'#004080'}}>Study Guides</h5>
                <ul>
                    <li>Explore curated <br/> study guides</li>
                    <li>Share your study <br/> guides with peers.</li>
                </ul>
            </div>
        </div>
      </div>
    </div>
  )
}

export default SecondPage
