import { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import s from '../app.module.css';
import {
  selectContacts,
  selectError,
  selectFilter,
} from '../../redux/contacts/selectors';
import { deleteContact, fetchContacts } from '../../redux/contacts/operations';

const ContactList = () => {
  const items = useSelector(selectContacts);
  const filterName = useSelector(selectFilter);
  const dispatch = useDispatch();

  const error = useSelector(selectError);
  useEffect(() => {
    dispatch(fetchContacts());
  }, [dispatch]);

  const filterContacts = () => {
    if (filterName) {
      const filterLow = filterName.toLowerCase().trim();
      return items.filter(({ name }) => name.toLowerCase().includes(filterLow));
    } else {
      return items;
    }
  };

  const filteredContacts = filterContacts();
  return (
    <>
      <div>{error && <b>{error}</b>}</div>

      <ul className={s.items}>
        {filteredContacts.map(({ id, name, number }) => {
          return (
            <li className={s.item} key={id}>
              <div>{name}:</div>
              <div> {number}</div>

              <button
                className={s.buttonDel}
                onClick={() => dispatch(deleteContact(id))}
                type="button"
              >
                Delete
              </button>
            </li>
          );
        })}
      </ul>
    </>
  );
};

export default ContactList;
