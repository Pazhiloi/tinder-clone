import React from 'react';
import Chat from './Chat';
import "./Chats.css";
const Chats = () => {
  return (
    <div className='chats'>
      <Chat
        name='Mark'
        message='Yo whats up'
        timestamp='40 seconds ago'
        profilePic='...'
      />
      <Chat
        name='Billy'
        message='Welcome to the club buddy'
        timestamp='5 years ago'
        profilePic='...'
      />
      <Chat
        name='Bold Man'
        message='Sorry for what?'
        timestamp='2 years ago'
        profilePic='...'
      />
    </div>
  );
};

export default Chats;