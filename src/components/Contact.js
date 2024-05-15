import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPhone, faEnvelope,faMapMarkerAlt } from '@fortawesome/free-solid-svg-icons';
// import "./Contact.css";
import './Home.css'
const Contact = () => {
  return (
    <>
    <style>
      {
        `
        `
      }
    </style>
<section style={{ padding: '20px 0' }}>
    <div style={{ maxWidth: '1200px', margin: '0 auto', padding: '0 15px' }}>
      <div style={{ display: 'flex', flexWrap: 'wrap', margin: '0 -15px' }}>
        <div style={{
          flex: '1 1 50%',
          padding: '15px',
          display: 'flex',
          justifyContent: 'center',
          flexDirection: 'column',
          paddingLeft: '20px',
          paddingRight: '20px'
        }}>
          <h2 style={{
            color: '#1AB69D',
            fontSize: '33px',
            fontWeight: 'bold',
            textAlign: 'left',
            marginBottom: '10px'
          }}>
            Get In Touch <span style={{ color: 'black' }}>with our experts</span>
          </h2>
          <p style={{ marginBottom: '20px', textAlign: 'left' }}>
            Get in touch with us using the enquiry form or contact details below.
          </p>
          <input type='text' name='name' placeholder='Full Name' style={{
            marginBottom: '10px',
            width: '100%',
            padding: '15px',
            border: '1px solid #ccc',
            borderRadius: '5px'
          }} />
          <input type='text' name='email' placeholder='Email' style={{
            marginBottom: '10px',
            width: '100%',
            padding: '15px',
            border: '1px solid #ccc',
            borderRadius: '5px'
          }} />
          <div style={{
            display: 'flex',
            marginBottom: '10px'
          }}>
            <select style={{
              flex: '1 0 20%',
              marginRight: '10px',
              padding: '15px',
              border: '1px solid #ccc',
              borderRadius: '5px'
            }}>
              <option value="+91">🇮🇳 +91</option>
            </select>
            <input type='text' name='phone' placeholder='+91' style={{
              flex: '1 0 80%',
              padding: '15px',
              border: '1px solid #ccc',
              borderRadius: '5px'
            }} />
          </div>
          <input type='text' name='address' placeholder='Address' style={{
            marginBottom: '10px',
            width: '100%',
            padding: '15px',
            border: '1px solid #ccc',
            borderRadius: '5px'
          }} />
          <textarea name='message' placeholder='Message' style={{
            marginBottom: '10px',
            width: '100%',
            padding: '15px',
            border: '1px solid #ccc',
            borderRadius: '5px'
          }}></textarea>
          <button style={{
            width: '100%',
            padding: '15px',
            backgroundColor: '#1AB69D',
            color: '#fff',
            border: 'none',
            borderRadius: '5px',
            fontSize: '16px',
            fontWeight: 'bold'
          }}>Submit</button>
        </div>

        <div style={{
          flex: '1 1 50%',
          padding: '15px',
          display: 'flex',
          justifyContent: 'center',
          flexDirection: 'column',
          paddingLeft: '20px',
          paddingRight: '20px',
          marginTop: '30px',
          marginBottom: '30px'
        }}>
          <div style={{
            width: '100%',
            padding: '20px',
            borderRadius: '8px',
            boxShadow: '0 4px 8px rgba(0, 0, 0, 0.1)',
            backgroundColor: '#fff'
          }}>
            <h4 style={{
              color: '#1AB69D',
              fontSize: '24px',
              fontWeight: 'bold',
              textAlign: 'left',
              marginBottom: '10px'
            }}>Have Any Questions? Our Team</h4>
            <h4 style={{
              color: '#1AB69D',
              textAlign: 'left',
              fontWeight: 'bold',
              fontSize: '24px',
              marginBottom: '20px'
            }}>Will Get In Touch With You!</h4>
            <p style={{
              textAlign: 'left',
              fontSize: '18px',
              marginBottom: '10px',
              display: 'flex',
              alignItems: 'center'
            }}>
              <FontAwesomeIcon icon={faPhone} style={{ marginRight: '10px' }} /> Phone Number
            </p>
            <p style={{
              textAlign: 'left',
              fontSize: '18px',
              marginBottom: '20px',
              color: '#cc3366'
            }}>+91 6301 341478</p>
            <p style={{
              textAlign: 'left',
              fontSize: '18px',
              marginBottom: '10px',
              display: 'flex',
              alignItems: 'center'
            }}>
              <FontAwesomeIcon icon={faEnvelope} style={{ marginRight: '10px' }} /> Quick Contact
            </p>
            <p style={{
              textAlign: 'left',
              fontSize: '18px',
              color: '#cc3366'
            }}>info@codegnan.com</p>
          </div>
        </div>
      </div>
    </div> 
  </section>


      <center><h3 style={{ color: '#1AB69D', marginTop: '10%',fontSize:"40px",fontWeight:"bold" }}>Our location</h3></center>

      <section style={{ padding: '20px 0', backgroundColor: '#f9f9f9' }}>
    <div style={{ maxWidth: '1200px', margin: '0 auto', padding: '0 15px' }}>
      <div style={{
        display: 'flex',
        flexWrap: 'wrap',
        justifyContent: 'space-between'
      }}>
        <div style={{
          flex: '1 1 30%',
          margin: '15px',
          padding: '20px',
          borderRadius: '8px',
          boxShadow: '0 4px 8px rgba(0, 0, 0, 0.1)',
          backgroundColor: '#fff',
          textAlign: 'center'
        }}>
          <h4 style={{
            color: '#1AB69D',
            fontSize: '24px',
            fontWeight: 'bold',
            marginBottom: '20px'
          }}>Bengaluru</h4>
          <p style={{ fontSize: '18px', marginBottom: '10px' }}>
            <FontAwesomeIcon icon={faPhone} style={{ marginRight: '10px' }} /> Phone Number
          </p>
          <p style={{ fontSize: '18px', color: '#cc3366', marginBottom: '20px' }}>+91 98887 48888</p>
          <p style={{ fontSize: '18px', marginBottom: '10px' }}>
            <FontAwesomeIcon icon={faEnvelope} style={{ marginRight: '10px' }} /> Quick Contact
          </p>
          <p style={{ fontSize: '18px', color: '#cc3366', marginBottom: '20px' }}>info@codegnan.com</p>
          <p style={{ fontSize: '18px', marginBottom: '10px', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
            <FontAwesomeIcon icon={faMapMarkerAlt} style={{ marginRight: '10px' }} /> Bengaluru
          </p>
          <p style={{ fontSize: '18px', marginBottom: '20px',color:'grey' }}>#951, 16th Main, BTM 2nd Stage, Bengaluru, Karnataka - 560076.</p>
          <div style={{ width: '300px', height: '300px', display: 'flex', justifyContent: 'center' }}>
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d124445.04469194487!2d77.610212!3d12.913657!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bae14fd049571b5%3A0xd3fa32bf2babcb54!2sDestination%20Technologies!5e0!3m2!1sen!2sin!4v1715408580547!5m2!1sen!2sin"
              width="100%"
              height="100%"
              style={{ border: '0' }}
              allowFullScreen=""
              loading="lazy"
              title="Hyderabad Location"
            ></iframe>
          </div>
        </div>
        <div style={{
          flex: '1 1 30%',
          margin: '15px',
          padding: '20px',
          borderRadius: '8px',
          boxShadow: '0 4px 8px rgba(0, 0, 0, 0.1)',
          backgroundColor: '#fff',
          textAlign: 'center'
        }}>
          <h4 style={{
            color: '#1AB69D',
            fontSize: '24px',
            fontWeight: 'bold',
            marginBottom: '20px'
          }}>Hyderabad</h4>
          <p style={{ fontSize: '18px', marginBottom: '10px' }}>
            <FontAwesomeIcon icon={faPhone} style={{ marginRight: '10px' }} /> Phone Number
          </p>
          <p style={{ fontSize: '18px', color: '#cc3366', marginBottom: '20px' }}>+91 98887 48888</p>
          <p style={{ fontSize: '18px', marginBottom: '10px' }}>
            <FontAwesomeIcon icon={faEnvelope} style={{ marginRight: '10px' }} /> Quick Contact
          </p>
          <p style={{ fontSize: '18px', color: '#cc3366', marginBottom: '20px' }}>info@codegnan.com</p>
          <p style={{ fontSize: '18px', marginBottom: '10px', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
            <FontAwesomeIcon icon={faMapMarkerAlt} style={{ marginRight: '10px' }} /> Hyderabad
          </p>
          <p style={{ fontSize: '18px', marginBottom: '20px',color:"grey" }}>Kotwal Madhava Reddy Plaza, Beside Indian Oil Petrol Bunk, JNTUH Metro Station, Nizampet X Roads, Hyderabad - 500072.</p>
          <div style={{ width: '300px', height: '300px', display: 'flex', justifyContent: 'center' }}>
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d7610.382525031249!2d78.388451!3d17.498381!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bcb91959592aba9%3A0x6bba1d480cb50bad!2sCodegnan%20Hyderabad%20-%20Python%2C%20Java%2C%20Data%20science%2C%20Machine%20learning%2C%20React%20JS%20training%20institute!5e0!3m2!1sen!2sin!4v1715409965476!5m2!1sen!2sin"
              width="100%"
              height="100%"
              style={{ border: '0' }}
              allowFullScreen=""
              loading="lazy"
              title="Hyderabad Location"
            ></iframe>
          </div>
        </div>

        <div style={{
          flex: '1 1 30%',
          margin: '15px',
          padding: '20px',
          borderRadius: '8px',
          boxShadow: '0 4px 8px rgba(0, 0, 0, 0.1)',
          backgroundColor: '#fff',
          textAlign: 'center'
        }}>
          <h4 style={{
            color: '#1AB69D',
            fontSize: '24px',
            fontWeight: 'bold',
            marginBottom: '20px'
          }}>Vijayawada</h4>
          <p style={{ fontSize: '18px', marginBottom: '10px' }}>
            <FontAwesomeIcon icon={faPhone} style={{ marginRight: '10px' }} /> Phone Number
          </p>
          <p style={{ fontSize: '18px', color: '#cc3366', marginBottom: '20px' }}>+91 98887 58888</p>
          <p style={{ fontSize: '18px', marginBottom: '10px' }}>
            <FontAwesomeIcon icon={faEnvelope} style={{ marginRight: '10px' }} /> Quick Contact
          </p>
          <p style={{ fontSize: '18px', color: '#cc3366', marginBottom: '20px' }}>info@codegnan.com</p>
          <p style={{ fontSize: '18px', marginBottom: '10px', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
            <FontAwesomeIcon icon={faMapMarkerAlt} style={{ marginRight: '10px' }} /> Vijayawada
          </p>
          <p style={{ fontSize: '18px', marginBottom: '20px',color:"grey" }}>40-5-19/16, Prasad Naidu Complex, P.B.Siddhartha Busstop, Moghalrajpuram, Vijayawada, Andhra Pradesh 520010.</p>
          <div style={{ width: '300px', height: '300px', display: 'flex', justifyContent: 'center' }}>
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d30603.22179857803!2d80.647236!3d16.505754!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3a35fb51a430ffad%3A0xe6ed5ede725b304b!2sCodegnan%20IT%20Solutions%3A%20Your%20Best%20Training%20Institute%20for%20Software%20Courses!5e0!3m2!1sen!2sin!4v1715410391239!5m2!1sen!2sin"
              width="100%"
              height="100%"
              style={{ border: '0' }}
              allowFullScreen=""
              loading="lazy"
              title="Vijayawada Location"
            ></iframe>
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

export default Contact;
