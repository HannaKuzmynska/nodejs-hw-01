import { readContacts } from '../utils/readContacts.js';
export const getAllContacts = async () => {
  try {
    // Зчитуємо всі контакти з файлу db.json
    const contacts = await readContacts();

    // Повертаємо масив контактів
    return contacts;
  } catch (error) {
    console.error('Error getting contacts:', error);
    return [];
  }
};

console.log(await getAllContacts());
