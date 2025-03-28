import React, { useState } from 'react';

function Messages() {
  const [messages, setMessages] = useState([
    {
      id: 1,
      sender: 'Alice Smith',
      text: 'Hey! I saw your latest design work. It looks amazing!',
      timestamp: '10:30 AM',
      unread: true,
    },
    {
      id: 2,
      sender: 'Bob Johnson',
      text: 'Would you be interested in collaborating on a new project?',
      timestamp: 'Yesterday',
      unread: false,
    },
  ]);

  const [activeChat, setActiveChat] = useState(null);
  const [newMessage, setNewMessage] = useState('');

  const handleSendMessage = (e) => {
    e.preventDefault();
    if (!newMessage.trim()) return;

    // Here you would typically make an API call to send the message
    console.log('Sending message:', newMessage);
    setNewMessage('');
  };

  return (
    <div className="flex h-[calc(100vh-4rem)]">
      {/* Chat List */}
      <div className="w-1/3 border-r border-gray-200 bg-white">
        <div className="p-4 border-b border-gray-200">
          <h2 className="text-lg font-semibold text-gray-900">Messages</h2>
        </div>
        <div className="overflow-y-auto h-full">
          {messages.map((message) => (
            <div
              key={message.id}
              className={`p-4 cursor-pointer hover:bg-gray-50 ${
                activeChat === message.id ? 'bg-gray-50' : ''
              }`}
              onClick={() => setActiveChat(message.id)}
            >
              <div className="flex items-center justify-between">
                <div className="flex items-center space-x-3">
                  <div className="h-10 w-10 rounded-full bg-primary/10 flex items-center justify-center">
                    <span className="text-primary font-bold">
                      {message.sender[0]}
                    </span>
                  </div>
                  <div>
                    <h3 className="font-medium text-gray-900">
                      {message.sender}
                    </h3>
                    <p className="text-sm text-gray-500 truncate max-w-[200px]">
                      {message.text}
                    </p>
                  </div>
                </div>
                <div className="text-right">
                  <span className="text-xs text-gray-500">{message.timestamp}</span>
                  {message.unread && (
                    <div className="mt-1 h-2 w-2 bg-primary rounded-full mx-auto"></div>
                  )}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Chat Window */}
      <div className="flex-1 flex flex-col bg-white">
        {activeChat ? (
          <>
            <div className="p-4 border-b border-gray-200">
              <div className="flex items-center space-x-3">
                <div className="h-10 w-10 rounded-full bg-primary/10 flex items-center justify-center">
                  <span className="text-primary font-bold">
                    {messages.find((m) => m.id === activeChat)?.sender[0]}
                  </span>
                </div>
                <div>
                  <h3 className="font-medium text-gray-900">
                    {messages.find((m) => m.id === activeChat)?.sender}
                  </h3>
                  <p className="text-sm text-gray-500">Online</p>
                </div>
              </div>
            </div>

            <div className="flex-1 overflow-y-auto p-4 space-y-4">
              {/* Message bubbles would go here */}
              <div className="flex justify-end">
                <div className="bg-primary text-white rounded-lg py-2 px-4 max-w-[70%]">
                  <p>Hi! Thanks for your message. I'd love to collaborate!</p>
                </div>
              </div>
              <div className="flex justify-start">
                <div className="bg-gray-100 text-gray-900 rounded-lg py-2 px-4 max-w-[70%]">
                  <p>Great! Let's discuss the project details.</p>
                </div>
              </div>
            </div>

            <form onSubmit={handleSendMessage} className="p-4 border-t border-gray-200">
              <div className="flex space-x-4">
                <input
                  type="text"
                  value={newMessage}
                  onChange={(e) => setNewMessage(e.target.value)}
                  placeholder="Type a message..."
                  className="input-field flex-1"
                />
                <button type="submit" className="btn-primary">
                  Send
                </button>
              </div>
            </form>
          </>
        ) : (
          <div className="flex-1 flex items-center justify-center text-gray-500">
            Select a conversation to start messaging
          </div>
        )}
      </div>
    </div>
  );
}

export default Messages; 