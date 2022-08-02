// import React from 'react';
import PropTypes from 'prop-types';
import { IoPersonAddOutline } from 'react-icons/io5';
// import { nanoid } from 'nanoid';
import {FormContact, Label, Input, Button}  from './Form.styled';
import { Formik } from 'formik';



export const Form = ({onSubmit}) => {

// const initialValues = {
//      name: '',
//      number: '',
// }

  // const addContact = (values, { reset }) => {
  //   values.id = nanoid();
  //   onSubmit(values);
  //   reset();
  // };
  
      return (
        <Formik initialValues={{name: '',
        number: ''}} onSubmit={onSubmit}>
        <FormContact>
          <Label>
            Name
            <Input
              type="text"
              name="name"
              pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
              title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
              required
            />
          </Label>
          <Label>
            Number
            <Input
              type="tel"
              name="number"
              pattern="\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}"
              title="Phone number must be digits and can contain spaces, dashes, parentheses and can start with +"
              required
            />
          </Label>
          <Button type="submit"> <IoPersonAddOutline />Add contact</Button>
        </FormContact>
        </Formik>
      );
    
  }
  
  Form.propTypes = {
    onSubmit: PropTypes.func,
  };