import { createFakeContact } from '../utils/createFakeContact.js'; 
import { writeContacts } from '../utils/writeContacts.js';

export const generateContacts = async (number) => {
  const contacts = [];
  for (let i = 0; i < number; i++) {
    contacts.push(createFakeContact());
  }
  await writeContacts(contacts);
};
const number = parseInt(process.argv[2], 10) || 1;
generateContacts(number);
