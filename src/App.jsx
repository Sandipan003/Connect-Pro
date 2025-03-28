import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { useState } from 'react';
import Navbar from './components/Navbar';
import Feed from './components/Feed';
import Profile from './components/Profile';
import Network from './components/Network';
import Jobs from './components/Jobs';
import Messages from './components/Messages';
import Notifications from './components/Notifications';
import LandingPage from './components/LandingPage';
import ProfileEdit from './components/ProfileEdit';
import { useAuth } from './contexts/AuthContext';

function App() {
  const { user } = useAuth();
  const [activeTab, setActiveTab] = useState('feed');

  if (!user) {
    return <LandingPage />;
  }

  return (
    <Router>
      <div className="min-h-screen bg-gray-50">
        <Navbar activeTab={activeTab} setActiveTab={setActiveTab} />
        <main className="container mx-auto px-4 py-8">
          <Routes>
            <Route path="/" element={<Feed />} />
            <Route path="/profile" element={<Profile />} />
            <Route path="/profile/edit" element={<ProfileEdit />} />
            <Route path="/network" element={<Network />} />
            <Route path="/jobs" element={<Jobs />} />
            <Route path="/messages" element={<Messages />} />
            <Route path="/notifications" element={<Notifications />} />
          </Routes>
        </main>
      </div>
    </Router>
  );
}

export default App; 