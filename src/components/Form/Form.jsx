import { Component } from 'react';
import PropTypes from 'prop-types';
import { IoPersonAddOutline } from 'react-icons/io5';
import { nanoid } from 'nanoid';
import {FormContact, Label, Input, Button}  from './Form.styled';

export class Form extends Component {
    state = {
      name: '',
      number: '',
    };
  
    addContact = e => {
      e.preventDefault();
      this.props.onSubmit({
        id: nanoid(),
        name: this.state.name,
        number: this.state.number,
      });
      this.reset();
    };
  
    inputChange = e => {
      const { name, value } = e.currentTarget;
      this.setState({ [name]: value });
    };
  
    reset = () => {
      this.setState({ name: '', number: '' });
    };
    render() {
      return (
        <FormContact onSubmit={this.addContact}>
          <Label>
            Name
            <Input
              type="text"
              name="name"
              value={this.state.name}
              pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
              title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
              required
              onChange={this.inputChange}
            />
          </Label>
          <Label>
            Number
            <Input
              type="tel"
              name="number"
              value={this.state.number}
              pattern="\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}"
              title="Phone number must be digits and can contain spaces, dashes, parentheses and can start with +"
              required
              onChange={this.inputChange}
            />
          </Label>
          <Button type="submit"> <IoPersonAddOutline />Add contact</Button>
        </FormContact>
      );
    }
  }
  
  Form.propTypes = {
    onSubmit: PropTypes.func,
  };