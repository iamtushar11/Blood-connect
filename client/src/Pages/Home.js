import React, { useRef } from 'react';
import { Carousel, Card } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import Button from 'react-bootstrap/Button';
import Footer from '../Components/Footer/Footer';
import Plasma from '../Components/main/Plasma';

const Home = () => {
  const myRef = useRef(null);
  const plasma = useRef(null);

  const executeScroll = () => myRef.current.scrollIntoView();
  const execscroll = () => plasma.current.scrollIntoView();

  const cardData = [
    {
      image:
        'https://user-images.githubusercontent.com/76155456/167237418-e1f52e25-13ab-44c1-897a-dcaf66f5b826.png',
      text: 'Know about Compatible Blood Type Donors, Who can donate, Required Tests, Medical conditions and more FAQs.',
      title: 'Learn About Donation',
      onClick: executeScroll,
      link: '',
      button: 'Learn More',
    },
    {
      image:
        'https://user-images.githubusercontent.com/76155456/167237419-2637d908-9119-4663-9184-7dcff980a82d.png',
      text: 'Check Availabilty of Blood Donors across college.',
      title: 'Blood Availabilty Search',
      link: '/donors',
      button: 'Check Availability',
    },
    {
      image:
        'https://user-images.githubusercontent.com/76155456/167237420-81d447b4-09fd-468e-bb7a-d28a09514d0c.png',
      text: 'Know about Plasma and how to donate plasma and more about it',
      title: 'About Plasma and Plasma donation',
      onClick: execscroll,
      link: '/#',
      button: 'Learn More',
    },
  ];
  return (
    <React.Fragment>
      <Carousel
        style={{
          position: 'relative',
          bottom: '10px',
        }}
      >
        <Carousel.Item interval={2000}>
          <img
            className='d-block w-100'
            style={{ height: '900px' }}
            src={
              'https://user-images.githubusercontent.com/76155456/167236926-956da010-ab7b-4749-86c1-cc943959ca33.png'
            }
            // eslint-disable-next-line
            alt='First slide'
            rel='noreferrer'
          />
        </Carousel.Item>
        <Carousel.Item interval={500}>
          <img
            className='d-block w-100'
            // style={{ height: '60vh' }}
            src='https://covid-19-tracker-491fa.firebaseapp.com/static/media/b1.c230b940.jpg'
            alt='Second slide'
          />
        </Carousel.Item>
        <Carousel.Item>
          <img
            className='d-block w-100'
            // style={{ height: '60vh' }}
            src='https://user-images.githubusercontent.com/76155456/167236921-c31be9b0-4ba8-4c2f-982f-42b59ec62e2b.png'
            alt='Third slide'
          />
        </Carousel.Item>
      </Carousel>
      <div
        className='row cardsCol'
        style={{
          justifyContent: 'space-evenly',
          padding: '100px 0px 50px 0px ',
          background:
            'linear-gradient(to top,transparent,rgba(250,0,0,0.1),transparent)',
          backgroundColor: '#fab00',
          margin: 'auto',
        }}
      >
        {cardData.map((data, index) => {
          return (
            <Card
              key={index}
              style={{
                width: '20rem',
                border: 'none',
                padding: 'none !important',
                background: 'rgba(255, 255, 255)',
              }}
            >
              <Card.Img variant='top' src={data.image} />
              <Card.Body>
                <Card.Title className='heading'>{data.title}</Card.Title>
                <br />
                <Card.Text>{data.text}</Card.Text>
              </Card.Body>
              <Link to={data.link}>
                <Button onClick={data.onClick} variant='outline-secondary'>
                  {data.button}
                </Button>
              </Link>
              <br />
            </Card>
          );
        })}
      </div>
      <div ref={myRef} className='row learnAbout'>
        <div className='row text-center' style={{ paddingBottom: 50 }}>
          <div className='col-md-12 typeHeading heading'>
            <h1 className='learnAbout'>Learn About Blood Donation</h1>
          </div>
        </div>
        <br />
        <br />
        <div className='col-sm-6'>
          <table className='table table-responsive table-bordered '>
            <tbody>
              <tr>
                <th
                  colSpan={3}
                  style={{ color: 'white', backgroundColor: 'black' }}
                >
                  Compatible Blood Type Donors
                </th>
              </tr>
              <tr>
                <td>
                  <b>Blood Type</b>
                </td>
                <td>
                  <b>Donate Blood To</b>
                </td>
                <td>
                  <b>Receive Blood From</b>
                </td>
              </tr>
              <tr>
                <td>
                  <span style={{ color: '#961e1b' }}>
                    <b>A+</b>
                  </span>
                </td>
                <td>A+ AB+</td>
                <td>A+ A- O+ O-</td>
              </tr>
              <tr>
                <td>
                  <span style={{ color: '#961e1b' }}>
                    <b>O+</b>
                  </span>
                </td>
                <td>O+ A+ B+ AB+</td>
                <td>O+ O-</td>
              </tr>
              <tr>
                <td>
                  <span style={{ color: '#961e1b' }}>
                    <b>B+</b>
                  </span>
                </td>
                <td>B+ AB+</td>
                <td>B+ B- O+ O-</td>
              </tr>
              <tr>
                <td>
                  <span style={{ color: '#961e1b' }}>
                    <b>AB+</b>
                  </span>
                </td>
                <td>AB+</td>
                <td>Everyone</td>
              </tr>
              <tr>
                <td>
                  <span style={{ color: '#961e1b' }}>
                    <b>A-</b>
                  </span>
                </td>
                <td>A+ A- AB+ AB-</td>
                <td>A- O-</td>
              </tr>
              <tr>
                <td>
                  <span style={{ color: '#961e1b' }}>
                    <b>O-</b>
                  </span>
                </td>
                <td>Everyone</td>
                <td>O-</td>
              </tr>
              <tr>
                <td>
                  <span style={{ color: '#961e1b' }}>
                    <b>B-</b>
                  </span>
                </td>
                <td>B+ B- AB+ AB-</td>
                <td>B- O-</td>
              </tr>
              <tr>
                <td>
                  <span style={{ color: '#961e1b' }}>
                    <b>AB-</b>
                  </span>
                </td>
                <td>AB+ AB-</td>
                <td>AB- A- B- O-</td>
              </tr>
            </tbody>
          </table>
        </div>
        <div
          className='wow col-sm-6 rotateInDownRight text-center animated'
          data-wow-delay='0ms'
          data-wow-duration='1000ms'
          style={{
            visibility: 'visible',
            animationDuration: '1000ms',
            animationDelay: '0ms',
            animationName: 'rotateInDownRight',
          }}
        >
          {/* <img src='assets/donationFact.jpg'></img> */}
          <picture>
            {/* <source srcSet="assets/webp/donationFact.webp" type="image/webp" />
      <source srcSet="assets/donationFact.jpg" type="image/jpeg" /> */}
            <iframe
              style={{
                borderRadius: '10px',
              }}
              width='560'
              height='315'
              src='https://www.youtube.com/embed/B6dAPXpUjCE'
              title='YouTube video player'
              frameborder='2'
              allow='accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture'
              allowfullscreen
            ></iframe>
          </picture>
          <br />
          <blockquote>
            <p>
              After donating blood, the body works to replenish the blood loss.
              This stimulates the production of new blood cells and in turn,
              helps in maintaining good health.
            </p>
            <p></p>
          </blockquote>
          <button
            // onClick="window.location='/BLDAHIMS/bloodbank/nearbyBBRed.cnt'"
            className='btn btn-danger svcNearBy hvr-sweep-to-right '
          >
            <i className='fa fa-tint' aria-hidden='true' />
            &nbsp; Donate Now
          </button>
          <br />
          <br />
        </div>
      </div>
      <div ref={plasma}>
        <Plasma />
      </div>{' '}
      <br />
      <center>
        <h4>
          For covid related details visit{' '}
          <a
            // eslint-disable-next-line
            href='https://covid-19-tracker-491fa.firebaseapp.com/'
            target={'_blank'}
            rel='noreferrer'
          >
            <Button variant='success'>Covid-Help</Button>
          </a>
        </h4>
      </center>
      <br />
      <Footer />
    </React.Fragment>
  );
};

export default Home;
