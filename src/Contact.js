import React from 'react';
import { Link } from'react-router-dom';

const Contact = () => {
  return (
    // <div>
    //   <h2>Contact Page</h2>
    //   <p>Contact is here !</p>
    // </div>
   <div className='positionRela'>
     <div className="wrapper">
      <h1><b>Coming soon</b><span className="dot">.</span></h1>
      <p className='text-center my-3'>Put some text here.</p>
      <div className="icons1 my-4">
        <Link><i className="fa-brands fa-twitter"></i></Link>
        <Link><i className="fa-brands fa-youtube"></i></Link>
        <Link><i className="fa-solid fa-paper-plane"></i></Link>
      </div>
    </div>
   </div>
  );
};

export default Contact;
