import React from 'react';

const Content = () => {
  const contentData = [
    {
      title: 'Special Card 1',
      text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
      link: '#',
      buttonText: 'Go somewhere'
    },
    {
      title: 'Special Card 2',
      text: 'Praesent non nunc id lectus sagittis rutrum nec ac lectus.',
      link: '#',
      buttonText: 'Go elsewhwere'
    },
    {
      title: 'Special Card 3',
      text: 'Suspendisse nec purus sit amet nulla efficitur vestibulum.',
      link: '#',
      buttonText: 'Home'
    },
    {
      title: 'Special Card 3',
      text: 'Suspendisse nec purus sit amet nulla efficitur vestibulum.',
      link: '#',
      buttonText: 'Home'
    }
  ];

  return (
    <div>
      <h2>Content</h2>
      <p>Dynamic Content based on json</p>
      <div className='d-flex flex-wrap justify-content-center'>
        {contentData.map((card, index) => (
          <div key={index} className="card m-3" style={{ width: '18rem' }}>
            <div className="card-body">
              <h5 className="card-title">{card.title}</h5>
              <p className="card-text">{card.text}</p>
              <a href={card.link} className="btn btn-primary">{card.buttonText}</a>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Content;


// const Content = () => {
//   return (
//     <div>
//       <h1 className='my-4'>Trial Content</h1>
//       <div className='d-flex flex-wrap justify-content-center'>
//         <div className="card m-3" style= {{width: '18rem'}}>
//           <div className="card-body">
//             <h5 className="card-title">Specia</h5>
//             <p className="card-text">With supporting text below as additional content.</p>
//             <a href="#" className="btn btn-primary">Go somehere</a>
//           </div>
//         </div>
//         <div className="card m-3" style= {{width: '18rem'}}>
//           <div className="card-body">
//             <h5 className="card-title">Special asdf lahdlkfhljk treatment</h5>
//             <p className="card-text">With supporting text below as a natural lead-in to a  content.</p>
//             <a href="#" className="btn btn-primary">Gosomewhere</a>
//           </div>
//         </div>
//         <div className="card m-3" style= {{width: '18rem'}}>
//           <div className="card-body">
//             <h5 className="card-title">Specal title asdfkhk kldjfh</h5>
//             <p className="card-text">With a dkjakldjfn text below as a natural lead-a ;df;lakdf to additional content.</p>
//             <a href="#" className="btn btn-primary">Go so sd mewhere</a>
//           </div>
//         </div>
//       </div>
//     </div>
//   )
// }
