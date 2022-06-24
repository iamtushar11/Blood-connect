import React from 'react';
import Classes from './Footer.module.css';
import Button from 'react-bootstrap/Button';
function Footer() {
  return (
    <div className={Classes.Footer + ' flex column' + ' footer'}>
      <div className={Classes.Quote}>
        " Blood Donation Is A Small Act Of Kindness That Does Great And Big
        Wonders. "
      </div>
      <br />
      <br />
      <div className='flex'>
        <a href='https://forms.gle/KZwXEF5aFGZ2wDoA7' target={'_blank'}>
          <Button> Review Innovate Idea </Button>
        </a>
        &nbsp; &nbsp;
        <a
          href='https://covid-19-tracker-491fa.firebaseapp.com/'
          target={'_blank'}
        >
          <Button variant='success'>Covid-Help</Button>
        </a>
      </div>
      <br />
      <br />
      <div
        style={{
          color: 'rgba(250, 235, 215, 0.3)',
        }}
      >
        All Rights Reserved ©2022
      </div>
    </div>
  );
}

export default Footer;
