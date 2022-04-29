const userRolesController = require('../controller/user_role.controller')

module.exports = function(app){
    //GET
    app.get(
        '/api/user_roles',
        userRolesController.getAllUR
    )

    app.get(
        '/api/user_roles/:nim',
        userRolesController.getSpecificUR
    )

    //POST
    app.post(
        '/api/user_roles',
        userRolesController.createUR
    )

    //PUT
    app.put(
        '/api/user_roles/:nim',
        userRolesController.updateUR
    )

    //DELETE
    app.delete(
        '/api/user_roles/:nim',
        userRolesController.deleteUR
    )
}