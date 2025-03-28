import React from 'react';
import { Link, useLocation } from 'react-router-dom';
import { HomeIcon, UserGroupIcon, BriefcaseIcon, ChatBubbleLeftRightIcon, BellIcon, UserCircleIcon } from '@heroicons/react/24/outline';

function MobileNav() {
  const location = useLocation();

  const isActive = (path) => location.pathname === path;

  return (
    <div className="fixed bottom-0 left-0 right-0 bg-white border-t border-gray-200 md:hidden">
      <div className="flex justify-around items-center h-16">
        <Link
          to="/dashboard"
          className={`flex flex-col items-center ${
            isActive('/dashboard') ? 'text-primary' : 'text-gray-600'
          }`}
        >
          <HomeIcon className="h-6 w-6" />
          <span className="text-xs mt-1">Home</span>
        </Link>
        <Link
          to="/network"
          className={`flex flex-col items-center ${
            isActive('/network') ? 'text-primary' : 'text-gray-600'
          }`}
        >
          <UserGroupIcon className="h-6 w-6" />
          <span className="text-xs mt-1">Network</span>
        </Link>
        <Link
          to="/jobs"
          className={`flex flex-col items-center ${
            isActive('/jobs') ? 'text-primary' : 'text-gray-600'
          }`}
        >
          <BriefcaseIcon className="h-6 w-6" />
          <span className="text-xs mt-1">Jobs</span>
        </Link>
        <Link
          to="/messages"
          className={`flex flex-col items-center ${
            isActive('/messages') ? 'text-primary' : 'text-gray-600'
          }`}
        >
          <ChatBubbleLeftRightIcon className="h-6 w-6" />
          <span className="text-xs mt-1">Messages</span>
        </Link>
        <Link
          to="/notifications"
          className={`flex flex-col items-center ${
            isActive('/notifications') ? 'text-primary' : 'text-gray-600'
          }`}
        >
          <BellIcon className="h-6 w-6" />
          <span className="text-xs mt-1">Notifications</span>
        </Link>
        <Link
          to="/profile"
          className={`flex flex-col items-center ${
            isActive('/profile') ? 'text-primary' : 'text-gray-600'
          }`}
        >
          <UserCircleIcon className="h-6 w-6" />
          <span className="text-xs mt-1">Profile</span>
        </Link>
      </div>
    </div>
  );
}

export default MobileNav; 