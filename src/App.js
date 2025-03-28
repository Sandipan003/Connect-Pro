import React from 'react';
import { BrowserRouter as Router, Routes, Route, Link, useLocation } from 'react-router-dom';
import { HomeIcon, UserGroupIcon, BriefcaseIcon, ChatBubbleLeftRightIcon, BellIcon, UserCircleIcon } from '@heroicons/react/24/outline';
import Auth from './components/Auth';
import Jobs from './components/Jobs';
import Messages from './components/Messages';
import Notifications from './components/Notifications';
import Profile from './components/Profile';
import Landing from './components/Landing';
import MobileNav from './components/MobileNav';
import { AuthProvider } from './contexts/AuthContext';

function Navigation() {
  const location = useLocation();
  
  return (
    <nav className="bg-white shadow-sm">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-16">
          <div className="flex">
            <div className="flex-shrink-0 flex items-center">
              <Link to="/" className="text-2xl font-bold text-primary">
                ConnectPro
              </Link>
            </div>
            <div className="hidden sm:ml-6 sm:flex sm:space-x-8">
              <Link
                to="/dashboard"
                className={`inline-flex items-center px-1 pt-1 border-b-2 text-sm font-medium ${
                  location.pathname === '/dashboard'
                    ? 'border-primary text-gray-900'
                    : 'border-transparent text-gray-500 hover:border-gray-300 hover:text-gray-700'
                }`}
              >
                Home
              </Link>
              <Link
                to="/jobs"
                className={`inline-flex items-center px-1 pt-1 border-b-2 text-sm font-medium ${
                  location.pathname === '/jobs'
                    ? 'border-primary text-gray-900'
                    : 'border-transparent text-gray-500 hover:border-gray-300 hover:text-gray-700'
                }`}
              >
                Jobs
              </Link>
              <Link
                to="/network"
                className={`inline-flex items-center px-1 pt-1 border-b-2 text-sm font-medium ${
                  location.pathname === '/network'
                    ? 'border-primary text-gray-900'
                    : 'border-transparent text-gray-500 hover:border-gray-300 hover:text-gray-700'
                }`}
              >
                Network
              </Link>
              <Link
                to="/messages"
                className={`inline-flex items-center px-1 pt-1 border-b-2 text-sm font-medium ${
                  location.pathname === '/messages'
                    ? 'border-primary text-gray-900'
                    : 'border-transparent text-gray-500 hover:border-gray-300 hover:text-gray-700'
                }`}
              >
                Messages
              </Link>
              <Link
                to="/notifications"
                className={`inline-flex items-center px-1 pt-1 border-b-2 text-sm font-medium ${
                  location.pathname === '/notifications'
                    ? 'border-primary text-gray-900'
                    : 'border-transparent text-gray-500 hover:border-gray-300 hover:text-gray-700'
                }`}
              >
                Notifications
              </Link>
            </div>
          </div>
          <div className="hidden sm:ml-6 sm:flex sm:items-center space-x-4">
            <Link
              to="/profile"
              className={`inline-flex items-center px-1 pt-1 border-b-2 text-sm font-medium ${
                location.pathname === '/profile'
                  ? 'border-primary text-gray-900'
                  : 'border-transparent text-gray-500 hover:border-gray-300 hover:text-gray-700'
              }`}
            >
              <UserCircleIcon className="h-6 w-6" />
            </Link>
            <button className="btn-primary">Post a Job</button>
          </div>
        </div>
      </div>
    </nav>
  );
}

