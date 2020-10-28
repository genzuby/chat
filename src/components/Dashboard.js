import React from 'react';
import { useConversation } from '../contexts/ConversationContext';
import OpenConversation from './OpenConversation';
import Sidbar from './Sidbar';

export default function Dashboard({ id }) {
  const { selectedConversation } = useConversation();

  return (
    <div className='d-flex' style={{ height: '100vh' }}>
      <Sidbar id={id} />
      {selectedConversation && <OpenConversation />}
    </div>
  );
}
