import React from 'react';
import mydp from './static/images/file.enc'
import { Link } from 'react-router-dom';

const About = () => {
  return (
    <section className="about-section">
      <div className="container">
        <div className="row">
          <div className="content-column col-lg-6 col-md-12 col-sm-12 order-2">
            <div className="inner-column">
              <div className="sec-title">
                <span className="title">About</span>
                <h2>Seeking dynamic work to utilize knowledge, learn, and grow professionally.</h2>
              </div>
              <div className="text">Hello, everyone. My name is Sivaramakrishnan, and I am a Software Developer at Bevywise with 2.5 years of experience. My primary role involves front-end development, specializing in technologies such as HTML, CSS, JavaScript, and Git.</div>
              <div className="text">
                I graduated with a degree in Electronics and Communication Engineering from National Engineering College. In my time at Bevywise, I have had the opportunity to work on exciting projects, including developing two products from scratch.
              </div>
              <div className="btn-box">
                <Link to="/contact" className="theme-btn btn-style-one">Contact</Link>
              </div>
            </div>
          </div>

          <div className="image-column col-lg-6 col-md-12 col-sm-12">
            <div className="inner-column wow fadeInLeft">
              <div className="author-desc">
                <h2>Sivaramakrishnan</h2>
                <span>Web Developer</span>
              </div>
              <figure className="image-1"><Link className="lightbox-image" data-fancybox="images"><img title="Sivaramakrishnan" src={mydp} alt=""></img></Link></figure>
            </div>
          </div>

        </div>
        <div className="sec-title mt-5">
          <span className="title">My Future Goal</span>
          <h2>Key Achievements and Experience</h2>
        </div>
        <div className="text">
          My key expertise lies in using Formio plugins for efficient form building, crafting intuitive UI designs, and ensuring responsiveness across various devices.
        </div>
        <div className="text">
          Additionally, I have experience in seamless data integration to enhance the functionality of applications.
        </div>
        <div className="text">
          I am enthusiastic about leveraging my skills to create user-centric solutions and contribute to innovative projects.
        </div>
        <div className="text">
          I look forward to connecting with professionals in the tech community and exploring avenues for collaboration. Thank you for your time.
        </div>
        <div className=''>
          <div className="container bg-light- mt-5 p-0">
            <h2 className="mb-3">Work Experience</h2>
            <div className="accordion accordion-flush" id="accordionFlushExample">
              <div className="accordion-item rounded-3 border-0 shadow mb-2">
                <h2 className="accordion-header">
                  <button className="accordion-button border-bottom collapsed fw-semibold" type="button" data-bs-toggle="collapse" data-bs-target="#flush-collapseOne" aria-expanded="false" aria-controls="flush-collapseOne">
                    Cloud MES Application
                  </button>
                </h2>
                <div id="flush-collapseOne" className="accordion-collapse collapse" data-bs-parent="#accordionFlushExample">
                  <div className="accordion-body">
                    <p className='textBW'>Implemented a data integration strategy to consolidate
                      information from various sources, such as machine
                      sensors and inventory systems, into a database.
                      Developed custom reports and dashboards for realtime visibility into production and quality metrics.</p>
                    <div>
                      <b className='textBW'>Role : </b>
                      <p className='textBW'>Integrating front-end and back-end via APIs for
                        seamless data exchange in MES.</p>
                    </div>
                  </div>
                </div>
              </div>
              <div className="accordion-item rounded-3 border-0 shadow mb-2">
                <h2 className="accordion-header">
                  <button className="accordion-button border-bottom collapsed fw-semibold" type="button" data-bs-toggle="collapse" data-bs-target="#flush-collapseTwo" aria-expanded="false" aria-controls="flush-collapseTwo">
                    EMS - ENERGY MONITORING SYSTEM
                  </button>
                </h2>
                <div id="flush-collapseTwo" className="accordion-collapse collapse" data-bs-parent="#accordionFlushExample">
                  <div className="accordion-body">
                    <p className='textBW'>EMS optimizes energy usage, streamlining workflows
                      for industries. It boosts efficiency, slashes energy
                      costs, and enhances control, productivity, and process
                      stability.</p>
                    <div>
                      <b className='textBW'>Role : </b>
                      <p className='textBW'>Designed user-friendly screens, connected data
                        for interactive features.</p>
                    </div>
                  </div>
                </div>
              </div>
              <div className="accordion-item rounded-3 border-0 mb-2 shadow">
                <h2 className="accordion-header">
                  <button className="accordion-button border-bottom collapsed fw-semibold" type="button" data-bs-toggle="collapse" data-bs-target="#flush-collapseThree" aria-expanded="false" aria-controls="flush-collapseThree">
                    CrsytalMQ
                  </button>
                </h2>
                <div id="flush-collapseThree" className="accordion-collapse collapse" data-bs-parent="#accordionFlushExample">
                  <div className="accordion-body">
                    <p className='textBW'>As part of the Managed MQTT Broker Service, I've
                      simplified IoT setup for clients, reduced
                      configuration time, allowing them to focus on
                      application development.</p>
                    <div>
                      <b className='textBW'>Role : </b>
                      <p className='textBW'>Created user interfaces and linked data to
                        enable interactive functionalities.</p>
                    </div>
                  </div>
                </div>
              </div>
              <div className="accordion-item rounded-3 border-0 mb-2 shadow">
                <h2 className="accordion-header">
                  <button className="accordion-button border-bottom collapsed fw-semibold" type="button" data-bs-toggle="collapse" data-bs-target="#flush-collapseFour" aria-expanded="false" aria-controls="flush-collapseFour">
                    DeviceRepo
                  </button>
                </h2>
                <div id="flush-collapseFour" className="accordion-collapse collapse" data-bs-parent="#accordionFlushExample">
                  <div className="accordion-body">
                    <p className='textBW'>Effortlessly create custom forms with our dynamic
                      application, powered by the Formio plugin. Users
                      design their unique form types, simplifying workflow.
                      Register devices seamlessly within the same
                      platform for enhanced efficiency.</p>
                    <div>
                      <b className='textBW'>Role : </b>
                      <p className='textBW'>Managed HTML/CSS, Formio integration,
                        JSON to database, and UI display.</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>

  );
};

export default About;
