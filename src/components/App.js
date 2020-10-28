import React from 'react';
import Login from './Login';
import Dashboard from './Dashboard';
import useLocalStorage from '../hooks/useLocalStorage';
import ContactsProvider from '../contexts/ContactContext';
import ConversationProvider from '../contexts/ConversationContext';
import SocketProvider from '../contexts/SocketProvider';

function App() {
  const [id, setId] = useLocalStorage('id');
  const dashboard = (
    <SocketProvider id={id}>
      <ContactsProvider>
        <ConversationProvider id={id}>
          <Dashboard id={id} />
        </ConversationProvider>
      </ContactsProvider>
    </SocketProvider>
  );

  return id ? dashboard : <Login onIdSubmit={setId} />;
}

export default App;
