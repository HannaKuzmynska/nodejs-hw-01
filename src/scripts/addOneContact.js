import { readContacts } from '../utils/readContacts.js';
import { writeContacts } from '../utils/writeContacts.js';
import { createFakeContact } from '../utils/createFakeContact.js';
export const addOneContact = async () => {
  try {
    // Зчитуємо вже існуючі контакти
    const existingContacts = await readContacts();

    // Генеруємо один новий контакт
    const newContact = createFakeContact();

    // Додаємо новий контакт до існуючих
    const updatedContacts = [...existingContacts, newContact];

    // Записуємо оновлений список контактів у файл
    await writeContacts(updatedContacts);

    console.log('One new contact successfully added!');
  } catch (error) {
    console.error('Error adding one contact:', error);
  }
};

addOneContact();
