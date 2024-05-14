import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEnvelope } from '@fortawesome/free-solid-svg-icons';
// import "./Contact.css";
import './Home.css'
const Contact = () => {
  return (
    <>
      <section>  
          <div className='container'>
            <div className='row'>
            <div className='col-12 col-md-6' style={{ paddingLeft: '20px', paddingRight: '20px', border: 'none', borderRadius: '5px', padding: '20px',marginTop:"-6%" }}>
  <h2 className="contact-title" style={{ color: '#1AB69D',fontSize:"33px",fontWeight:"bold"  }}>
    Get In Touch <span style={{color:"black"}}>with our experts</span>
  </h2>
  <p className="contact-description">
    Get in touch with us using the enquiry form or contact details below.
  </p>
  <input type='text' name='Address' placeholder='Full Name' className="input-field" style={{ marginBottom: '10px', width: '100%', padding: '15px', border: '0.5px solid #dfdada',borderRadius:"10px", boxShadow: '0 2px 4px rgba(0,0,0,0.1)' }} />
  <div style={{ display: 'flex', marginBottom: '10px' }}>
    <input type='text' name='name' placeholder=' +91 Phone Number' className="input-field" style={{ flex: 1, marginRight: '10px', padding: '15px', border: '0.5px solid #dfdada',borderRadius:"10px", boxShadow: '0 2px 4px rgba(0,0,0,0.1)' }} />
    <input type='text' name='email' placeholder='Email' className="input-field" style={{ flex: 1, padding: '15px',  border: '0.5px solid #dfdada',borderRadius:"10px",boxShadow: '0 2px 4px rgba(0,0,0,0.1)'}} />
  </div>
 
  <input type='text' name='Address' placeholder='Address' className="input-field" style={{ marginBottom: '10px', width: '100%', padding: '15px',boxShadow: '0 2px 4px rgba(0,0,0,0.1)',padding: '15px', border: '0.5px solid #dfdada',borderRadius:"10px" }} />
  <textarea name='Message' placeholder='Message' className="input-field" style={{ marginBottom: '10px', width: '100%', padding: '15px',boxShadow: '0 2px 4px rgba(0,0,0,0.1)', border: '0.5px solid #dfdada',borderRadius:"10px", boxShadow: '0 2px 4px rgba(0,0,0,0.1)' }}></textarea>
  <button className="submit-button" style={{ width: '100%', padding: '10px', backgroundColor: '#1AB69D', color: '#fff', border: '0.5px solid #dfdada',borderRadius:"10px",boxShadow: '0 2px 4px rgba(0,0,0,0.1)', border: 'none',borderRadius:"10px",padding:"3%" }}>Submit</button>
</div>


<div className='col-12 col-md-6' style={{ paddingLeft: '20px', paddingRight: '20px'}}>
  <div className="ab" style={{ width: "100%", maxWidth: "33em",paddingTop:"1%", borderRadius: "8px", boxShadow: "2px 3px 5px grey", paddingBottom: "5%" }}>
    <h4 style={{ color: '#1AB69D', marginTop: '15%', fontSize: "28px", fontWeight: "bold",textAlign: "left", marginLeft: "5%", marginBottom: "4%" }} className='head1'>Have Any Questions? Our Team</h4>
    <h4 style={{ color: '#1AB69D', textAlign: "left", marginLeft: "5%", marginBottom: "4%",fontWeight:"bold",fontSize:"28px" }} className='head2'>Will Get In Touch With You!</h4>
    <p className='custom1' style={{ textAlign: "left", marginLeft: "5%", marginBottom: "4%",fontWeight:"bold",fontSize:"18px" }}><i className="fa-solid fa-phone"></i> Phone Number</p>
    <p className='custom2' style={{ textAlign: "left", marginLeft: "5%", marginBottom: "4%",fontWeight:"bold",fontSize:"18px",color:"#cc3366" }}>+91 6301 341478</p>
    <p className='custom1' style={{ textAlign: "left", marginLeft: "5%", marginBottom: "4%",fontWeight:"bold",fontSize:"18px" }}><FontAwesomeIcon icon={faEnvelope} /> Quick Contact</p>
    <p className='custom2' style={{ textAlign: "left", marginLeft: "5%", marginBottom: "4%",fontWeight:"bold",fontSize:"18px" ,color:"#cc3366"}}>info@codegnan.com</p>
  </div>
</div>


            </div>
          </div>
        
      </section>
      <center><h3 style={{ color: '#1AB69D', marginTop: '10%',fontSize:"40px",fontWeight:"bold" }}>Our location</h3></center>

      <section className='section1' style={{marginLeft:'20px'}}>
        <div className='container'>
          <div className='row'>
            <div className='col-12 col-md-4'>
              <div className=" ex1" style={{ width: "20rem", margin: "0.5rem",boxShadow:"2px 3px 5px grey",borderRadius:"6px",marginLeft:"4px"}}>
                <div className="cb" style={{ padding: "30px" }}>
                  <center><h5 className="ct" style={{color: '#1AB69D'}}>Bengaluru</h5></center>
                  <p className="ct"><p className='custom1' style={{ textAlign: "left", marginLeft: "5%", marginBottom: "4%",fontWeight:"bold",fontSize:"18px" }}><i className="fa-solid fa-phone"></i> Phone Number</p>
    <p className='custom2' style={{ textAlign: "left", marginLeft: "5%", marginBottom: "4%",fontWeight:"bold",fontSize:"18px",color:"#cc3366" }}>+91 6301 341478</p>
    <p className='custom1' style={{ textAlign: "left", marginLeft: "5%", marginBottom: "4%",fontWeight:"bold",fontSize:"18px" }}><FontAwesomeIcon icon={faEnvelope} /> Quick Contact</p>
    <p className='custom2' style={{ textAlign: "left", marginLeft: "5%", marginBottom: "4%",fontWeight:"bold",fontSize:"18px" ,color:"#cc3366"}}>info@codegnan.com</p></p>
    <p className="ct"><p className='custom1' style={{ textAlign: "left", marginLeft: "5%", marginBottom: "4%",fontWeight:"bold",fontSize:"18px" }}><i class="fa-solid fa-location-dot"></i>&nbsp;&nbsp;<b>Bengaluru</b></p></p>
    <p style={{color:'grey'}}>#951, 16th Main, BTM 2nd Stage,<br/> Bengaluru, Karnataka -<br/> 560076.</p>
    <iframe src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d124445.04469194487!2d77.610212!3d12.913657!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bae14fd049571b5%3A0xd3fa32bf2babcb54!2sDestination%20Technologies!5e0!3m2!1sen!2sin!4v1715408580547!5m2!1sen!2sin" width="300" height="300" style={{border:"0",marginLeft:"-10%",borderRadius:"2px"}} allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>
                </div>
              </div>
            </div>
            <div className='col-12 col-md-4'>
            <div className=" ex1" style={{ width: "20rem", margin: "0.5rem",boxShadow:"2px 3px 5px grey",borderRadius:"6px" }}>
                <div className="cb" style={{ padding: "30px" }}>
                <center><h5 className="ct" style={{color: '#1AB69D'}}>Hyderabad</h5></center>
                  <p className="ct"><p className='custom1' style={{ textAlign: "left", marginLeft: "5%", marginBottom: "4%",fontWeight:"bold",fontSize:"18px" }}><i className="fa-solid fa-phone"></i> Phone Number</p>
    <p className='custom2' style={{ textAlign: "left", marginLeft: "5%", marginBottom: "4%",fontWeight:"bold",fontSize:"18px",color:"#cc3366" }}>+91 6301 341478</p>
    <p className='custom1' style={{ textAlign: "left", marginLeft: "5%", marginBottom: "4%",fontWeight:"bold",fontSize:"18px" }}><FontAwesomeIcon icon={faEnvelope} /> Quick Contact</p>
    <p className='custom2' style={{ textAlign: "left", marginLeft: "5%", marginBottom: "4%",fontWeight:"bold",fontSize:"18px" ,color:"#cc3366"}}>info@codegnan.com</p></p>
    <p className="ct"><p className='custom1' style={{ textAlign: "left", marginLeft: "5%", marginBottom: "4%",fontWeight:"bold",fontSize:"18px" }}><i class="fa-solid fa-location-dot"></i>&nbsp;&nbsp;<b>Hyderabad</b></p></p>
    <p style={{color:'grey'}}>Kothwal Madhava Reddy Plaza,<br/> Beside Indian Oil Petrol Bunk,<br/> JNTUH Metro Station, Nizampet X Roads,<br/> Hyderabad - 500072</p>
    <iframe src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d7610.382525031249!2d78.388451!3d17.498381!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bcb91959592aba9%3A0x6bba1d480cb50bad!2sCodegnan%20Hyderabad%20-%20Python%2C%20Java%2C%20Data%20science%2C%20Machine%20learning%2C%20React%20JS%20training%20institute!5e0!3m2!1sen!2sin!4v1715409965476!5m2!1sen!2sin" width="300" height="300" style={{border:"0",marginLeft:"-10%",borderRadius:"2px"}} allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>
                </div>
              </div>
            </div>
            <div className='col-12 col-md-4'>
            <div className=" ex1" style={{ width: "20rem", margin: "0.5rem",boxShadow:"2px 3px 5px grey",borderRadius:"6px" }}>
            <center><h5 className="ct" style={{color: '#1AB69D'}}>Vijayawada</h5></center>
                  <p className="ct"><p className='custom1' style={{ textAlign: "left", marginLeft: "5%", marginBottom: "4%",fontWeight:"bold",fontSize:"18px" }}><i className="fa-solid fa-phone"></i> Phone Number</p>
    <p className='custom2' style={{ textAlign: "left", marginLeft: "5%", marginBottom: "4%",fontWeight:"bold",fontSize:"18px",color:"#cc3366" }}>+91 6301 341478</p>
    <p className='custom1' style={{ textAlign: "left", marginLeft: "5%", marginBottom: "4%",fontWeight:"bold",fontSize:"18px" }}><FontAwesomeIcon icon={faEnvelope} /> Quick Contact</p>
    <p className='custom2' style={{ textAlign: "left", marginLeft: "5%", marginBottom: "4%",fontWeight:"bold",fontSize:"18px" ,color:"#cc3366"}}>info@codegnan.com</p></p>
    <p className="ct"><p className='custom1' style={{ textAlign: "left", marginLeft: "5%", marginBottom: "4%",fontWeight:"bold",fontSize:"18px" }}><i class="fa-solid fa-location-dot"></i>&nbsp;&nbsp;<b>vijayawada</b></p></p>
    <center><p style={{color:'grey'}}>40-5-19/16, Prasad Naidu<br/> Complex, P.B.Siddhartha<br/> Busstop, Moghalrajpuram<br/>, Vijayawada, Andhra Pradesh<br/> 520010</p></center>
    <iframe src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d30603.22179857803!2d80.647236!3d16.505754!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3a35fb51a430ffad%3A0xe6ed5ede725b304b!2sCodegnan%20IT%20Solutions%3A%20Your%20Best%20Training%20Institute%20for%20Software%20Courses!5e0!3m2!1sen!2sin!4v1715410391239!5m2!1sen!2sin" width="300" height="300" style={{border:"0",marginLeft:"2%",borderRadius:"2px"}} allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>
                </div>
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

            </div>

          </div>
        </div>
      </section>

    </>
  );
}

export default Contact;
