import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import MessageProvider from './context/Messages/MessageProvider';
import UserProvider from './context/user/UserProvider';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <MessageProvider>
      <UserProvider>
        <App />
      </UserProvider>
    </MessageProvider>
  </React.StrictMode>
);
