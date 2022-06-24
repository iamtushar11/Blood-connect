import './App.css';
import {
  // eslint-disable-next-line
  BrowserRouter as Router,
  Routes,
  Route,
  BrowserRouter,
} from 'react-router-dom';
import Home from './Pages/Home';
import Auth from './Pages/Auth';
import Donors from './Pages/Donors';
import Admin from './Pages/Admin';
import Profile from './Pages/Profile';
import NavbarTop from './Components/Header/Navbar';
import { useContext } from 'react';
import MessageContext from './context/Messages/MessageContext';
import Message from './Components/Messages/Message';

function App() {
  const MessageCtx = useContext(MessageContext);
  return (
    <BrowserRouter>
      <NavbarTop />
      {MessageCtx.isMessage && (
        <Message Message={MessageCtx.Message} isError={MessageCtx.isError} />
      )}
      <br />
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/donors' element={<Donors />} />
        <Route path='/admin' element={<Admin />} />
        <Route path='/auth/:type' element={<Auth />} />
        <Route path='/profile' element={<Profile />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
