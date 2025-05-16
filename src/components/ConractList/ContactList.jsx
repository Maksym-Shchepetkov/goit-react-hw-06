import { useSelector } from 'react-redux';
import Contact from '../Contact/Contact';
import s from './ContactList.module.css';

const ContactList = () => {
  const contactInfo = useSelector(state => state.contacts.items);
  const filters = useSelector(state => state.filters.name);

  const filteredData = contactInfo.filter(item =>
    item.name.toLowerCase().includes(filters.toLowerCase())
  );

  return (
    <ul>
      {filteredData?.map(info => {
        return (
          <li key={info.id}>
            <Contact info={info} />
          </li>
        );
      })}
    </ul>
  );
};

export default ContactList;
