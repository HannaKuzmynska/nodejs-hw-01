import { readContacts } from '../utils/readContacts.js';

export const countContacts = async () => {
  try {
    // Зчитуємо всі контакти з файлу db.json
    const contacts = await readContacts();

    // Повертаємо кількість контактів
    return contacts.length;
  } catch (error) {
    console.error('Error counting contacts:', error);
    return 0; // У разі помилки повертаємо 0
  }
};

console.log(await countContacts());
