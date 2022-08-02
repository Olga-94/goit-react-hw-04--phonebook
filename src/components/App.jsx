import { useState, useEffect } from 'react';
import { Box } from 'components/Box';
import { Title } from './Title/Title';
import { Form } from './Form/Form';
import { Filter } from './Filter/Filter';
import { ContactList } from './ContactList/List';
import { nanoid } from 'nanoid';

export const App = () => {
  const [contacts, setContacts] = useState(() => {
    return JSON.parse(localStorage.getItem('contacts'));
  });
  const [filter, setFilter] = useState('');

  useEffect(() => {
    localStorage.setItem('contacts', JSON.stringify(contacts));
  }, [contacts]);

 const addContact = (values, { reset }) => {
    if (
     contacts.find(
        cont => cont.name.toLowerCase() === values.name.toLowerCase(),
      )
    ) {
      alert(`${values.name} is already in contacts`);
      return;
    }

 const profile = {
    id: nanoid(),
    name: values.name,
    number: values.number,
  };
  setContacts(state => [...state, profile]);
    reset();
  };

  const changeFilter = e => {
    setFilter(e.currentTarget.value );
  };

  const getVisibleContact = () => {
    const normalFilter = filter.toLowerCase();
    return contacts.filter(contact =>
      contact.name.toLowerCase().includes(normalFilter),
    );
  }

 const deleteContact = (contactId) => {
    setContacts(state => state.filter(contact => contact.id !== contactId))
  };

    const visibleContacts = getVisibleContact();

    return (
      <Box 
      width="500px"
      bg="backgroundSection"
      boxShadow="outline"
      display="flex"
      alignItems="center"
      justifyContent="center"
      margin="20px auto"
      borderRadius="4px"
      flexDirection="column"
      >
      <Title title={'Phonebook'} />
      <Form onSubmit={addContact} />
      <Title title={'Contacts'} /> 
      <Filter value={filter} onChange={changeFilter} />
      <ContactList contacts={visibleContacts} onDeleteContact={deleteContact} />
     </Box>
    );
  }
