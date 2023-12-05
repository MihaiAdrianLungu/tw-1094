import { useState } from 'react';
import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';
import './App.css';
import Homepage from './Homepage';
import Login from './Login';
import Navbar from './Navbar';
import Profile from './Profile';
import useCheckToken from './useCheckToken';

function App() {
  const [loading, setLoading] = useState(true);
  const [loggedIn, setLoggedIn] = useState(false);

  useCheckToken(setLoading, setLoggedIn);

  return (
    <Router>
      <Navbar   />
      <Routes>
        {loading ?
          <Route path='*' element={<div>Spinner</div>} /> 
          :
          <>
            <Route path='/' element={<Homepage />} />
            <Route path='/login' element={<Login />} />
            <Route path='/profile' element={loggedIn ? <Profile /> : <Navigate to='/login' />} />
          </>}

      </Routes>
    </Router>
  );
}

export default App;