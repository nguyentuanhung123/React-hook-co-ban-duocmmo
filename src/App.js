import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Analytics from './pages/Analytics';
import Dashboard from './pages/Dashboard';
import './App.css';
import Sidebar from './components/Sidebar';
import Users from './pages/Users';
import Profile from './pages/Profile';
import Settings from './pages/Settings'
import Inbox from './pages/Inbox';
import Media from './pages/Media';
import Messages from './pages/Messages'
import Logout from './pages/Logout';
import RuleOfHook from './pages/bai107Rerender/RuleOfHook';
import Total from './pages/bai108CustomHook/Total';


function App() {
  return (
    <>
      <Router>
        <Sidebar>
          <Routes>
            <Route path='/' exact element={<Dashboard />}></Route>
            <Route path='/analytics' element={<Analytics />}></Route>
            <Route path='/users' element={<Users />}></Route>
            <Route path='/profile' element={<Profile />}></Route>
            <Route path='/settings' element={<Settings />}></Route>
            <Route path='/inbox' element={<Inbox />}></Route>
            <Route path='/media' element={<Media />}></Route>
            <Route path='/messages' element={<Messages />}></Route>
            <Route path='/logout' element={<Logout />}></Route>
            <Route path='/lessons/bai107Rerender' element={<RuleOfHook />}></Route>
            <Route path='/lessons/bai108CustomHook' element={<Total />}></Route>
          </Routes>
        </Sidebar>
      </Router>
    </>
  );
}

export default App;
