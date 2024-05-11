import React from 'react';
import './Home.css';
import code from './Codegnan.png';

import CardSlider from './car/CardSlider';
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
const Placement= () => {

  return (
    <>

      <section style={{marginTop:"-5%"}}>
        <div className="container">
          <div className="row">
            <div className="col-md-7">
              <h1 id='head1'><span>Codegnan Vijayawada -</span>Python, Full stack Java, <br />Software Testing & Data science training<br /> institute</h1>
              <p id='pone'>Codegnan’s IT training centre in Vijayawada offers top-rated IT and<br /> technical skills training courses such as data science, Python Java (full-<br />stack), C, React JS, Software testing and more in Vijayawada. Our tech<br /> training program includes placement assistance with the <a href='https://codegnan.com/job-accelerator-program/'>Job<br /> Accelaration Program</a> (JAP) in Vijayawada.</p><br />
              <p><i className="fa-regular fa-comment-dots" style={{ fontSize: "20px" }}></i> English <span style={{ fontSize: "60px", color: "grey" }}>|</span> (2,198 Rating) <i className="fa-solid fa-star"></i><i className="fa-solid fa-star"></i><i className="fa-solid fa-star"></i><i className="fa-solid fa-star"></i><i className="fa-solid fa-star"></i></p>
              <button type="submit" className="btn1 btn-primary">Limited Time Offer.Enroll Your Name <i className="fa-solid fa-arrow-right"></i></button>
            </div>
            <div className="col-md-5">
              <section id="sec1">
                <form id="myForm">
                  <h3>Enquiry Form</h3>
                  <input type="text" className="form-control" id="inputEmail4" placeholder="Full Name*" required />
                  <input type="text" className="form-control" id="inputMobile" placeholder="Mobile*" required />
                  <input type="email" className="form-control" id="inputEmail" placeholder="Email*" required />
                  <select id="inputState" className="form-select">
                    <option selected>Student</option>
                    <option>Job Seeker</option>
                    <option>Working Professional</option>
                  </select>
                  <select id="inputTime" className="form-select">
                    <option selected>Morning</option>
                    <option>Afternoon</option>
                    <option>Evening</option>
                    <option>I'd like to have more details, before I decide</option>
                  </select>
                  <select id="inputCourse" className="form-select">
                    <option selected>Java</option>
                    <option>Python</option>
                    <option>Data Science</option>
                    <option>React JS</option>
                    <option>Machine Learning</option>
                    <option>C Programming</option>
                    <option>Data Structures and Algorithms</option>
                    <option>Testing</option>
                  </select>
                  <button type="submit" className="btn btn-primary">Submit</button>
                </form>
              </section>
            </div>
          </div>
        </div>
      </section>
      <section class="container box">
        <div className="col-12 text-center">
          <h1 class="pt-5 head2"><span className='vij'>Visit codegnan’s Vijayawada</span> training center</h1>
          <img src="https://codegnan.com/wp-content/uploads/2023/05/heading-separator.png" />
        </div>
        <div className="container" style={{ marginTop: "1%" }}>

          <div className="row">


            <div className="col-md-6">
              <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3825.402621398015!2d80.6446607746087!3d16.505759227604962!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3a35fb51a430ffad%3A0xe6ed5ede725b304b!2sCodegnan%20IT%20Solutions%3A%20Your%20Best%20Training%20Institute%20for%20Software%20Courses!5e0!3m2!1sen!2sin!4v1715246533499!5m2!1sen!2sin" width="530" height="420" allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>
            </div>
            <div className="card ca" style={{ width: "38rem", marginLeft: "-1%" }}>
              <div className="card-body">
                <h5 className="card-title" style={{ marginTop: "-4%" }}>Codegnan Details</h5>
                <h6 className="card-subtitle mb-2 text-muted">Card subtitle</h6>
                <p className="card-text"><i class="fa-solid fa-envelope"></i> Quick Contact</p>
                <p className="card-text1">info@codegnan.com</p>
                <p className='card-text'><i class="fa-solid fa-phone"></i> Phone Number</p>
                <p className="card-text1">+91 9888758888</p>
                <p className='card-text'><i class="fa-solid fa-location-dot"></i> Our Location</p>
                <p className="card-text2">Busstop, PB Siddhartha College Gym, College of Arts and<br /> Science, H.No 40-5-19/16, Prasad Naidu Complex,<br /> Moghalrajpuram, Vijayawada, Andhra Pradesh, 520010</p>

              </div>
            </div>
          </div>
        </div>
      </section>
      <section>
        <div className="head-part">
          <h1><span className="main-heading">Our IT training programs</span> <span className="bold">in Vijayawada</span></h1>
          <img src="https://codegnan.com/wp-content/uploads/2023/05/heading-separator.png" alt="png" />
        </div>

        <div className="main">
          <div className="caption-section">
            <p>
              <span className="caption">Our expert trainers offer tech courses and skill development programs
                that will help you get your first high-paying jobs. Check out our training programs in Vijayawada.</span>
            </p>
          </div>

          <div className="row">
            {/* Python */}
            <div class="col-md-6" style={{ marginBottom: "20px" }}>
              <div className="card" style={{ width: "30rem" }}>
                {/* Python card content */}
                <div className="card-body">
                  <h2 className="card-title heading">1. Python course training in Vijayawada</h2>
                  <p className="card-title"><span className="sub-heading">Course duration:</span>1 month</p>
                  <p className="card-title"><span className="sub-heading">Course fees: </span>₹10,000</p>
                  <p className="card-text">Our 300-hour program, available both online and offline, ensures a strong foundation with Python basics, data handling, web development, and more. Gain real-world experience through projects like Dynamic Website Scraping and Automated Email Sending.</p>
                  <p className="card-text">  Get career benefits with a broad scope, 1-on-1 mentorship, and a Microsoft certification. Suitable for freshers, final-year students, and enthusiasts.</p>
                  <a href="https://codegnan.com/python-training-in-vijayawada/" className="card-link">
                    👉 Enroll in Python classroom training in Vijayawada
                  </a>
                </div>
              </div>
            </div>

            {/* Java */}
            <div class="col-md-6" style={{ marginBottom: "20px" }}>
              <div className="card" style={{ width: "30rem" }}>
                {/* Java card content */}
                <div className="card-body">
                  <h2 className="card-title heading">2. Java full stack course training in Vijayawada</h2>
                  <p className="card-title"><span className="sub-heading">Course duration:</span>  100 days</p>
                  <p className="card-title"><span className="sub-heading">Course fees:</span>  ₹50,000</p>
                  <p className="card-text">Start your journey as a full stack java developer with codegnan's Training in Vijayawada. Led by experts with 8+ years of experience, the 3-4 month course covers front-end, back-end, and middleware using Java. Gain 1-on-1 mentorship, technical skills, and job assurance. Java developers earn 3-6 LPA, making it a smart career choice.</p>
                  <p className="card-text">Tools include Oracle, SQL, Angular JS, and more. Projects include Hospital Management and Online Banking. Ideal for final year students, fresh graduates, and IT professionals. Get certified and join a global network of successful Java developers.</p>
                  <a href="https://codegnan.com/full-stack-java-training-course-in-vijayawada/" className="card-link">
                    👉 Enroll in Java classroom training in Vijayawada
                  </a>
                </div>
              </div>
            </div>


            <div className="row">
              {/* Machine Learning */}
              <div class="col-md-6" style={{ marginBottom: "20px" }}>
                <div className="card" style={{ width: "30rem" }}>
                  {/* Machine Learning card content */}
                  <div className="card-body">
                    <h2 className="card-title heading">3. Machine learning course training in Vijayawada</h2>
                    <p className="card-title"><span className="sub-heading">Course duration:</span>  1 month</p>
                    <p className="card-title"><span className="sub-heading">Course fees:</span>  ₹10,000</p>
                    <p className="card-text">As a leading IT training institute, we have a proven track record with 1.2k+ students successfully placed and trusted by 4k+ students across India. Our 60-hour certification covers machine learning algorithms, Python, and real-time projects, equipping you to build, evaluate, and deploy ML models in corporate settings.</p>
                    <a href="https://codegnan.com/machine-learning-training-in-vijayawada/" className="card-link">
                      👉 Enroll in machine learning course in Vijayawada
                    </a>
                  </div>
                </div>
              </div>

              {/* Data Science */}
              <div class="col-md-6" style={{ marginBottom: "20px" }}>
                <div className="card" style={{ width: "30rem" }}>
                  {/* Data Science card content */}
                  <div className="card-body">
                    <h2 className="card-title heading">4. Data science training in Vijayawada</h2>
                    <p className="card-title"><span className="sub-heading">Course duration:</span>  6 months</p>
                    <p className="card-title"><span className="sub-heading">Course fees:</span>  ₹75,000</p>
                    <p className="card-text">Designed for beginners, this six-month program covers the essentials of data science, including Python, data analytics, machine learning, and NLP projects. Led by experienced ex-IITian instructors, the course offers offline training in Vijayawada, Hyderabad, and Bangalore, as well as online training across India. The curriculum spans from Python basics to advanced topics, ensuring you are well-equipped for a high-paying job in the thriving field of data science.</p>
                    <a href="https://codegnan.com/data-science-course-training-in-vijayawada/" className="card-link">
                      👉 Enroll in data science classroom training in Vijayawada.
                    </a>
                  </div>
                </div>
              </div>
            </div>

            <div className="row">
              {/* React JS */}
              <div class="col-md-6" style={{ marginBottom: "20px" }}>
                <div className="card" style={{ width: "30rem" }}>
                  {/* React JS card content */}
                  <div className="card-body">
                    <h2 className="card-title heading">5. React JS course training in Vijayawada</h2>
                    <p className="card-title"><span className="sub-heading">Course duration:</span>  1 month</p>
                    <p className="card-title"><span className="sub-heading">Course fees:</span>  ₹10,000</p>
                    <p className="card-text">Start your journey to becoming a skilled React JS developer with Codegnan's comprehensive React JS Training in Vijayawada. Designed for learners aspiring to design complex components, this course covers everything from basic concepts to advanced topics.</p>
                    <p className="card-text">Benefit from flexible schedules, lifetime access, and placement assistance. The course includes a Microsoft certification, live projects, and a job assurance program. Explore demanding careers like web development, UI/UX design, and full-stack development. Start your React JS career in Vijayawada with Codegnan's expert mentorship and hands-on learning.</p>
                    <a href="https://codegnan.com/react-js-training-course-in-vijayawada/" className="card-link">
                      👉 Enroll in React JS training classes in Vijayawada
                    </a>
                  </div>
                </div>
              </div>

              {/* C Programming */}
              <div class="col-md-6" style={{ marginBottom: "20px" }}>
                <div className="card" style={{ width: "30rem" }}>
                  {/* C Programming card content */}
                  <div className="card-body">
                    <h2 className="card-title heading">6. C programming course training in Vijayawada</h2>
                    <p className="card-title"><span className="sub-heading">Course duration:</span>  1 month</p>
                    <p className="card-title"><span className="sub-heading">Course fees:</span>  ₹5,000</p>
                    <p className="card-text">Kickstart your coding journey in Vijayawada with Codegnan's C Programming Language Course. Perfect for beginners, this course offers flexibility with both offline and online classes. Learn from industry experts, work on live projects, and receive placement assistance. </p>
                    <p className="card-text">Enhance your problem-solving skills, work on a live banking management project, and earn an authorized certification. </p>
                    <a href="https://codegnan.com/c-programming-course-training-in-vijayawada/" className="card-link">
                      👉 Enroll in C programming course in Vijayawada
                    </a>
                  </div>
                </div>
              </div>
            </div>

            <div className="row">
              {/* Data Structures and Algorithms */}
              <div class="col-md-6" style={{ marginBottom: "20px" }}>
                <div className="card" style={{ width: "30rem" }}>
                  {/* Data Structures and Algorithms card content */}
                  <div className="card-body">
                    <h2 className="card-title heading">7. Data structures and algorithms training in Vijayawada</h2>
                    <p className="card-title"><span className="sub-heading">Course duration:</span>  3 months</p>
                    <p className="card-title"><span className="sub-heading">Course fees:</span>  ₹30,000</p>
                    <p className="card-text">Whether you're a computer science student, developer, or college fresher, our 3-month program covers everything from basic concepts to advanced topics like dynamic programming and graph theory. </p>
                    <p className="card-text">Learn from experienced mentors, work on live projects, and enhance your career opportunities. Gain practical skills for real-world problem-solving and receive certification for your achievements. </p>
                    <a href="https://codegnan.com/data-structures-and-algorithms-training-in-vijayawada/" className="card-link">
                      👉 Enroll in data structures and algorithms classes in Vijayawada
                    </a>
                  </div>
                </div>
              </div>

              {/* Software Testing */}
              <div class="col-md-6" style={{ marginBottom: "20px" }}>
                <div className="card" style={{ width: "30rem" }}>
                  {/* Software Testing card content */}
                  <div className="card-body">
                    <h2 className="card-title heading">8. Software testing training in Vijayawada</h2>
                    <p className="card-title"><span className="sub-heading">Course duration:</span>  100 days</p>
                    <p className="card-title"><span className="sub-heading">Course fees:</span> ₹50,000</p>
                    <p className="card-text">Take your career to the next level with our software testing training course in Vijayawada. Get in-depth knowledge on manual testing, Selenium, Java, HTML, and CSS through 100 days of instruction by experts. </p>
                    <p className="card-text">Work on live projects with mentorship. The beginner-friendly syllabus leads to an authorized certification. Enjoy flexible scheduling, lifetime access, 24/7 support and 100% job assistance. </p>
                    <a href="https://codegnan.com/software-testing-training-course-in-vijayawada/" className="card-link">
                      👉 Enroll in software training classes in Vijayawada
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section >
      <section className='sec2'>
        <div className='container'>
          <div className='row'>
            <div className='col-12'>
              <h6 className='head4'>CODEGNAN LEARNERS SUCCESS</h6>
              <p class="pt-5 pone"><span className='vij'>1250+ Companies Have Hired</span> Codegnan Learners</p>
              <img src="https://codegnan.com/wp-content/uploads/2023/05/heading-separator.png" className='img1' />
              <p className='ptwo'>To ensure providing the best IT classes and training programs codegnan have mentors and trainers from the alumni<br />of world’s tech companies and universities such as IIT Delhi, Stanford University IIT Bombay, Google, Amazon, Microsoft<br />and many more.. </p>
            </div>
          </div>
          <div className='row'>
            <CardSlider cards={cards} />
          </div>
          <p class="pt-5 pone"><span className='vij'>Start your tech career</span> in Vijayawada</p>
          <img src="https://codegnan.com/wp-content/uploads/2023/05/heading-separator.png" className='img1' />
          <p className='pthree'>Embark on a dynamic tech journey in Vijayawada, where opportunities flourish for college<br />students and IT professionals alike.<br /><br />
            Codegnan offers specialized training programs to prepare you for success in the tech field.<br />Learn from industry experts, gain hands-on experience, and position yourself for opportunities<br />with the leading names in tech. Join our Vijayawada training centre, where top-tier<br />companies hire, and start your tech career with confidence. </p>
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
            <div className='col-12 col-md-6'><img src={code} style={{ width: "100%" }} /></div>
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

export default Placement;