function Dashboard() {
  return (
    <div className="min-h-screen bg-background">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-8">
          {/* Left Sidebar - Profile */}
          <div className="md:col-span-3">
            <div className="bg-white rounded-lg shadow-sm p-6">
              <div className="flex items-center space-x-4">
                <div className="h-16 w-16 rounded-full bg-primary/10 flex items-center justify-center">
                  <span className="text-primary text-xl font-bold">JD</span>
                </div>
                <div>
                  <h2 className="text-lg font-semibold">John Doe</h2>
                  <p className="text-gray-600">UI/UX Designer</p>
                </div>
              </div>
              <div className="mt-6 space-y-4">
                <div className="flex items-center text-gray-600">
                  <BriefcaseIcon className="h-5 w-5 mr-2" />
                  <span>5 years experience</span>
                </div>
                <div className="flex items-center text-gray-600">
                  <UserGroupIcon className="h-5 w-5 mr-2" />
                  <span>500+ connections</span>
                </div>
              </div>
            </div>
          </div>

          {/* Main Feed */}
          <div className="md:col-span-6">
            <div className="space-y-6">
              {/* Create Post */}
              <div className="bg-white rounded-lg shadow-sm p-6">
                <div className="flex space-x-4">
                  <div className="h-10 w-10 rounded-full bg-primary/10 flex items-center justify-center">
                    <span className="text-primary font-bold">JD</span>
                  </div>
                  <div className="flex-1">
                    <input
                      type="text"
                      placeholder="Share your thoughts..."
                      className="input-field"
                    />
                  </div>
                </div>
              </div>

              {/* Feed Posts */}
              <div className="bg-white rounded-lg shadow-sm p-6">
                <div className="flex items-center justify-between mb-4">
                  <div className="flex items-center space-x-3">
                    <div className="h-10 w-10 rounded-full bg-secondary/10 flex items-center justify-center">
                      <span className="text-secondary font-bold">AS</span>
                    </div>
                    <div>
                      <h3 className="font-semibold">Alice Smith</h3>
                      <p className="text-sm text-gray-600">Product Designer</p>
                    </div>
                  </div>
                  <span className="text-sm text-gray-500">2h ago</span>
                </div>
                <p className="text-gray-800 mb-4">
                  Just launched a new design system for our client. Check out the case study!
                </p>
                <div className="flex items-center space-x-4 text-gray-600">
                  <button className="flex items-center space-x-1 hover:text-primary">
                    <ChatBubbleLeftRightIcon className="h-5 w-5" />
                    <span>24</span>
                  </button>
                  <button className="flex items-center space-x-1 hover:text-secondary">
                    <UserGroupIcon className="h-5 w-5" />
                    <span>12</span>
                  </button>
                </div>
              </div>
            </div>
          </div>

          {/* Right Sidebar - Job Recommendations */}
          <div className="md:col-span-3">
            <div className="bg-white rounded-lg shadow-sm p-6">
              <h3 className="text-lg font-semibold mb-4">Recommended Jobs</h3>
              <div className="space-y-4">
                <div className="border-l-4 border-primary pl-4">
                  <h4 className="font-medium">Senior UI Designer</h4>
                  <p className="text-sm text-gray-600">TechCorp Inc.</p>
                  <p className="text-sm text-accent mt-1">$80k - $120k</p>
                </div>
                <div className="border-l-4 border-secondary pl-4">
                  <h4 className="font-medium">UX Research Lead</h4>
                  <p className="text-sm text-gray-600">DesignHub</p>
                  <p className="text-sm text-accent mt-1">$90k - $130k</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

function App() {
  return (
    <AuthProvider>
      <Router>
        <div className="min-h-screen bg-background">
          <Navigation />
          <div className="pb-16 md:pb-0">
            <Routes>
              <Route path="/" element={<Landing />} />
              <Route path="/auth" element={<Auth />} />
              <Route path="/dashboard" element={<Dashboard />} />
              <Route path="/jobs" element={<Jobs />} />
              <Route path="/network" element={<div>Network Page</div>} />
              <Route path="/messages" element={<Messages />} />
              <Route path="/notifications" element={<Notifications />} />
              <Route path="/profile" element={<Profile />} />
            </Routes>
          </div>
          <MobileNav />
        </div>
      </Router>
    </AuthProvider>
  );
}

export default App; 