import React, { useState } from 'react';
import CardSlider from './car/CardSlider.js';
// import code from './Codegnan.png';
import "./Home.css";
import Team from "./Team.js";
const cards = [
  {

    image: 'https://codegnan.com/wp-content/uploads/2024/03/tech-mahindra-1.webp',
  },
  {

    image: 'https://codegnan.com/wp-content/uploads/2024/03/temenos-logo-1.webp',
  },
  {

    image: 'https://codegnan.com/wp-content/uploads/2024/03/amazon-logo.webp',
  },
  {

    image: 'https://codegnan.com/wp-content/uploads/2024/03/google-logo.webp',
  },
  {

    image: 'https://codegnan.com/wp-content/uploads/2024/03/rcs-logo.webp',
  },
  {

    image: 'https://codegnan.com/wp-content/uploads/2024/03/temenos-logo-1.webp',
  },
  {

    image: 'https://codegnan.com/wp-content/uploads/2024/03/Accenture.svg-1-1536x405-1.webp',
  },

  // Add more cards as needed
];
const Home = () => {
  const [isOpen1, setIsOpen1] = useState(false);
  const [isOpen2, setIsOpen2] = useState(false);
  const [isOpen3, setIsOpen3] = useState(false);
  const [isOpen4, setIsOpen4] = useState(false);
  const [isOpen5, setIsOpen5] = useState(false);
  const [isOpen6, setIsOpen6] = useState(false);
  const [isOpen7, setIsOpen7] = useState(false);
  const [isOpen8, setIsOpen8] = useState(false);
  return (
    <>
 <style>
      {
        `* {
          font-family: sans-serif system-ui, -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif;
        }
        .card{
          margin-top:"0%",
          padding-top:0%
        }
        body {
          overflow-x: hidden;
        }
        
        .sec1 {
          background-color: #1f216e;
          margin-top: 10%;
        }
        
        .span1 {
          color: #1ab69d;
        }
        
        .head1 {
          font-weight: bold;
          color: white;
          font-size: 35px;
          padding-top: 7%;
          /* Adjust as needed */
          margin-left: 5%;
        }
        
        
        .para1 {
          color: whitesmoke;
          margin-top: 3%;
          margin-left: 5%;
          font-size: 20px;
          line-height: 1.5;
        }
        
        .para2 {
          color: whitesmoke;
        
          margin-left: 5%;
          font-size: 20px;
        
        }
        
        .img1 {
          width: 100%;
          margin-left: 15%;
        }
        
        .list-unstyled {
          list-style: none;
          /* Remove default bullets */
          padding-left: 0;
          /* Remove default left padding */
        }
        
        .btn1 {
          background-color: #1ab69d;
          color: white;
          border: none;
          border-radius: 5px;
          height: 50px;
          width: 200px;
          margin-left: 3%;
          margin-bottom: 15%;
        }
        
        .btn1:hover {
          background-color: #ee4a62;
          color: white;
          border: none;
          border-radius: 5px;
          height: 50px;
          width: 200px;
        }
        
        .fa-arrow-right {
          color: white;
        }
        
        // .card1 {
        //   width: 300px;
         
        //   margin-left: 25%;
        //   border: 1px solid grey;
        // }
        
        // // .card2 {
        // //   width: 300px;
        // //   height: 100px;
        
        // //   border: 1px solid grey;
        // // }
        
        // // .card3 {
        // //   width: 300px;
        // //   height: 100px;
        
        // //   border: 1px solid grey;
        // //   margin-left: -22%;
        // // }
       ,card1,.card2,.card3, .card4,
        .card5,
        .card6,
        .card7 {
          width: 300px;
          height: 100px;
        
          border: 1px solid grey;
        }
        .img2{
          object-fit:contain,
          aspect-ratio:2/1;
          width:10%;
          margin-left:-2%;
        }
        .card-body {
          display: flex;
          align-items: center;
        }
        
        .card-body img {
          width: 60px;
          margin-right: 10px;
          /* Adjust spacing between image and text */
        }
        
        .card-body div {
          display: flex;
          flex-direction: column;
        }
        
        .para4 {
          /* margin-top: 3px; */
          color: black;
          font-weight: bold;
          font-size: 20px;
        }
        
        .para3 {
          color: grey;
        
          font-size: 20px;
          font-weight: 500;
        }
        
        .sec2 {
          margin-top: 5%;
        }
        
        .img2 {
          margin-bottom: 1%;
        }
        
        .card {
          margin-bottom: 20px;
          /* Adjust as needed */
        }
        
        .para5 {
          color: #2b2929;
          font-weight: 500;
        }
        
       
        .fa-star {
          color: gold;
        }
        
        .fa-calendar-days {
          color: #ee4a62;
        }
        
        .span2 {
          color: #1ab69d;
          font-weight: bold;
        }
        
        .c1 {
          font-weight: bold;
          font-size: 20px;
        }
        
        .cl1 {
          color: #ee4a62;
          font-weight: bold;
          margin-top: -6%
        }
        
        .cl1:hover {
          color: #1ab69d;
        }
        
        .span3 {
          color: #ee4a62;
        }
        
        .span3:hover {
          color: #1ab69d;
        }
        
        .dsa {
          height: 85%;
        }
        
        .clang {
          height: 85%;
        }
        
        .dsa,
        .ml,
        .jfs,
        .ds,
        .py,
        .ja,
        .clang {
          border: 2px solid grey;
        }
        
        .grid {
          background-color: #f4f4f4;
        }
        
        .span4 {
          color: #1ab69d;
        }
        
        .cl2 {
          margin-top: -2%;
          font-size: 20px;
        }
        
        .sft {
          margin-left: 5%;
        }
        
        .companies {
          text-align: center;
          font-size: 35px;
        }
        
        .span5 {
          color: #1ab69d;
        }
        
        .sec3 {
          margin-top: 5%;
        }
        
        .img1:hover {
          transform: scale(0.8);
          transition: 2s;
        }
        
        .sec4 {
          margin-top: 4%;
          background-color: #f4f4f4;
        }
        
        .span6 {
          color: #ee4a62;
          font-weight: bold;
        }
        
        .jap {
          text-decoration: none;
        
        
        }
        
        .para7 {
          color: rgba(255, 255, 255, 0.5);
        }
        
        .btn2 {
          background-color: #1ab69d;
          border: 1px solid white;
          border-radius: 5px;
          color: white;
        }
        @media only screen and (max-width: 1200px) {
          /* Adjustments for all elements at screen sizes less than 1200px */
          .sec1 {
            margin-top: 10%;
            margin-left:5%;
            width:100%;
          }
        
          .head1 {
            font-weight: bold;
            color: white;
            font-size: 35px;
            padding-top: 7%;
            margin-left: 5%;
            text-align: center;
          }
        
          .para1,
          .para2 {
            color: whitesmoke;
            margin-top: 3%;
            margin-left: 5%;
            font-size: 20px;
            line-height: 1.5;
            text-align: center;
          }
        
          .img1 {
            width: 100%;
            margin-left: 15%;
          }
        
          .btn1 {
            background-color: #1ab69d;
            color: white;
            border: none;
            border-radius: 5px;
            height: 50px;
            width: 200px;
            margin-left: 3%;
            margin-bottom: 15%;
          }
        
          .companies {
            text-align: center;
            font-size: 35px;
          }
        
          .sec4 {
            margin-top: 4%;
            background-color: #f4f4f4;
          }
        
          .span6 {
            color: #ee4a62;
            font-weight: bold;
          }
        
          .jap {
            text-decoration: none;
          }
        
          .btn2 {
            background-color: #1ab69d;
            border: 1px solid white;
            border-radius: 5px;
            color: white;
          }
        
          .btn2:hover {
            background-color: #1ab69d;
            border: 1px solid black;
            border-radius: 5px;
            color: white;
          }
        
          /* Add more adjustments here for other elements as needed */
        }
        @media only screen and width(max-width:"1199px"){
          .sec1{
            marginTop:10%;
            max-width:100%;
            marginRight:"30%";
          }
        }
        @media only width(min-width:"390px") and width(max-width:"490px"){
          .sec1{
            marginTop:10%;
            max-width:100%;
            marginRight:"30%";
          }
        }
        
        
        .btn2:hover {
          background-color: #1ab69d;
          border: 1px solid black;
          border-radius: 5px;
          color: white;
        }`
      }
     </style>
      <section className='sec1'>
        <div className='container'>
          <div className='row'>
            <div className='col-12 col-md-6 d-flex justify-content-center flex-column' style={{marginLeft:"-5px"}}>
              <h3 className='head1'>Online & classroom <br /><span className='span1'>IT training institute (India)</span></h3>
              <p className='para1'>Codegnan offers<b> finishing schools </b>for students who want to start and grow<br />their tech career. Become job-ready with our expert trainer-led online and<br />classroom IT certification courses.</p><br />
              <ul className='list-unstyled'>
                <li className='para2'><i className="fa-solid fa-check-double list-style"></i>Expert trainers from top universities and companies</li>
                <li className='para2'><i className="fa-solid fa-check-double list-style"></i>Trained 30,000+ students</li>
                <li className='para2'><i className="fa-solid fa-check-double list-style"></i>1250+ companies have hired Codegnan learners</li>
                <li className='para2'><i className="fa-solid fa-check-double list-style"></i>Most advanced course curriculum</li>
                <li className='para2'><i className="fa-solid fa-check-double list-style"></i>Practical learning with live projects</li>
                <li className='para2'><i className="fa-solid fa-check-double list-style"></i>Career support with our job acceleration program</li>
                <li className='para2'><i className="fa-solid fa-check-double list-style"></i>Rated 4.8/5 by more than 2,200 students</li>
              </ul>
              <button className='btn1'>Explore Program<i class="fa-solid fa-arrow-right"></i></button>

            </div>
            <div className='col-12 col-md-6'>
              <img src="https://res.cloudinary.com/dksu56pzn/image/upload/v1715425018/codegnan-placements_ylmbxi.jpg" className='img1' alt='Codegnan Logo' style={{width:"120%",marginLeft:"-2%"}} />
            </div>
          </div>
        </div>
      </section>
      <section className='sec2'>
        <div className='container'>
          <div className='row'>

            {/* Existing Cards */}
            <div className='col-12 col-md-4'>
              <div className="card card1">
                <div className="card-body">
                  <img src='https://codegnan.com/wp-content/uploads/2024/03/google-shoping1.webp' alt='Google My Business' className='img2' />
                  <div>
                    <p className='para3'>Google My Business</p>
                    <p className='para4'>Rated 4.8/5</p>
                  </div>
                </div>
              </div>
            </div>
            <div className='col-12 col-md-4'>
              <div className="card card2">
                <div className="card-body">
                  <img src='https://w7.pngwing.com/pngs/272/770/png-transparent-trustpilot-logos-brands-in-colors-icon.png' alt='Trustpilot' className='img2' />
                  <div>
                    <p className='para3'>Trustpilot</p>
                    <p className='para4'>Rated 4.8/5</p>
                  </div>
                </div>
              </div>
            </div>
            <div className='col-12 col-md-4'>
              <div className="card card3">
                <div className="card-body">
                  <img src='https://codegnan.com/wp-content/uploads/2024/03/jd2-150x150-1.webp' alt='Justdail' className='img2' />
                  <div>
                    <p className='para3'>Justdail</p>
                    <p className='para4'>Rated 4.7/5</p>
                  </div>
                </div>
              </div>
            </div>

            {/* New Cards */}
            <div className='row'>
              <div className='col-12 col-md-3'>
                <div className="card card4">
                  <div className="card-body">
                    {/* Image URL for Card 4 */}
                    <img src='https://codegnan.com/wp-content/uploads/2024/03/2800-150x1455-1.webp' alt='Card 4' className='img2' />
                    <div>
                      <p className='para5'>Student placed <br /> till date</p>

                    </div>
                  </div>
                </div>
              </div>
              <div className='col-12 col-md-3'>
                <div className="card card5">
                  <div className="card-body">
                    {/* Image URL for Card 5 */}
                    <img src='https://codegnan.com/wp-content/uploads/2024/03/900-150x145-1.webp' alt='Card 5' className='img2' />
                    <div>
                      <p className='para5'>Drives Conducted<br /> So far</p>

                    </div>
                  </div>
                </div>
              </div>
              <div className='col-12 col-md-3'>
                <div className="card card6">
                  <div className="card-body">
                    {/* Image URL for Card 6 */}
                    <img src='https://codegnan.com/wp-content/uploads/2024/03/13.9-150x145-1.webp' alt='Card 6' className='img2' />
                    <div>
                      <p className='para5'>Highest Salary<br /> Package</p>

                    </div>
                  </div>
                </div>
              </div>
              <div className='col-12 col-md-3'>
                <div className="card card7">
                  <div className="card-body">
                    {/* Image URL for Card 7 */}
                    <img src='https://codegnan.com/wp-content/uploads/2024/03/3-5-1-150x145-1.webp' alt='Card 7' className='img2' />
                    <div>
                      <p className='para5'>Average Salary <br /> Package</p>

                    </div>
                  </div>
                </div>
              </div>
            </div>

          </div>
        </div>
      </section>
      <section className="grid" style={{ marginTop: "2%" }}>
        <div className="grid2">
          <h2 align="center" style={{ paddingTop: "4%" }}>
            <b><i className="fa-solid fa-star "></i> Our Certification <span className='span4'>Programs</span></b><br />
            <img src="https://codegnan.com/wp-content/uploads/2023/05/heading-separator.png" alt="Heading" />
          </h2>
        </div>

        
          <div className="container">
            <div className="row d-flex flex-row justify-content-center vijju">
              <div className="col-12 col-md-3">
                <div className="card ds" style={{ border: '1px solid black', paddingLeft: '10px', paddingTop: '10px', width: '300px' }}>
                  <h5 className="card-title"><i className="fa-solid fa-calendar-days"></i> Duration: 1 Month</h5>
                  <p className="card-text c1">Python <span className='span2'>Training</span></p>
                  <p className="card-text2 c2">Launch your data science or web development career with Python, the versatile programming language.</p><br />
                  <p><b>Python courses available in:</b> <span className='span3'>Hyderabad, Viajyawada, Bangalore</span></p>
                </div>
              </div>
              <div className="col-12 col-md-3">
                <div className="card ds" style={{ border: '1px solid black', paddingLeft: '20px', paddingTop: '10px', width: '300px' }}>
                  <h5 className="card-title "><i className="fa-solid fa-calendar-days"></i> Duration: 6 Months</h5>
                  <p className="card-text c1">DataScience <span className='span2'>Training</span></p>
                  <p className="card-text2 c2">Advance your analytics career by gaining data science skills to extract strategic insights.</p><br />
                  <p><b>Data science courses available in:</b> <span className='span3'>Hyderabad, Viajyawada, Bangalore</span></p>
                </div>
              </div>
              <div className="col-12 col-md-3">
                <div className="card py" style={{ border: '1px solid black', paddingLeft: '20px', paddingTop: '10px', width: '300px' }}>
                  <h5 className="card-title"><i className="fa-solid fa-calendar-days"></i> Duration: 50 days</h5>
                  <p className="card-text c1">Full-stack Python Course</p>
                  <p className="card-text2 c2">Become a full-stack Python developer and kickstart your web and app development career.</p><br />
                  <p><b>Full-stack Python courses available in:</b> <span className='span3'>Hyderabad, Viajyawada, Bangalore</span></p>
                </div>
              </div>
            </div>
          
        
            <div className="row d-flex flex-row justify-content-center vijju">
              <div className="col-12 col-md-3">
                <div className="card ja" style={{ border: '1px solid black', paddingLeft: '10px', paddingTop: '10px', width: '300px' }}>
                  <h5 className="card-title"><i className="fa-solid fa-calendar-days"></i> Duration: 1 Month</h5>
                  <p className="card-text c1">Java <span className='span2'>Training</span></p>
                  <p className="card-text2 c2">Strengthen your backend development career by mastering object-oriented Java.</p><br />
                  <p><b>Java training classes available in:</b> <span className='span3'>Hyderabad, Viajyawada</span></p>
                </div>
              </div>
              <div className="col-12 col-md-3">
                <div className="card ml" style={{ border: '1px solid black', paddingLeft: '20px', paddingTop: '10px', width: '300px' }}>
                  <h5 className="card-title"><i className="fa-solid fa-calendar-days"></i> Duration: 6 Months</h5>
                  <p className="card-text c1">Machine Learning <span className='span2'>Training</span></p>
                  <p className="card-text2 c2">Advance your career in AI by mastering machine learning models and algorithms.</p><br />
                  <p><b>Machine learning classes available in:</b> <span className='span3'>Hyderabad, Bangalore</span></p>
                </div>
              </div>
              <div className="col-12 col-md-3">
                <div className="card fsj" style={{ border: '1px solid black', paddingLeft: '20px', paddingTop: '10px', width: '300px' }}>
                  <h5 className="card-title"><i className="fa-solid fa-calendar-days"></i> Duration: 50 days</h5>
                  <p className="card-text c1">Full-stack Java <span className='span2'>Course</span></p>
                  <p className="card-text2 c2">Launch your career as a full-stack developer by gaining in-demand Java skills spanning front and backend.</p><br />
                  <p><b>Full-stack Java courses available in:</b> <span className='span3'>Viajyawada, Bangalore</span></p>
                </div>
              </div>
            </div>
        
      
            <div className="row d-flex flex-row justify-content-center vijju">
              <div className="col-12 col-md-3">
                <div className="card rj" style={{ border: '1px solid black', paddingLeft: '10px', paddingTop: '10px', width: '300px' }}>
                  <h5 className="card-title"><i className="fa-solid fa-calendar-days"></i> Duration: 1 Month</h5>
                  <p className="card-text c1">React JS <span className='span2'>Training</span></p>
                  <p className="card-text2 c2">Boost your front-end career by building interactive web apps with React.</p><br />
                  <p className='cl1'>React JS course in Vijayawada</p>
                </div>
              </div>
              <div className="col-12 col-md-3">
                <div className="card dsa" style={{ border: '1px solid black', paddingLeft: '20px', paddingTop: '10px', width: '300px' }}>
                  <h5 className="card-title"><i className="fa-solid fa-calendar-days "></i> Duration: 6 Months</h5>
                  <p className="card-text c1">Data Structures & Algorithm <br /><span className='span2'>Training</span></p>
                  <p className="card-text2 c2">Strengthen your foundations to pass interviews and excel in software roles.</p><br />
                  <p className='cl1'>Data structure course in Vijayawada</p>
                </div>
              </div>
              <div className="col-12 col-md-3">
                <div className="card clang" style={{ border: '1px solid black', paddingLeft: '20px', paddingTop: '10px', width: '300px' }}>
                  <h5 className="card-title"><i className="fa-solid fa-calendar-days"></i> Duration: 50 days</h5>
                  <p className="card-text c1">C Programming <span className='span2'>Course</span></p>
                  <p className="card-text2 c2">Advance your systems and hardware programming career by mastering C language.</p><br />
                  <p className='cl1'>C language course in Vijayawada</p>
                </div>
              </div>
              <div className="col-12">
                <div className="card sft" style={{ border: '1px solid black', paddingLeft: '20px', paddingTop: '10px', width: '1200px', height: "200px" }}>
                  <h5 className="card-title"><i className="fa-solid fa-calendar-days"></i> Duration: 100 days</h5>
                  <p className="card-text c1">Software Testing <span className='span2'>Training</span></p>
                  <p className="card-text2 c2">Learn comprehensive software testing skills through a thorough training program covering manual testing, white-box and black-box testing, Selenium,<br /> and working on live projects to gain practical experience.

                  </p><br />
                  <p className='cl2'><b>Software testing classes available in:</b> <span className='span3'>Vijayawada, Bangalore</span>, and <span className='span3'>Hyderabad</span>

                  </p>
                </div>
              </div>

            </div>
          </div>
        
    
      </section>
      <section className='sec3'>
        <center><h1 className='companies'>Companies where<span style={{color:"#1AB69D"}} > Our students got placed</span> </h1></center>
        <center>
          <img src="https://codegnan.com/wp-content/uploads/2023/05/heading-separator.png" alt="Heading" />
        </center>
        <div className='container'>
          <div className='row'>
            <div className='col-12 col-md-2'>
              <div class="card" style={{ width: "80%", border: "2px solid black", marginLeft: "25%" }}>
                <div class="card-body">
                  <img src='https://codegnan.com/wp-content/uploads/2024/03/rcs-logo.webp' style={{ marginLeft: "10%", width: "100%" }} className='img1' />


                </div>
              </div>
            </div>
            <div className='col-12 col-md-2'>
              <div class="card" style={{ width: "80%", border: "2px solid black", marginLeft: "25%" }}>
                <div class="card-body">
                  <img src='https://codegnan.com/wp-content/uploads/2024/03/google-logo.webp' style={{ marginLeft: "10%", width: "100%" }} className='img1' />


                </div>
              </div>
            </div>
            <div className='col-12 col-md-2'>
              <div class="card" style={{ width: "80%", border: "2px solid black", marginLeft: "25%" }}>
                <div class="card-body">
                  <img src='https://codegnan.com/wp-content/uploads/2024/03/amazon-logo.webp' style={{ marginLeft: "10%", width: "100%" }} className='img1' />


                </div>
              </div>
            </div>
            <div className='col-12 col-md-2'>
              <div class="card" style={{ width: "80%", border: "2px solid black", marginLeft: "25%" }}>
                <div class="card-body">
                  <img src='https://codegnan.com/wp-content/uploads/2024/03/microsoft-logo.webp' style={{ marginLeft: "10%", width: "100%" }} className='img1' />


                </div>
              </div>
            </div>
            <div className='col-12 col-md-2'>
              <div class="card" style={{ width: "80%", border: "2px solid black", marginLeft: "25%" }}>
                <div class="card-body">
                  <img src='https://codegnan.com/wp-content/uploads/2024/03/iit-bombay-logo.webp' style={{ marginLeft: "10%", width: "100%" }} className='img1' />


                </div>
              </div>
            </div>
            <div className='col-12 col-md-2'>
              <div class="card" style={{ width: "80%", border: "2px solid black", marginLeft: "25%" }}>
                <div class="card-body">
                  <img src='https://codegnan.com/wp-content/uploads/2024/03/stanford-university-logo.webp' style={{ marginLeft: "10%", width: "100%" }} className='img1' />


                </div>
              </div>
            </div>


          </div>
          <div className='row'>
            <div className='col-12 col-md-2'>
              <div class="card" style={{ width: "80%", border: "2px solid black", marginLeft: "25%" }}>
                <div class="card-body">
                  <img src='https://codegnan.com/wp-content/uploads/2024/03/Nielseni-iq-logo-1.webp' style={{ marginLeft: "10%", width: "100%" }} className='img1' />


                </div>
              </div>
            </div>
            <div className='col-12 col-md-2'>
              <div class="card" style={{ width: "80%", border: "2px solid black", marginLeft: "25%" }}>
                <div class="card-body">
                  <img src='https://codegnan.com/wp-content/uploads/2024/01/pwc-logo-1.png' style={{ marginLeft: "10%", width: "100%" }} className='img1' />


                </div>
              </div>
            </div>
            <div className='col-12 col-md-2'>
              <div class="card" style={{ width: "80%", border: "2px solid black", marginLeft: "25%" }}>
                <div class="card-body">
                  <img src='https://codegnan.com/wp-content/uploads/2024/01/pwc-logo-1.png' style={{ marginLeft: "10%", width: "100%" }} className='img1' />


                </div>
              </div>
            </div>
            <div className='col-12 col-md-2'>
              <div class="card" style={{ width: "80%", border: "2px solid black", marginLeft: "25%" }}>
                <div class="card-body">
                  <img src='https://codegnan.com/wp-content/uploads/2024/03/mphasis-logo-1.webp' style={{ marginLeft: "10%", width: "100%" }} className='img1' />


                </div>
              </div>
            </div>
            <div className='col-12 col-md-2'>
              <div class="card" style={{ width: "80%", border: "2px solid black", marginLeft: "25%" }}>
                <div class="card-body">
                  <img src='https://codegnan.com/wp-content/uploads/2024/03/mphasis-logo-1.webp' style={{ marginLeft: "10%", width: "100%" }} className='img1' />


                </div>
              </div>
            </div>
            <div className='col-12 col-md-2'>
              <div class="card" style={{ width: "80%", border: "2px solid black", marginLeft: "25%" }}>
                <div class="card-body">
                  <img src='https://codegnan.com/wp-content/uploads/2024/03/truminds-logo-1.webp' style={{ marginLeft: "10%", width: "100%" }} className='img1' />


                </div>
              </div>
            </div>


          </div>
          <div className='row'>
            <div className='col-12 col-md-2'>
              <div class="card" style={{ width: "80%", border: "2px solid black", marginLeft: "25%" }}>
                <div class="card-body">
                  <img src='https://codegnan.com/wp-content/uploads/2024/03/Accenture.svg-1-1536x405-1.webp' style={{ marginLeft: "10%", width: "100%" }} className='img1' />


                </div>
              </div>
            </div>
            <div className='col-12 col-md-2'>
              <div class="card" style={{ width: "80%", border: "2px solid black", marginLeft: "25%" }}>
                <div class="card-body">
                  <img src='https://codegnan.com/wp-content/uploads/2024/03/adabella-logo-1.webp' style={{ marginLeft: "10%", width: "100%" }} className='img1' />


                </div>
              </div>
            </div>
            <div className='col-12 col-md-2'>
              <div class="card" style={{ width: "80%", border: "2px solid black", marginLeft: "25%" }}>
                <div class="card-body">
                  <img src='https://codegnan.com/wp-content/uploads/2024/03/temenos-logo-1.webp' style={{ marginLeft: "10%", width: "100%" }} className='img1' />


                </div>
              </div>
            </div>
            <div className='col-12 col-md-2'>
              <div class="card" style={{ width: "80%", border: "2px solid black", marginLeft: "25%" }}>
                <div class="card-body">
                  <img src='https://codegnan.com/wp-content/uploads/2024/03/tech-mahindra-1.webp' style={{ marginLeft: "10%", width: "100%" }} className='img1' />


                </div>
              </div>
            </div>
            <div className='col-12 col-md-2'>
              <div class="card" style={{ width: "80%", border: "2px solid black", marginLeft: "25%" }}>
                <div class="card-body">
                  <img src='https://codegnan.com/wp-content/uploads/2024/03/ezetap-logo-1.webp' style={{ marginLeft: "10%", width: "100%" }} className='img1' />


                </div>
              </div>
            </div>
            <div className='col-12 col-md-2'>
              <div class="card" style={{ width: "80%", border: "2px solid black", marginLeft: "25%" }}>
                <div class="card-body">
                  <img src='https://codegnan.com/wp-content/uploads/2024/03/hired-logos-3.webp' style={{ marginLeft: "10%", width: "100%" }} className='img1' />


                </div>
              </div>
            </div>


          </div>
          <div className='row'>
            <div className='col-12 col-md-2'>
              <div class="card" style={{ width: "80%", border: "2px solid black", marginLeft: "25%", height: "70%" }}>
                <div class="card-body">
                  <img src='https://codegnan.com/wp-content/uploads/2024/03/hired-logos-9.webp' style={{ marginLeft: "10%", width: "100%", height: "50%", marginTop: "-2%" }} className='img1' />


                </div>
              </div>
            </div>
            <div className='col-12 col-md-2'>
              <div class="card" style={{ width: "80%", border: "2px solid black", marginLeft: "25%" }}>
                <div class="card-body">
                  <img src='https://codegnan.com/wp-content/uploads/2024/04/hired-logos-5.webp' style={{ marginLeft: "10%", width: "100%" }} className='img1' />


                </div>
              </div>
            </div>
            <div className='col-12 col-md-2'>
              <div class="card" style={{ width: "80%", border: "2px solid black", marginLeft: "25%" }}>
                <div class="card-body">
                  <img src='https://codegnan.com/wp-content/uploads/2024/03/voya-india-logo-1.webp' style={{ marginLeft: "10%", width: "100%" }} className='img1' />


                </div>
              </div>
            </div>
            <div className='col-12 col-md-2'>
              <div class="card" style={{ width: "80%", border: "2px solid black", marginLeft: "25%" }}>
                <div class="card-body">
                  <img src='https://codegnan.com/wp-content/uploads/2024/03/teksan-logo-1.webp' style={{ marginLeft: "10%", width: "100%" }} className='img1' />


                </div>
              </div>
            </div>
            <div className='col-12 col-md-2'>
              <div class="card" style={{ width: "80%", border: "2px solid black", marginLeft: "25%" }}>
                <div class="card-body">
                  <img src='https://codegnan.com/wp-content/uploads/2024/03/bosch-logo.webp' style={{ marginLeft: "10%", width: "100%" }} className='img1' />


                </div>
              </div>
            </div>
            <div className='col-12 col-md-2'>
              <div class="card" style={{ width: "80%", border: "2px solid black", marginLeft: "25%" }}>
                <div class="card-body">
                  <img src='https://codegnan.com/wp-content/uploads/2024/03/bankof-america-1.webp' style={{ marginLeft: "10%", width: "100%" }} className='img1' />


                </div>
              </div>
            </div>


          </div>
        </div>


      </section>
      <section className='sec4'>
        <div className='container' style={{marginTop:"-2%"}}>
          <div className='row'>
            <div className='col-12 col-md-6' style={{marginTop:"-5%"}}>
              <h1 className='why' style={{ fontSize: "35px", marginTop: "30%", marginLeft: "10%" }}>Why enroll in Codegnan's<br /><span style={{color:"#1AB69D"}}>Certification Programs</span></h1>
              <img src="https://codegnan.com/wp-content/uploads/2023/05/heading-separator.png" alt="Heading" style={{ marginLeft: "10%" }} />
            </div>
            <div className='col-12 col-md-6' style={{marginTop:"-5%"}}>
              <div className="card" style={{ width: "30rem", marginTop: "30%" }}>
                <div classN="card-body" style={{ display: "flex", flexDirection: "column", }}>
                  <div className="accordion" style={{ padding: '2%' }}>
                    <div className="accordion-item" style={{ padding: '2%' }}>
                      <h6 className="accordion-header" onClick={() => setIsOpen1(!isOpen1)} style={{ cursor: 'pointer', fontWeight: 'bold', paddingLeft: '2%' }}>
                        <i className="fa-solid fa-play"></i> Job Assistance Program
                      </h6>
                      {isOpen1 && (
                        <div className="accordion-body" style={{ padding: '2%' }}>
                          <p>Enroll in our 100-day <a href='https://codegnan.com/job-accelerator-program/' className='jap'><span className='span6'>Job Accelerator Program</span></a>, offering job placement and career support for a successful transition into the workforce.</p>
                        </div>
                      )}
                    </div>
                    <div className="accordion-item" style={{ padding: '2%' }}>
                      <h6 className="accordion-header" onClick={() => setIsOpen2(!isOpen2)} style={{ cursor: 'pointer', fontWeight: 'bold', paddingLeft: '2%' }}>
                        <i className="fa-solid fa-play"></i> Affordable Training Fees
                      </h6>
                      {isOpen2 && (
                        <div className="accordion-body" style={{ padding: '2%' }}>
                          <p>Start your learning journey with affordable training fees, beginning at just 5000 INR for the foundational course.</p>
                        </div>
                      )}
                    </div>
                    <div className="accordion-item" style={{ padding: '2%' }}>
                      <h6 className="accordion-header" onClick={() => setIsOpen3(!isOpen3)} style={{ cursor: 'pointer', fontWeight: 'bold', paddingLeft: '2%' }}>
                        <i className="fa-solid fa-play"></i> Export Trainers and Mentors
                      </h6>
                      {isOpen3 && (
                        <div className="accordion-body" style={{ padding: '2%' }}>
                          <p>Get mentored by industry experts, including professionals from IITs, Amazon, Google, ensuring top-notch education and real-world insights. Meet our <a href='https://codegnan.com/our-team/' className='jap'><span className='span6'>team of Trainers and Mentors</span></a>.</p>
                        </div>
                      )}
                    </div>
                    <div className="accordion-item" style={{ padding: '2%' }}>
                      <h6 className="accordion-header" onClick={() => setIsOpen4(!isOpen4)} style={{ cursor: 'pointer', fontWeight: 'bold', paddingLeft: '2%' }}>
                        <i className="fa-solid fa-play"></i> Online or Classroom Training
                      </h6>
                      {isOpen4 && (
                        <div className="accordion-body" style={{ padding: '2%' }}>
                          <p>Choose your preferred learning mode – online live classes or attend classroom training in Hyderabad, Vijayawada, and Bangalore. <a href='https://codegnan.com/contact-us/' className='jap'><span className='span6'>Contact Us now</span></a> to share your queries</p>
                        </div>
                      )}
                    </div>
                    <div className="accordion-item" style={{ padding: '2%' }}>
                      <h6 className="accordion-header" onClick={() => setIsOpen5(!isOpen5)} style={{ cursor: 'pointer', fontWeight: 'bold', paddingLeft: '2%' }}>
                        <i className="fa-solid fa-play"></i> Trusted by 30,000+ Students
                      </h6>
                      {isOpen5 && (
                        <div className="accordion-body" style={{ padding: '2%' }}>
                          <p>Join a community of over 30,000 satisfied students who have rated our courses at 4.8/5, trusting Codegnan for quality education.</p>
                        </div>
                      )}
                    </div>
                    <div className="accordion-item" style={{ padding: '2%' }}>
                      <h6 className="accordion-header" onClick={() => setIsOpen6(!isOpen6)} style={{ cursor: 'pointer', fontWeight: 'bold', paddingLeft: '2%' }}>
                        <i className="fa-solid fa-play"></i> Practical Learning with Projects
                      </h6>
                      {isOpen6 && (
                        <div className="accordion-body" style={{ padding: '2%' }}>
                          <p>Gain hands-on experience with live projects integrated into every certification program, ensuring practical application of your newly acquired skills.</p>
                        </div>
                      )}
                    </div>
                    <div className="accordion-item" style={{ padding: '2%' }}>
                      <h6 className="accordion-header" onClick={() => setIsOpen7(!isOpen7)} style={{ cursor: 'pointer', fontWeight: 'bold', paddingLeft: '2%' }}>
                        <i className="fa-solid fa-play"></i>Industry recognized certification
                      </h6>
                      {isOpen7 && (
                        <div className="accordion-body" style={{ padding: '2%' }}>
                          <p>Successfully pass the exam to attain a recognized certification and further showcase your skills through participation in HackerRank certifications.</p>
                        </div>
                      )}
                    </div>
                    <div className="accordion-item" style={{ padding: '2%' }}>
                      <h6 className="accordion-header" onClick={() => setIsOpen8(!isOpen8)} style={{ cursor: 'pointer', fontWeight: 'bold', paddingLeft: '2%' }}>
                        <i className="fa-solid fa-play"></i> Updated and Comprehensive Course Curriculum
                      </h6>
                      {isOpen8 && (
                        <div className="accordion-body" style={{ padding: '2%' }}>
                          <p>Stay ahead with our updated and comprehensive course curriculum, ensuring you learn the latest industry-relevant skills for a successful career.</p>
                        </div>
                      )}
                    </div>
                  </div>



                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section>
        <Team />
      </section>
      
      <section className="sec5" style={{ backgroundColor: "#f4f4f4", marginTop: "0%" }}>
        <h1 style={{ textAlign: "center", fontSize: "35px", fontWeight: "bold", paddingTop: "5%" }}>Our training <span className='span4'>Campuses</span></h1>
        <center>
          <img src="https://codegnan.com/wp-content/uploads/2023/05/heading-separator.png" alt="Heading" />

        </center>
        <div className='container' style={{marginTop:"1%"}}>
          <div className='row'>
            <div className='col-md-4'>
              <div className="card" style={{ width: "25rem" }}>
                <div className="card-body" style={{ display: "flex", flexDirection: "column" }}>
                  <h6 className="card-subtitle mb-2 text-muted" style={{ marginLeft: "-40%" }}><i className="fa-solid fa-phone"></i> Call: +91 9888748888</h6><br />
                  <h5 className="card-title" style={{ marginTop: "-4%", marginLeft: "-12%" }}>Vijayawada training<span className='span4'> center</span></h5>
                  <p className="card-text">40-5-19/16, Prasad Naidu Complex<br />, P.B.Siddhartha Busstop, Moghalrajpuram<br />, Vijayawada, Andhra Pradesh, 520010.</p><br />
                  <p style={{ marginLeft: "-28%" }}>Visit Our <span className='span3' style={{ fontWeight: "bold" }}>Vijayawada Campus</span></p>
                </div>
              </div>
            </div>
            <div className='col-md-4'>
              <div className="card" style={{ width: "25rem" }}>
                <div className="card-body" style={{ display: "flex", flexDirection: "column" }}>
                  <h6 className="card-subtitle mb-2 text-muted" style={{ marginLeft: "-40%" }}><i className="fa-solid fa-phone"></i> Call: +91 9888748888</h6><br />
                  <h5 className="card-title" style={{ marginTop: "-4%", marginLeft: "-12%" }}>Hyderabad training<span className='span4'> center</span></h5>
                  <p className="card-text">Kothwal Madhava Reddy Plaza, Near JNTUH<br />Metro Station, Nizampet X Roads<br />Hyderabad, 500072</p><br />
                  <p style={{ marginLeft: "-28%" }}>Visit Our <span className='span3' style={{ fontWeight: "bold" }}>Hyderabad Campus</span></p>
                </div>
              </div>
            </div>
            <div className='col-md-4'>
              <div className="card" style={{ width: "25rem", height: "92%" }}>
                <div className="card-body" style={{ display: "flex", flexDirection: "column" }}>
                  <h6 className="card-subtitle mb-2 text-muted" style={{ marginLeft: "-40%" }}><i className="fa-solid fa-phone"></i> Call: +91 9888748888</h6><br />
                  <h5 className="card-title" style={{ marginTop: "-4%", marginLeft: "-12%" }}>Bengaluru training<span className='span4'> center</span></h5>
                  <p className="card-text">#951, 16th Main, BTM 2nd Stage, Bengaluru,<br />Karnataka, 560076</p><br />
                  <p style={{ marginLeft: "-28%" }}>Visit Our <span className='span3' style={{ fontWeight: "bold" }}>Bengaluru Campus</span></p>
                </div>
              </div>
            </div>
          </div>
        </div>



      </section>
      <section className='sec6'>
        <div className='container'>
          <div className='row'>
            <div className='col-12'>
              <div class="card" style={{ backgroundColor: "#104c44", height: "300px", marginTop: "5%" }}>
                <div class="card-body">
                  <div className="row">
                    <div className="col-12">
                      <h1 style={{ color: "white", fontSize: "35px", fontWeight: "bold" }}>Still have questions regarding questions ?</h1>
                    </div>
                    <div className="col-12">
                      <p style={{ marginTop: "3%", fontSize: "22px" }} className='para7'>Talk to our team and get support in identifying the right tech career course for you. Our team will answer your questions regarding courses, fees, batch details, and all.</p>
                    </div>
                    <div className='col-12'>
                      <button className='btn2' style={{ width: "15%", padding: "1%" }}>📞 Call Us</button>
                    </div>
                  </div>
                </div>

              </div>
            </div>
          </div>
        </div>
      </section>
      <section className='sec4'>
        <div className='container'>
          <div className='row'>
            <div className='col-12 col-md-6'>
              <p className='pfour'>TESTMONIALS</p>
              <h2 className='st'>What Our Students<br />
                Have To Say</h2>
              <img src="https://codegnan.com/wp-content/uploads/2023/05/heading-separator.png" className='headimg' />
              <p className='pfive'>Witnessing our students light up with a radiant smile<br /> after acquiring newfound knowledge brings us<br /> immense joy. Each of these responses fills out hearts<br />  with gratitude and fuels our passion and purpose.<br />

                Testimonial
                Flexible Timings, friendly </p>

            </div>
            <div className='col-12 col-md-6'><img src="https://res.cloudinary.com/du3lrtrux/image/upload/v1715431353/Codegnan_eu6mes.png" style={{ width: "100%" }} /></div>
          </div>
          <div className="row">
            <div className='col-12 text-center'>
              <h5 >Discover the Codgnan Experience: Hear from Students.</h5>
            </div>
            <div className="col-12 text-center">
              <iframe width="630" height="365" src="https://www.youtube.com/embed/ox9FspCBF_k?si=b-PMn5qA74HuLul6" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen style={{ border: "none", borderRadius: "0px 60px", marginLeft: "-2%" }}></iframe>
            </div>
          </div>
          <div class="row">

            <h6 className='head4'>CODEGNAN LEARNERS SUCCESS</h6>
            <p class="pt-5 pone"><span className='vij'>1250+ Companies Have Hired</span> Codegnan Learners</p>
            <img src="https://codegnan.com/wp-content/uploads/2023/05/heading-separator.png" className='img1' style={{ width: "20%" }} />
            <div>
              <CardSlider cards={cards} />
            </div>
          </div>
        </div>
      </section>
      <section className='foot'>
        <div className='container'>
          <div className='row'>
            <div className='col-12 col-md-7'>
              <a href='https://codegnan.com/'><img src='https://codegnan.com/wp-content/uploads/2024/02/Codegnan%E2%87%94Destination-footer.png' className='imglogo' /></a>
              <p className='para1'>With over two decades, we are bringing international teaching standards to the tech<br /> aspirants globally. Nurture your inner coder with us and take a charge of your coding<br /> career with the top trending and high paying technologies. This is the right time to<br /> enlighten your code “GNAN”.</p><br />
              <h6 className='heading1'>OUR BRANCHES</h6>
              <p className='para2'>Vijayawada</p>
              <p className='para3'>40-5-19/16, Prasad Naidu Complex, P.B.Siddhartha Busstop<br />Moghalrajpuram, Vijayawada, Andhra Pradesh, 520010</p>
              <p className='para2'>Hyderabad</p>
              <p className='para3'>Kothwal Madhava Reddy Plaza, Beside Indian Oil Petrol Bunk, JNTUH Metro Station<br />Nizampet X Roads, Hyderabad, 500072.</p>
              <p className='para2'>Bengaluru</p>
              <p className='para3'>#951, 16th Main, BTM 2nd Stage, Bengaluru, Karnataka, 560076.</p>


            </div>
            <div className='col-12 col-md-5'>
              <h6 className='heading2' >COMPANY</h6>
              <a href='https://codegnan.com/blogs/' className='link'><p>Blog</p></a>
              <a href='https://codegnan.com/about-us/' className='link'><p>About Us</p></a>
              <a href='https://codegnan.com/internships/' className='link'><p>Internships</p></a>
              <a href='https://codegnan.com/placement/' className='link'><p>Placements</p></a>
              <a href='https://codegnan.com/apply-as-mentor/' className='link'><p>Become a Mentor</p></a>
              <a href='https://codegnan.com/job-accelerator-program/' className='link'><p>Job Accelaration Program</p></a>
              <a href='https://linkedin.com/company/codegnan' className='alink' target='_blank'><i class="fa-brands fa-linkedin-in"></i></a>
              <a href='https://www.youtube.com/@Codegnan' className='alink'  target='_blank'><i class="fa-brands fa-youtube"></i></a>
              <a href='https://www.facebook.com/codegnan/' className='alink'  target='_blank'><i class="fa-brands fa-facebook"></i></a>
              <a href='https://twitter.com/codegnandotcom' className='alink'  target='_blank'><i class="fa-brands fa-square-x-twitter"></i></a>
              <a href='https://www.instagram.com/codegnan/?hl=en'className='alink'  target='_blank'><i class="fa-brands fa-instagram"></i></a>
              <a href='https://api.whatsapp.com/send?phone=916301341478&text=&source=&data=&app_absent='className='alink'  target='_blank'><i class="fa-brands fa-whatsapp"></i></a>
              <a href='https://api.whatsapp.com/send?phone=916301341478&text=&source=&data=&app_absent='className='alink'  target='_blank'><i class="fa-brands fa-telegram"></i></a>

            </div>

          </div>
        </div>
        <div className='container foot1'>
          <div className='row'>
            <div className='col-12 col-md-4'>
              <p className='graph'>Our courses in Vijayawada</p>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
export default Home;