import React, { useRef, useState, useContext } from 'react';
import { useNavigate } from 'react-router-dom';
import Classes from './AuthForm.module.css';
import DropdownButton from 'react-bootstrap/DropdownButton';
import Dropdown from 'react-bootstrap/Dropdown';
import axios from 'axios';
import UserContext from '../../context/user/UserContext';
import MessageContext from '../../context/Messages/MessageContext';
import { route } from '../../api';
import Loader from '../loader/Loader';
function AuthForm(props) {
  const [loading, setLoading] = useState(false);
  const Messages = useContext(MessageContext);
  const Auth = useContext(UserContext);
  let navigate = useNavigate();
  const username = useRef();
  const email = useRef();
  const password = useRef();
  const college = useRef();
  const state = useRef();
  const city = useRef();
  const [bloodGroup, setbloodGroup] = useState('A-positive');
  const [Course, setCourse] = useState('N.A');
  const [Branch, setBranch] = useState('N.A');
  const AddNo = useRef();
  const phoneNumber = useRef();
  const handelSubmit = async (event) => {
    setLoading(true);
    event.preventDefault();
    let data = props.isLogin
      ? {
          email: email.current.value,
          password: password.current.value,
        }
      : {
          username: username.current.value,
          email: email.current.value,
          password: password.current.value,
          bloodGroup: bloodGroup,
          course: Course,
          branch: Branch,
          admissionNumber: AddNo.current.value,
          phoneNumber: phoneNumber.current.value,
          college: college.current.value,
          city: city.current.value,
          state: state.current.value,
        };

    axios
      .post(props.isLogin ? route.SignIn : route.SignUp, data)
      .then((response) => {
        setLoading(false);
        if (response.data.status === 'Success') {
          !props.isLogin && Messages.ThrowMessage(response.data.message);
          if (props.isLogin) {
            Auth.LogIn(response.data.data);
            Messages.ThrowMessage('Logged In Successfully ');
          }
          navigate('/');
        } else {
          Messages.ThrowMessage(response.data.message || 'Invalid Credentials');
        }
      })
      .catch((error) => {
        setLoading(false);
        Messages.ThrowMessage(
          error.response.data.error.message || 'Invalid Credentials'
        );
      });
  };
  return (
    <div className='loginForm'>
      <form className='flex column' onSubmit={handelSubmit}>
        <h1 className='heading' style={{ textAlign: 'center' }}>
          {props.isLogin
            ? 'BloodConnect User Login'
            : 'BloodConnect Registration Portal'}
        </h1>

        <input
          type='email'
          className={Classes.Input}
          placeholder='Email'
          ref={email}
          required
        />
        <input
          type='password'
          className={Classes.Input}
          placeholder='Password'
          ref={password}
          required
        />
        {!props.isLogin && (
          <React.Fragment>
            {' '}
            <input
              type='text'
              className={Classes.Input}
              placeholder='UserName'
              ref={username}
              required
            />
            <div
              className='flex dropBtn'
              style={{
                justifyContent: 'space-between',
                width: '500px',
              }}
            >
              <DropdownButton
                id='dropdown-basic-button'
                title='Select Blood Group'
              >
                <Dropdown.Item onClick={() => setbloodGroup('A-positive')}>
                  A+
                </Dropdown.Item>
                <Dropdown.Item onClick={() => setbloodGroup('A-negative')}>
                  A-
                </Dropdown.Item>
                <Dropdown.Item onClick={() => setbloodGroup('B-positive')}>
                  B+
                </Dropdown.Item>
                <Dropdown.Item onClick={() => setbloodGroup('B-negative')}>
                  B-
                </Dropdown.Item>
                <Dropdown.Item onClick={() => setbloodGroup('AB-positive')}>
                  AB+
                </Dropdown.Item>
                <Dropdown.Item onClick={() => setbloodGroup('AB-negative')}>
                  AB-
                </Dropdown.Item>
                <Dropdown.Item onClick={() => setbloodGroup('O-positive')}>
                  O+
                </Dropdown.Item>
                <Dropdown.Item onClick={() => setbloodGroup('O-negative')}>
                  O-
                </Dropdown.Item>
              </DropdownButton>
              <span className={Classes.BG + ' flex'}>{bloodGroup}</span>
            </div>
            <br />
            <div
              className='flex dropBtn'
              style={{
                justifyContent: 'space-between',
                width: '500px',
              }}
            >
              <DropdownButton title='Select Course'>
                <Dropdown.Item onClick={() => setCourse('B.tech')}>
                  B.tech
                </Dropdown.Item>
                <Dropdown.Item onClick={() => setCourse('M.tech')}>
                  M.tech
                </Dropdown.Item>
                <Dropdown.Item onClick={() => setCourse('MBA')}>
                  MBA
                </Dropdown.Item>
                <Dropdown.Item onClick={() => setCourse('BCA')}>
                  BCA
                </Dropdown.Item>
                <Dropdown.Item onClick={() => setCourse('MCA')}>
                  MCA
                </Dropdown.Item>
                <Dropdown.Item
                  onClick={() => {
                    setCourse('OTHER');
                    setBranch('N.A');
                  }}
                >
                  OTHER
                </Dropdown.Item>
              </DropdownButton>
              <span className={Classes.BG + ' flex'}>{Course}</span>
            </div>
            {Course !== 'OTHER' && (
              <React.Fragment>
                <br />
                <div
                  className='flex dropBtn'
                  style={{
                    justifyContent: 'space-between',
                    width: '500px',
                  }}
                >
                  <DropdownButton title='Select Branch'>
                    <Dropdown.Item onClick={() => setBranch('CSE')}>
                      CSE
                    </Dropdown.Item>
                    <Dropdown.Item onClick={() => setBranch('CS')}>
                      CS
                    </Dropdown.Item>
                    <Dropdown.Item onClick={() => setBranch('CS-DS')}>
                      CS-DS
                    </Dropdown.Item>
                    <Dropdown.Item onClick={() => setBranch('IT')}>
                      IT
                    </Dropdown.Item>
                    <Dropdown.Item onClick={() => setBranch('ME')}>
                      ME
                    </Dropdown.Item>
                    <Dropdown.Item onClick={() => setBranch('ECE')}>
                      ECE
                    </Dropdown.Item>
                    <Dropdown.Item onClick={() => setBranch('OTHER')}>
                      OTHER
                    </Dropdown.Item>
                  </DropdownButton>
                  <span className={Classes.BG + ' flex'}>{Branch}</span>
                </div>
                <input
                  type='text'
                  className={Classes.Input}
                  placeholder='Admission Number'
                  ref={AddNo}
                  required
                />
              </React.Fragment>
            )}
            {Course === 'OTHER' && (
              <React.Fragment>
                <input
                  type='text'
                  className={Classes.Input}
                  placeholder='Branch'
                  value={Branch}
                  style={{ display: 'none' }}
                  required
                />
                <input
                  type='text'
                  className={Classes.Input}
                  placeholder='Admission Number'
                  ref={AddNo}
                  value='N.A'
                  style={{ display: 'none' }}
                  required
                />
              </React.Fragment>
            )}
            <input
              type='text'
              className={Classes.Input}
              placeholder='Phone Number'
              ref={phoneNumber}
              required
            />
            <input
              type='text'
              className={Classes.Input}
              placeholder={
                Course === 'OTHER' ? 'Company/Organization' : 'College'
              }
              ref={college}
              required
            />{' '}
            <input
              type='text'
              className={Classes.Input}
              placeholder='State'
              ref={state}
              required
            />
            <input
              type='text'
              className={Classes.Input}
              placeholder='City'
              ref={city}
              required
            />
            <div className='flex'>
              <input
                id='confirmation-box'
                type='checkbox'
                className={Classes.Input}
                placeholder='18+'
                required
              />
              <label htmlFor='confirmation-box'> Are you 18+</label>
            </div>
          </React.Fragment>
        )}

        {!loading && (
          <button className={Classes.btn}>
            {props.isLogin ? 'Login' : 'Register'}
          </button>
        )}
        {loading && <Loader />}
      </form>
    </div>
  );
}

export default AuthForm;
