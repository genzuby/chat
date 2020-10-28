import React, { createContext, useContext } from 'react';
import useLocalStorage from '../hooks/useLocalStorage';

export const ContactContext = createContext();
export function useContacts() {
  return useContext(ContactContext);
}

export default function ContactsProvider(props) {
  const [contacts, setContacts] = useLocalStorage('contacts', []);
  const createContact = (id, name) => {
    setContacts((prevcontacts) => [...prevcontacts, { id, name }]);
  };

  return (
    <ContactContext.Provider value={{ contacts, createContact }}>
      {props.children}
    </ContactContext.Provider>
  );
}
