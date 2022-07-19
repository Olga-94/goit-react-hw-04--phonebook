import PropTypes from 'prop-types';
import { FiPhone } from 'react-icons/fi';
import { AiFillDelete } from 'react-icons/ai';
import { ListItem, Button } from './contactList.styled';

export const ContactListItem = ({id, name, number, onDeleteContact}) => {
    return (
        <ListItem key={id}>
          <FiPhone />
          {name}: {number}
          <Button onClick={() => onDeleteContact(id)}>
            <AiFillDelete />
            Delete
          </Button>
        </ListItem>
    )
}

ContactListItem.propTypes = {
    id: PropTypes.string,
    name: PropTypes.string,
    number: PropTypes.string,
    onDeleteContact: PropTypes.func,
  };