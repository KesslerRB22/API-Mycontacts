const { Router, response } = require('express');
const contactController = require('./app/controllers/ContactController');
const ContactController = require('./app/controllers/ContactController');

const router = Router();

router.get('/contacts',ContactController.index,);
router.get('/contacts/:id', ContactController.show);
router.delete('/contacts/:id', ContactController.delete);
router.post('/contacts', ContactController.store);
router.put('/contacts/:id',ContactController.update);

module.exports = router;
