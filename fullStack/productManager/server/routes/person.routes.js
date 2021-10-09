const PersonController = require('../controllers/person.controller')
module.exports = function(app){
    app.get('/api', PersonController.index);
    app.post('/api/people', PersonController.createPerson);
    app.get('/api/people', PersonController.getAllPeople);
    app.get('/api/people/:id', PersonController.getPerson);
    app.put('/api/people/:id', PersonController.updatePerson);
    
}


// const PersonController = require('../controllers/person.controller');
// module.exports = function(app){
//     app.get('/api', PersonController.index);
//     app.post('/api/people', PersonController.createPerson);     /* This is new */
// }

