const { uuid } = require('uuidv4');

const contacts = [
    {
        id: uuid(),
        name: 'Josiane',
        email: 'josird432@gmail.com',
        phone: '5498546628',
        category_id: uuid(),
    },
];

class ContactsRepository {
    findAll() {
        return new Promise((resolve, reject) => resolve(contacts));
    }
}

module.exports = new ContactsRepository();

