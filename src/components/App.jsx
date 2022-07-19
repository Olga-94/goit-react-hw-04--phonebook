import { Component } from 'react';
import { Box } from 'components/Box';
import { Title } from './Title/Title';
import { Form } from './Form/Form';
import { Filter } from './Filter/Filter';
import { ContactList } from './ContactList/List';

export class App extends Component  {
  state = {
    contacts: [],
    filter: '',
  };

  addContact = contact => {
    if (
      this.state.contacts.find(
        cont => cont.name.toLowerCase() === contact.name.toLowerCase(),
      )
    ) {
      alert(`${contact.name} is already in contacts`);
      return;
    }

    this.setState(({ contacts }) => ({
      contacts: [contact, ...contacts],
    }));
  };

  changeFilter = e => {
    this.setState({ filter: e.currentTarget.value });
  };

  getVisibleContact = () => {
    const { filter, contacts } = this.state;
    const normalFilter = filter.toLowerCase();
    return contacts.filter(contact =>
      contact.name.toLowerCase().includes(normalFilter),
    );
  };

  deleteContact = contactId => {
    this.setState(state => ({
      contacts: state.contacts.filter(contact => contact.id !== contactId),
    }));
  };

  componentDidMount() {
    const contacts = JSON.parse(localStorage.getItem("contacts"));
  
      if (contacts) {
        this.setState({ contacts });
      }
    }
  
  componentDidUpdate(_, state) {
    const { contacts } = this.state;
      if (state.contacts !== contacts) {
        localStorage.setItem("contacts", JSON.stringify(contacts));
      }
  }

  render() {
    const visibleContacts = this.getVisibleContact();

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
      <Form onSubmit={this.addContact} />
      <Title title={'Contacts'} /> 
      <Filter value={this.state.filter} onChange={this.changeFilter} />
      <ContactList contacts={visibleContacts} onDeleteContact={this.deleteContact} />
     </Box>
    );
  }
}
