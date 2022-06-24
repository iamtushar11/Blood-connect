import React, { useContext } from 'react';
import { Button, Table } from 'react-bootstrap';
import UserContext from '../context/user/UserContext';
const Profile = () => {
  const userData = useContext(UserContext);
  return (
    <div
      style={{
        minHeight: '80vh',
      }}
    >
      <h2
        style={{ margin: '10px auto', textAlign: 'center' }}
        className='heading'
      >
        Profile
      </h2>
      <Table
        striped
        bordered
        hover
        style={{ width: '70vw', margin: '50px auto' }}
      >
        <tbody>
          <tr>
            <td>Full Name</td>
            <td>{userData.User.username}</td>
          </tr>
          <tr>
            <td>Email</td>
            <td>{userData.User.email}</td>
          </tr>
          <tr>
            <td>Blood Group</td>
            <td>{userData.User.bloodGroup}</td>
          </tr>
          <tr>
            <td>Course</td>
            <td>{userData.User.course}</td>
          </tr>
          <tr>
            <td>Branch</td>
            <td>{userData.User.branch}</td>
          </tr>
          <tr>
            <td>Contact No</td>
            <td colSpan={2}>{userData.User.phoneNumber}</td>
          </tr>{' '}
          <tr>
            <td>Admission No</td>
            <td colSpan={2}>{userData.User.admissionNumber}</td>
          </tr>{' '}
          <tr>
            <td>City</td>
            <td colSpan={2}>{userData.User.city}</td>
          </tr>{' '}
          <tr>
            <td>College</td>
            <td colSpan={2}>{userData.User.college}</td>
          </tr>{' '}
          <tr>
            <td>State</td>
            <td colSpan={2}>{userData.User.state}</td>
          </tr>{' '}
          <tr>
            <td>Donation Status</td>
            <td colSpan={2}>{'No'}</td>
          </tr>
          <tr>
            <td>Registed On</td>
            <td colSpan={2}>{userData.User.createdAt}</td>
          </tr>
          <tr>
            <td>Last updated</td>
            <td colSpan={2}>{userData.User.updatedAt}</td>
          </tr>
        </tbody>
      </Table>
      <center>
        <Button
          disabled
          className='success'
          // onClick={() => navigate('/auth/edit')}
        >
          Edit Profile
        </Button>
      </center>
    </div>
  );
};
export default Profile;
