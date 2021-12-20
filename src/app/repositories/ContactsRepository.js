const { uuid } = require('uuidv4');

const contacts = [
  {
    id: uuid(),
    name: 'Douglas',
    email: 'douglaspo_97@outlook.com',
    phone: '1234',
    category_id: uuid(),
  },
];

class ContactsRepository {
  findAll() {
    return new Promise((resolve) => {
      resolve(contacts);
    });
  }
}

module.exports = new ContactsRepository();
