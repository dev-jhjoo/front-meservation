import './App.css';
import { BrowserRouter as Router, Routes, Route  } from 'react-router-dom';

import SignIn from './components/sign/SignIn';
import SignUp from './components/sign/SignUp';
import CalendarView from './components/calendar/CalendarView';
import FriendListView from './components/friend/FriendListView';

function App() { 
  return (
    <Router>
      <Routes>
        <Route path="/calendar" element={<CalendarView/>} />
        <Route path="/friends" element={<FriendListView/>} />
        <Route path="/signup" element={<SignUp/>} />
        <Route path="/" element={<SignIn/>} />
      </Routes>
    </Router>
  );
}

export default App;
