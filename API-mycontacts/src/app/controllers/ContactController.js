const ContactsRepository = require('../repositories/ContactsRepository');
const contactsRepository = require('../repositories/ContactsRepository');

class ContactController {
   async index(request, response) {
        const contacts = await ContactsRepository.findAll();

        response.json(contacts);
    }

    show() {
        //Listar UM registro
    }

    store() {
        //criar novo registro
    }

    update() {
        //Editar um registro
    }

    delete() {
        //Deletar um registro
    }
};

//singleton
module.exports = new ContactController();
