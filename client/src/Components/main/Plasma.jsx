import React from 'react';

function Plasma(props) {
  const paras = [
    'Plasma is a yellowish liquid in your blood that carries platelets, red blood cells and white blood cells around the body. Plasma makes up approximately 55% of your blood, and contains antibodies, known as immunoglobulins, which fight infection. These antibodies are made into medicines to help people with cancers, rare diseases, immune disorders and genetic conditions.',
    'Generally, plasma donors must be 18 years of age and weigh at least 110 pounds (50kg). All individuals must pass two separate medical examinations, a medical history screening and testing for transmissible viruses, before their donated plasma can be used to manufacture plasma protein therapies.',
    `Plasma donation has four steps
A vein is cannulated in one arm. Your blood is collected in a machine using a sterile, disposable system.
This machine separates the blood into cells and plasma.
The plasma is collected and stored.
The blood cells are returned to your body via the system.

The procedure for collecting and returning (except for the venous cannulation, of course) is repeated a few times during a plasma donation session. This way, we collect slightly over half litre of plasma."`,
  ];
  return (
    <React.Fragment>
      <center className='col-md-12 typeHeading heading'>
        <h1 className='learnAbout' ref={props.ref}>
          Plasma
        </h1>
      </center>
      <div className='flex'>
        <p
          style={{
            width: '700px',
          }}
        >
          {paras[0]}
        </p>
        <img
          width={800}
          src='https://cdn.kastatic.org/ka-perseus-images/8b58582c697c7bc7cc83755edbb599218f8164fe.png'
        />
      </div>
      <center className='col-md-12 typeHeading heading'>
        <h1 className='learnAbout'>Who can donate Plasma</h1>
      </center>
      <div className='flex'>
        <p
          style={{
            width: '900px',
          }}
        >
          {paras[1]}
        </p>
      </div>
      <center className='col-md-12 typeHeading heading'>
        <h1 className='learnAbout'>Plasma donation process</h1>
      </center>
      <div className='flex'>
        <p
          style={{
            width: '700px',
          }}
        >
          {paras[2]}
        </p>
        <img
          width='500'
          src='https://cdn.expresshealthcare.in/wp-content/uploads/2020/07/16075955/blood-plasma-750x400.jpg'
        />
      </div>
      <br />
    </React.Fragment>
  );
}

export default Plasma;
