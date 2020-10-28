import React from 'react';
import { ListGroup } from 'react-bootstrap';
import { useConversation } from '../contexts/ConversationContext';

export default function Conversations() {
  const { conversations, selectedConversationIndex } = useConversation();

  return (
    <ListGroup variant='flush'>
      {conversations.map((conversation, idx) => {
        return (
          <ListGroup.Item
            key={idx}
            action
            onClick={() => selectedConversationIndex(idx)}
            active={conversation.selected}
            className='rounded-0'
          >
            {conversation.recipients
              .map((recipient) => recipient.name)
              .join(',')}
          </ListGroup.Item>
        );
      })}
    </ListGroup>
  );
}
