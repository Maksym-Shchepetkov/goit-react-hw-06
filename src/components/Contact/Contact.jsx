import { useDispatch } from 'react-redux';
import s from './Contact.module.css';
import { deleteContact } from '../../redux/contactsSlice';

const Contact = ({ info }) => {
  const dispatch = useDispatch();

  const handleDeleteContact = id => {
    dispatch(deleteContact(id));
  };
  return (
    <>
      <p>{info.name}</p>
      <p>{info.number}</p>
      <button onClick={() => handleDeleteContact(info.id)}>Delete</button>
    </>
  );
};

export default Contact;
