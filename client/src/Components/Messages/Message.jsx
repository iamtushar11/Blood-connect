import React, { useContext } from 'react';
import MessageContext from '../../context/Messages/MessageContext';
import Card from 'react-bootstrap/Card';
function Message(props) {
  const Message = useContext(MessageContext);
  Message.isMessage &&
    setTimeout(() => {
      Message.ClearMessage();
    }, 5000);

  return (
    <Card
      className='flex'
      style={{
        backgroundColor: 'white',
        position: 'fixed',
        top: '100px',
        right: '20px',
        width: '400px',
        height: '200px',
        zIndex: '100000',
        borderRadius: '5px',
        flexDirection: 'column',
        justifyContent: 'space-between',
      }}
    >
      <div
        className='flex'
        style={{
          backgroundColor: 'grey',
          color: 'white',
          position: 'absolute',
          width: '100%',
          borderTopRightRadius: '5px',
          borderTopLeftRadius: '5px',
          height: '30%',
        }}
      >
        Message
        <span
          style={{
            color: 'white',
            position: 'absolute',
            top: '10px',
            right: '20px',
            cursor: 'pointer',
          }}
          onClick={() => {
            Message.ClearMessage();
          }}
        >
          ✖️
        </span>
      </div>
      <div
        className='flex'
        style={{
          position: 'absolute',
          bottom: '0',
          height: '70%',
          color: 'grey',
          width: '100%',
        }}
      >
        {Message.Message}
      </div>
    </Card>
  );
}

export default Message;
