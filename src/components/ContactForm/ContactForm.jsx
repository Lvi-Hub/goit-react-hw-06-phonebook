import React from 'react';
import css from './ContactForm.module.css';
import { nanoid } from 'nanoid';
import { useDispatch } from 'react-redux';
import { addContact } from '../../redux/contactSlice';

export function ContactForm() {
  const dispatch = useDispatch();

  const handleSubmit = e => {
    e.preventDefault();
    const form = e.target;

    dispatch(
      addContact({
        name: e.target.elements.name.value.toString(),
        number: e.target.elements.number.value.toString(),
        id: nanoid(),
      })
    );

    form.reset();
  };

  return (
    <form className={css.submitForm} onSubmit={handleSubmit}>
      <label className={css.labelName}>
        Name
        <input
          type="text"
          name="name"
          pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
          title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
          required
        />
      </label>
      <label className={css.labelNumber}>
        Number
        <input
          type="tel"
          name="number"
          pattern="\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}"
          title="Phone number must be digits and can contain spaces, dashes, parentheses and can start with +"
          required
        />
      </label>
      <button className={css.submitBtn} type="submit" onSubmit={handleSubmit}>
        Add contact
      </button>
    </form>
  );
}
