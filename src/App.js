import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

import './App.css';

import Users from './component/Users';
import Scanner from './component/Scanner';
import Scanner1 from './component/Scanner1';
import Scanner2 from './component/Scanner2';
import SignUp from './component/SignUp';

function App() {

  
  return (
    <div className="App">
      
      <Router>
        <Routes>
          <Route exact path='/' element={<SignUp />} />
          <Route exact path='/users' element={<Users />} />
          <Route exact path='/scan' element={<Scanner />} />
          <Route exact path='/scn' element={<Scanner1 />} />
          <Route exact path='/scann' element={<Scanner2 />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
