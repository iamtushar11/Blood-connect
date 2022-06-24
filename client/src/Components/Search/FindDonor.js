import React from 'react';

const FindDonor = ({ filter, setFilter }) => {
  return (
    <div className='searchBox' style={{ fontSize: '15px' }}>
      <text style={{marginLeft:'20px'}}>Find Donor</text>
      <input
        placeholder='Enter Query ̣ ̣ ̣'
        style={{
          width: '300px',
          height: '30px',
          border: '1px solid black',
          padding: '3px',
          margin: '0px 20px',
        }}
        value={filter || ''}
        onChange={(e) => setFilter(e.target.value)}
      />
      <br />
    </div>
  );
};

export default FindDonor;
