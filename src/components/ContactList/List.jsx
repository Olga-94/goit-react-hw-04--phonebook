import React from 'react';
import PropTypes from 'prop-types';
import { ContactsList} from './contactList.styled';
import {ContactListItem} from './ListItem';
export const ContactList = ({ contacts, onDeleteContact }) => {
  return (
    <ContactsList>
      {contacts.map(contact => (
        <ContactListItem
          key={contact.id}
          name={contact.name}
          number={contact.number}
          id={contact.id}
          onDeleteContact={onDeleteContact}
        />
      ))}
    </ContactsList>
  );
};

ContactList.propTypes = {
  contacts: PropTypes.array,
  onDeleteContact: PropTypes.func,
};
