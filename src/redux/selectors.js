// import { createSelector } from '@reduxjs/toolkit';

export const selectWords = state => state.words.items;

// export const getContacts = state => state.contacts;

// export const getFilteredContacts = createSelector(
//   [getContacts, getFilterValue],
//   (contacts, value) => {
//     return contacts.filter(contact => {
//       return contact.name.toLowerCase().includes(value.toLowerCase().trim());
//     });
//   }
// );
