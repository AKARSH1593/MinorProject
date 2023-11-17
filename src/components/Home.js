import React,{ useRef } from 'react'
import clgnm from './imgs/clgnm.png'
import girl from './imgs/girl.png'
import akarshimg from './imgs/Akarsh_Image.jpg'
import Slider from 'react-slick';
import './styles.css';
import { FaSearch } from 'react-icons/fa'; // Import the search icon from Font Awesome

export default function Home() {
  const sliderRef3rd = useRef(null);
  const sliderRef4th = useRef(null);
  const sliderRef6th = useRef(null);


  const events3rd = [
    { name: 'Event1', description: 'Join a vibrant community of students...' },
    { name: 'Event2', description: 'Another exciting event description.' },
    { name: 'Event3', description: 'Yet another event description.' },
    { name: 'Event4', description: 'Another exciting event description.' },
    { name: 'Event5', description: 'Yet another event description.' },
    { name: 'Event6', description: 'Yet another event description.' },
    // Add more events as needed
  ];

  const events4th = [
    { name: 'Event1', description: 'Join a vibrant community of students...' },
    { name: 'Event2', description: 'Another exciting event description.' },
    { name: 'Event3', description: 'Yet another event description.' },
    { name: 'Event4', description: 'Another exciting event description.' },
    { name: 'Event5', description: 'Yet another event description.' },
    { name: 'Event6', description: 'Yet another event description.' },
    // Add more events as needed
  ];
  const events6th = [
    { src:akarshimg, note:"CollegeConnect has transformed the way i study and connect with my peers. It's a game-changer for any college student.CollegeConnect has transformed the way i study and connect with my peers. It's a game-changer for any college student.", h31:'Akarsh', h32:'GKDU,Haridwar, '},
    { src:akarshimg, note:"CollegeConnect has transformed the way i study and connect with my peers. It's a game-changer for any college student.", h31:'Himanshu', h32:'GKDU,Haridwar'},
    { src:akarshimg, note:"CollegeConnect has transformed the way i study and connect with my peers. It's a game-changer for any college student.", h31:'A.M. Sanjeev', h32:'GKDU,Haridwar'},
    { src:akarshimg, note:"CollegeConnect has transformed the way i study and connect with my peers. It's a game-changer for any college student.", h31:'Abhishek', h32:'GKDU,Haridwar'},
  ]

  const CustomDots3rd = ({ onClick, activeIndex }) => (
    <ul className="custom-dots">
      {[0, 1, 2].map((index) => (
        <li
          key={index}
          onClick={() => {
            if (index === 2) sliderRef3rd.current.slickNext();
            else if (index === 0) sliderRef3rd.current.slickPrev();
          }}
          className={activeIndex === index ? 'slick-active' : ''}
        />
      ))}
    </ul>
  );
  const CustomDots4th = ({ onClick, activeIndex }) => (
    <ul className="custom-dots">
      {[0, 1, 2].map((index) => (
        <li
          key={index}
          onClick={() => {
            if (index === 2) sliderRef4th.current.slickNext();
            else if (index === 0) sliderRef4th.current.slickPrev();
          }}
          className={activeIndex === index ? 'slick-active' : ''}
        />
      ))}
    </ul>
  );

  const CustomDots6th = ({ onClick, activeIndex})=>(
    <ul className="custom-dots">
      {[0, 1, 2].map((index) => (
        <li
          key={index}
          onClick={() => {
            if (index === 2) sliderRef6th.current.slickNext();
            else if (index === 0) sliderRef6th.current.slickPrev();
          }}
          className={activeIndex === index ? 'slick-active' : ''}
        />
      ))}
    </ul>
  )

  const settings3rd = {
    infinite: true,
    speed: 1000,
    slidesToShow: 3,
    slidesToScroll: 1,
    dots: true,
    appendDots: (dots) => <CustomDots3rd {...dots} />,
  };
  const settings4th = {
    infinite: true,
    speed: 1000,
    slidesToShow: 3,
    slidesToScroll: 1,
    dots: true,
    appendDots: (dots) => <CustomDots4th {...dots} />,
  };

  const settings6th = {
    infinite:true,
    speed:1000,
    slidesToShow:1,
    slidesToScroll:1,
    dots:true,
    appendDots: (dots) => <CustomDots6th {...dots} />
  };
  
  return (
    <div>
      <div className="home">
        {/* 1st home page code */}
        <div className="firsthpage">
          <div className="appname">
              <img src={clgnm} alt="app name logo" />
              <h2>Bridging Minds, Empowering Futures</h2>
          </div>
          <div className="txtandimg">
              <div className="texts">
                  <p>College got you yawning?</p>
                  <p>Shake things up with CollegeConnect! Our platform redefines your campus experience, connecting you with peers and opportunities.</p>
                  <button className='btn'>Join For Free</button>
                  <button className='btn' style={{marginLeft:'3vw'}}>Learn More</button>
              </div>
              <div className="girlimg">
                  <img src={girl} alt="" />
              </div>

          </div>

        </div>

        <hr style={{height:'4vw',backgroundColor:'#eda4a4',margin:'0',opacity:'1'}}/>

        {/* 2nd Home Page code */}
        <div className="secondhpage" style={{padding:'0vw 4vw',paddingBottom:'3vw'}}>
          <h1 style={{marginBottom:'2vw', fontSize:'4rem'}}>Why College Connect?</h1>

          <div className="sechpg">
            <div className="blocks1sthpg">
              <div className="blocks1sth">
                <h3>Seamless Connection</h3>
                <p style={{color:'white'}}>Join a vibrant community of students, connect, and collaborate on your academic and personal eendeavors.</p>
              </div>
              <div className="blocks1sth">
                <h3>Academic Resources</h3>
                <p>Access lecture notes, study materials, and more to excel in your studies.</p>
              </div>
              <div className="blocks1sth">
                <h3>career Development</h3>
                <p>Build your path to success with job listings, resume builders, and mentorship.</p>
              </div>
              <div className="blocks1sth">
                <h3>P2P Tutoring</h3>
                <p>Get one-on-one support form your peers to ace your courses.</p>
              </div>
              <div className="blocks1sth">
                <h3>Seamless Connection</h3>
                <p>Join a vibrant community of students, connect, and collaborate on your academic and personal eendeavors.</p>
              </div>
              <div className="blocks1sth">
                <h3>Academic Resources</h3>
                <p>Access lecture notes, study materials, and more to excel in your studies.</p>
              </div>
              <div className="blocks1sth">
                <h3>career Development</h3>
                <p>Build your path to success with job listings, resume builders, and mentorship.</p>
              </div>
              <div className="blocks1sth">
                <h3>P2P Tutoring</h3>
                <p>Get one-on-one support form your peers to ace your courses.</p>
              </div>
            </div>
            <div className="2ndhpgexall" style={{background:'blueviolet',color:'white',padding:'1vw'}}>
              <h2>E</h2>
              <h2>X</h2>
              <h2>P</h2>
              <h2>L</h2>
              <h2>O</h2>
              <h2>R</h2>
              <h2>E</h2>
              <br />
              <h2>A</h2>
              <h2>L</h2>
              <h2>L</h2>
            </div>
          </div>

        </div>

        <hr style={{height:'4vw',backgroundColor:'#eda4a4',margin:'0',opacity:'1'}}/>
        {/* 3rd Page */}

        <div className="thirdhpage" style={{ padding: '1vw 3vw' }}>
          <h1 style={{fontSize:'4rem',marginLeft:'4vw'}}>Featured Events</h1>
          <Slider ref={sliderRef3rd} {...settings3rd}>
            {events3rd.map((event, index) => (
              <div key={index} className="sliderhome" style={{ width: '4vw' }}>
                <h3>{event.name}</h3>
                <p>{event.description}</p>
              </div>
            ))}
          </Slider>
        </div>

        <hr style={{height:'4vw',backgroundColor:'#eda4a4',margin:'0',opacity:'1'}}/>

        {/* 4th home page */}

        <div className="fourthpage" style={{ padding: '1vw 3vw' }}>
          <h1 style={{fontSize:'4rem',marginLeft:'4vw'}}>Upcoming Events</h1>
          <Slider ref={sliderRef4th} {...settings4th}>
            {events4th.map((event, index) => (
              <div key={index} className="sliderhome" style={{ width: '4vw' }}>
                <h3>{event.name}</h3>
                <p>{event.description}</p>
              </div>
            ))}
          </Slider>
        </div>

        <hr style={{height:'4vw',backgroundColor:'#eda4a4',margin:'0',opacity:'1'}}/>
        
        {/* 5th home page */}

        <div className="fifthhomepage" style={{padding:'2vh 10vw'}}>
          <h1 style={{fontSize:'4rem'}}>Join Study Group</h1>
          <div className="box5thpg">
            <input type="text" className="Search-input" placeholder="Search study Groups To Join" />
            <button className="search-icon" style={{color:'white',backgroundColor:'transparent',border:'none',fontSize:'400%',paddingBottom:'3vh',marginRight:'0'}}>
              <FaSearch/>
            </button>
          </div>
          <button style={{marginLeft:'0'}}>My Group</button>
          <button>Virtual Group Study Sessions</button>
        </div>

        <hr style={{height:'4vw',backgroundColor:'#eda4a4',margin:'0',opacity:'1'}}/>

        {/* 6th home page */}
        <div className="sixthhomepage" style={{padding:'2vh 10vw'}}>
          <h1 style={{fontSize:'4rem'}}>User Testimonials</h1>
          <div className="box6thhpage">
            <Slider ref={sliderRef6th} {...settings6th} >
              {events6th.map((event,index)=>(
                <div key={index} className="slider6thpg">
                  <img src={event.src} alt="..." />
                  <div className="txt6thhpg">
                    <p style={{fontSize:'larger',fontWeight:'bold'}}>{event.note}</p>
                    <h3 style={{marginTop:'3vh'}}>{event.h31}</h3>
                    <h3>{event.h32}</h3>
                  </div>
                </div>
              ))}
            </Slider>
              
          </div>
        </div>

        <div className="footerhome">
          <ul>
            <li><a href="/">About Us</a></li>
            <li><a href="/">Feedback</a></li>
            <li><a href="/">FAQ</a></li>
          </ul>
        </div>
        
      </div>
    </div>
  )
}
