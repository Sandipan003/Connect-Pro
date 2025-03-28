import React, { useState } from 'react';

function Notifications() {
  const [notifications, setNotifications] = useState([
    {
      id: 1,
      type: 'friend_request',
      user: 'Alice Smith',
      message: 'sent you a friend request',
      timestamp: '2 minutes ago',
      unread: true,
    },
    {
      id: 2,
      type: 'message',
      user: 'Bob Johnson',
      message: 'sent you a message',
      timestamp: '1 hour ago',
      unread: true,
    },
    {
      id: 3,
      type: 'job_application',
      user: 'TechCorp Inc.',
      message: 'viewed your job application',
      timestamp: '2 hours ago',
      unread: false,
    },
    {
      id: 4,
      type: 'post_like',
      user: 'Sarah Wilson',
      message: 'liked your post',
      timestamp: '3 hours ago',
      unread: false,
    },
    {
      id: 5,
      type: 'comment',
      user: 'Mike Brown',
      message: 'commented on your post',
      timestamp: '5 hours ago',
      unread: false,
    },
  ]);

  const handleAcceptFriendRequest = (id) => {
    // Here you would typically make an API call to accept the friend request
    console.log('Accepting friend request:', id);
  };

  const handleRejectFriendRequest = (id) => {
    // Here you would typically make an API call to reject the friend request
    console.log('Rejecting friend request:', id);
  };

  const getNotificationIcon = (type) => {
    switch (type) {
      case 'friend_request':
        return '👋';
      case 'message':
        return '💬';
      case 'job_application':
        return '💼';
      case 'post_like':
        return '❤️';
      case 'comment':
        return '💭';
      default:
        return '📢';
    }
  };

  return (
    <div className="max-w-2xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
      <div className="bg-white rounded-lg shadow-sm">
        <div className="p-4 border-b border-gray-200">
          <h2 className="text-lg font-semibold text-gray-900">Notifications</h2>
        </div>
        <div className="divide-y divide-gray-200">
          {notifications.map((notification) => (
            <div
              key={notification.id}
              className={`p-4 ${
                notification.unread ? 'bg-blue-50' : ''
              }`}
            >
              <div className="flex items-start space-x-3">
                <div className="flex-shrink-0">
                  <span className="text-2xl">
                    {getNotificationIcon(notification.type)}
                  </span>
                </div>
                <div className="flex-1">
                  <div className="flex items-center justify-between">
                    <p className="text-sm text-gray-900">
                      <span className="font-medium">{notification.user}</span>{' '}
                      {notification.message}
                    </p>
                    <span className="text-xs text-gray-500">
                      {notification.timestamp}
                    </span>
                  </div>
                  {notification.type === 'friend_request' && (
                    <div className="mt-2 flex space-x-2">
                      <button
                        onClick={() => handleAcceptFriendRequest(notification.id)}
                        className="btn-primary text-sm"
                      >
                        Accept
                      </button>
                      <button
                        onClick={() => handleRejectFriendRequest(notification.id)}
                        className="px-3 py-1 text-sm border border-gray-300 rounded-md text-gray-700 hover:bg-gray-50"
                      >
                        Reject
                      </button>
                    </div>
                  )}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default Notifications; 