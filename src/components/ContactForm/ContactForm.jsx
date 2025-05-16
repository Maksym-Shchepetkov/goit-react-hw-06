import { Field, Form, Formik } from 'formik';
import s from './ContactForm.module.css';
import { nanoid } from '@reduxjs/toolkit';
import { useDispatch } from 'react-redux';
import { addContact } from '../../redux/contactsSlice';
import { useId } from 'react';
import { changeFilter } from '../../redux/filtersSlice';

const ContactForm = () => {
  const dispatch = useDispatch();
  const nameId = useId();
  const phoneId = useId();
  const initialValue = {
    name: '',
    number: '',
  };

  const handleAddContacts = (values, action) => {
    const newContact = {
      id: nanoid(),
      name: values.name,
      number: values.number,
    };
    dispatch(addContact(newContact));
    dispatch(changeFilter(''));
    action.resetForm();
  };

  return (
    <Formik initialValues={initialValue} onSubmit={handleAddContacts}>
      <Form className={s.form}>
        <label htmlFor={nameId} className={s.label}>
          Name :<Field type="text" name="name" id={nameId} />
        </label>
        <label htmlFor={phoneId} className={s.label}>
          Number:
          <Field type="tel" name="number" id={phoneId} />
        </label>
        <button type="submit">Add contact</button>
      </Form>
    </Formik>
  );
};

export default ContactForm;
