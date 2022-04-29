const userController = require('../controller/user.controller')

module.exports = function(app){
    //GET
    app.get(
        '/api/users',
        userController.getAllUsers
    )

    app.get(
        '/api/users/:nim',
        userController.getAllUsersDetail
    )

    app.get(
        '/api/usersDetail/',
        userController.getAllUsersDetail
    )

    app.get(
        '/api/usersDetail/:nim',
        userController.getSpecificUsersDetail
    )

    //POST
    app.post(
        '/api/users',
        userController.createUsers
    )

    //PUT
    app.put(
        '/api/users/:nim',
        userController.updateUsers
    )

    //DELETE
    app.delete(
        '/api/users/:nim',
        userController.deleteUsers
    )
}