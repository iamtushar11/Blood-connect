import React, { useContext, useEffect } from 'react';
import { Navbar, Nav, NavDropdown, Container } from 'react-bootstrap';
import { Link, useLocation } from 'react-router-dom';
import Button from 'react-bootstrap/Button';
import UserContext from '../../context/user/UserContext';
import MessageContext from '../../context/Messages/MessageContext';
import { useNavigate } from 'react-router-dom';
import Dropdown from 'react-bootstrap/Dropdown';
import { CheckSession } from '../../utils/session';
import axios from 'axios';
import { route } from '../../api';

const NavbarTop = () => {
  let navigate = useNavigate();
  const Auth = useContext(UserContext);
  const location = useLocation();
  const Messages = useContext(MessageContext);

  useEffect(() => {
    const Subscribe = async () => {
      //check for user available
      // if invalid User --  or user data deleted
      // call LogOut function and Display session expired message
      const res = await CheckSession(Auth.User.email).catch((err) => {
        Messages.ThrowMessage('Session Expired');
        Auth.LogOut();
      });
      if (res.data.status === 'Success') Auth.LogIn(res.data?.data);
    };
    Auth.User && Subscribe();
    // eslint-disable-next-line
  }, [location.pathname]);
  return (
    <div>
      <Navbar
        fixed='top'
        collapseOnSelect
        expand='lg'
        bg='black'
        variant='dark'
        className='navbar'
      >
        <Container>
          <Navbar.Brand>
            <Link to='/'>
              <img
                style={{
                  width: '70px',
                }}
                alt='logo_image'
                src={
                  'https://res.cloudinary.com/ddrxiwoep/image/upload/w_150,h_150/v1651831882/WhatsApp_Image_2022-05-06_at_1.59.01_PM_1_bbck5h.jpg'
                }
              ></img>
            </Link>
          </Navbar.Brand>
          <Navbar.Toggle aria-controls='responsive-navbar-nav' />
          <Navbar.Collapse id='responsive-navbar-nav'>
            <Nav className='me-auto logo'>
              <Link style={{ textDecoration: 'none' }} to='/'>
                <div
                  style={{
                    fontSize: '20px',
                    padding: '10px',
                    marginTop: '10px',
                    fontWeight: '600px',
                    color: 'white',
                    textDecoration: 'none',
                  }}
                >
                  BloodConnect
                </div>
              </Link>
            </Nav>

            <Nav>
              {location.pathname === '/donors' && (
                <React.Fragment>
                  <NavDropdown title='Blood Group' id='collasible-nav-dropdown'>
                    <Link to='/donors' className='link'>
                      All Groups
                    </Link>
                    <Link to='/donors?bg=A-positive' className='link'>
                      A+
                    </Link>
                    <Link to='/donors?bg=A-negative' className='link'>
                      A-
                    </Link>
                    <Link to='/donors?bg=B-positive' className='link'>
                      B+
                    </Link>
                    <Link to='/donors?bg=B-negative' className='link'>
                      B-
                    </Link>
                    <Link to='/donors?bg=AB-positive' className='link'>
                      AB+
                    </Link>
                    <Link to='/donors?bg=AB-negative' className='link'>
                      AB-
                    </Link>
                    <Link to='/donors?bg=O-positive' className='link'>
                      O+
                    </Link>
                    <Link to='/donors?bg=O-negative' className='link'>
                      O-
                    </Link>
                  </NavDropdown>
                </React.Fragment>
              )}

              <Nav.Link>
                <Link to='/donors' className='link-secondary'>
                  Blood Availability
                </Link>
              </Nav.Link>

              {!Auth.User && (
                <div style={{ position: 'relative', left: '50px' }}>
                  <Link eventKey={2} to='/auth/login'>
                    <Button variant='secondary'>SignIn</Button>
                  </Link>
                  &nbsp;
                  <Link eventKey={2} to='/auth/register'>
                    <Button variant='outline-secondary'>SignUp</Button>{' '}
                  </Link>
                </div>
              )}

              {Auth.User && (
                <React.Fragment>
                  <NavDropdown
                    title={Auth.User?.username}
                    id='collasible-nav-dropdown'
                    style={{
                      padding: '0px 5px',
                      position: 'relative',
                      left: '30px',
                    }}
                  >
                    <Link to='/profile' className='link'>
                      Your Profile
                    </Link>
                    <a
                      href='https://iamtushar11.github.io/Blood-connect/'
                      target={'_blank'}
                      className='link'
                    >
                      Documentation
                    </a>

                    <Dropdown.Divider />
                    <Button
                      style={{ width: '100%', marginBottom: '10px' }}
                      variant='warning'
                      onClick={() => {
                        Auth.LogOut();
                        Messages.ThrowMessage('Successfully Logged Out');
                        navigate('/');
                      }}
                    >
                      LogOut
                    </Button>
                    <br />
                    <Button
                      style={{ width: '100%' }}
                      variant='danger'
                      onClick={() => {
                        axios
                          .delete(route.user_del + Auth.User._id)
                          .then(() => {
                            Auth.LogOut();
                            Messages.ThrowMessage(
                              'Account deleted Successfully!!'
                            );
                            navigate('/');
                          })
                          .catch((err) => console.log(err));
                      }}
                    >
                      Delete Acc
                    </Button>
                  </NavDropdown>
                </React.Fragment>
              )}
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
      <div style={{ marginBottom: '70px' }}></div>
    </div>
  );
};

export default NavbarTop;
