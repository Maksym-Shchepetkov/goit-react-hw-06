import s from './App.module.css';
import ContactList from '../ConractList/ContactList';
import ContactForm from '../ContactForm/ContactForm';
import SearchBar from '../SearchBar/SearchBar';

const App = () => {
  return (
    <div className={s.wrapper}>
      <ContactForm />
      <SearchBar />
      <ContactList />
    </div>
  );
};

export default App;
