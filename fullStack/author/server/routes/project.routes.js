const ProjectController = require('../controllers/project.controller');

module.exports= function(app){
    app.get("/api/health",ProjectController.index )
}