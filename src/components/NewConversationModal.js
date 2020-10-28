import React, { useState } from 'react';
import { Modal, Form, Button } from 'react-bootstrap';
import { useContacts } from '../contexts/ContactContext';
import { useConversation } from '../contexts/ConversationContext';

export default function NewConversationModal({ closeModal }) {
  const { contacts } = useContacts();
  const { createConversation } = useConversation();
  const [selectedContactIds, setSelectedContactIds] = useState([]);

  const handleSubmit = (e) => {
    e.preventDefault();
    createConversation(selectedContactIds);
    closeModal();
  };

  const handleCheckBoxChange = (contactId) => {
    setSelectedContactIds((preSelectedContactIds) => {
      if (preSelectedContactIds.includes(contactId)) {
        return preSelectedContactIds.filter((prevId) => contactId !== prevId);
      } else {
        return [...preSelectedContactIds, contactId];
      }
    });
  };

  return (
    <>
      <Modal.Header closeButton>Create Contact</Modal.Header>
      <Modal.Body>
        <Form onSubmit={handleSubmit}>
          {contacts.map((contact) => (
            <Form.Group controlId={contact.id} key={contact.id}>
              <Form.Check
                type='checkbox'
                value={selectedContactIds.includes(contact.id)}
                label={contact.name}
                onChange={() => handleCheckBoxChange(contact.id)}
              ></Form.Check>
            </Form.Group>
          ))}
          <Button type='submit'>Create</Button>
        </Form>
      </Modal.Body>
    </>
  );
}
