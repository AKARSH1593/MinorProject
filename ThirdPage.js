import React from 'react'
import Navbar3 from '../Navbars/Navbar3'

const ThirdPage = () => {
  return (
    <div style={{background:'#FAD2D2'}}>
      <Navbar3/>
      <div style={{marginTop:'40px',display:'flex', justifyContent:'center',alignItems:'center'}}>
        <h1 style={{color:'#004080'}}>Your Path to Professional Excellence</h1>
      </div>
      <div style={{display:'flex', justifyContent:'space-evenly', alignItems:'center'}}>
        {/* left side */}
        <div>
            <div>
                <img src='MinorProject-master\public\assets\chhotkaimage.jpg'/>
            </div>
            <div>
                <img src='MinorProject-master\public\assets\chhotkaimage2.jpg'/>
            </div>
            <div>
                <img src='MinorProject-master\public\assets\chhotkaimage3.jpg'/>
            </div>
        </div>
        {/* right side */}
        <div>
            <div style={{background:"#5383FF",borderRadius:"5px",display:"flex",justifyContent:"center",alignItems:'center',marginTop:'30px',marginBottom:"-30px"}}>
                <h3>"FORGE YOUR FUTURE: YOUR CAREER AWAITS."</h3>
            </div>
            <div style={{display:'flex',alignItems:'center',marginTop:'50px'}}>
                <div style={{background:'#D2F2F2',height:'30vh',width:'15vw',padding:'10px'}}>
                    <h5 style={{color:'#004080'}}>Resume Builder</h5>
                    <ul>
                        <li>Access <br/> comprehensive <br/> lecture notes.</li>
                        <li>Contribute your <br/> own notes.</li>
                    </ul>
                </div>
                <div style={{background:'#A8B49A',height:'30vh',width:'15vw',padding:'10px'}}>
                    <h5 style={{color:'#004080'}}>Career Path Resources</h5>
                    <ul>
                        <li>Engage with shared <br/> resources.</li>
                        <li>Discuss and<br/> collaborate with <br/> peers.</li>
                    </ul>
                </div>
                <div style={{background:'#D2F2F2',height:'30vh',width:'15vw',padding:'10px'}}>
                    <h5 style={{color:'#004080'}}>Professional Development Courses</h5>
                    <ul>
                        <li>Refer to the  <br/> previous year's <br/> exam papers.</li>
                        <li>Contribute your <br/> own papers.</li>
                    </ul>
                </div>
            </div>
            <div style={{display:'flex',alignItems:'center',marginTop:'50px'}}>
                <div style={{background:'#D2F2F2',height:'30vh',width:'15vw',padding:'10px'}}>
                    <h5 style={{color:'#004080'}}>Professional Toolkit</h5>
                    <ul>
                        <li>Access <br/> comprehensive <br/> lecture notes.</li>
                        <li>Contribute your <br/> own notes.</li>
                    </ul>
                </div>
                <div style={{background:'#A8B49A',height:'30vh',width:'15vw',padding:'10px'}}>
                    <h5 style={{color:'#004080'}}>Career Path Resources</h5>
                    <ul>
                        <li>Engage with shared <br/> resources.</li>
                        <li>Discuss and<br/> collaborate with <br/> peers.</li>
                    </ul>
                </div>
                <div style={{background:'#D2F2F2',height:'30vh',width:'15vw',padding:'10px'}}>
                    <h5 style={{color:'#004080'}}>Professional Development Courses</h5>
                    <ul>
                        <li>Refer to the  <br/> previous year's <br/> exam papers.</li>
                        <li>Contribute your <br/> own papers.</li>
                    </ul>
                </div>
            </div>
            <div style={{marginTop:'20px'}}>
                <span style={{display:'flex',justifyContent:'center',alignItems:'center',color:'#004080',background:'white',width:'43.2rem',height:'7rem',fontSize:'2rem'}}>Resume Builder</span>
            </div>
            <div style={{marginTop:'20px'}}>
                <span style={{display:'flex',justifyContent:'center',alignItems:'center',color:'#004080',background:'white',width:'43.2rem',height:'7rem',fontSize:'2rem'}}>Industry Experts</span>
            </div>
        </div>
      </div>
    </div>
  )
}

export default ThirdPage
