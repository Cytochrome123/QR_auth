import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

import './App.css';

import SignUp from './component/SignUp';
import Login from './component/Login';
import Users from './component/Users';
import Scanner from './component/Scanner';
import Scanner1 from './component/Scanner1';
import Scanner2 from './component/Scanner2';
import Profile from './component/Profile';

export const BASEURL = 'https://gold-sweatsuit.cyclic.app/api';
// export const BASEURL = 'http://localhost:8000/api'

function App() {

  
  return (
    <div className="App">
      
      <Router>
        <Routes>
          <Route path='/' element={<SignUp />} />
          <Route path='/login' element={<Login />} />
          <Route path='/profile' element={<Profile />} />
          <Route path='/users' element={<Users />} />
          <Route path='/scan' element={<Scanner />} />
          <Route path='/scn' element={<Scanner1 />} />
          <Route path='/scann' element={<Scanner2 />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
