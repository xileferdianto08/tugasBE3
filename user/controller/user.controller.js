const userDb = require('../model/users')


//GET
exports.getAllUsers = async(req, res) =>{
    const data = await userDb.query()
    return res.status(200).send(data)
}

exports.getSpecificUsers = async(req, res) =>{
    const {nim} = req.params
    const data = await userDb.query().where({
        nim: nim
    })

    return res.status(200).send(data)
}

exports.getAllUsersDetail = async(req, res)=>{
    const data = await userDb.query()
    .join(
        'user_roles',
        'users.nim',
        '=',
        'user_roles.nim'
    )
    .join(
        'roles',
        'user_roles.role_id',
        '=',
        'roles.role_id'
    )
    .select(
        'users.nim as nim',
        'users.name as name',
        'users.password as password',
        'roles.role_name as role_name'
     
    )

    return res.status(200).send(data)
}

exports.getSpecificUsersDetail = async(req, res)=>{
    const {nim} = req.params
    const data = await userDb.query()
    .join(
        'user_roles',
        'users.nim',
        '=',
        'user_roles.nim'
    )
    .join(
        'roles',
        'user_roles.role_id',
        '=',
        'roles.role_id'
    )
    .select(
        'users.nim as nim',
        'users.name as name',
        'users.password as password',
        'roles.role_name as role_name'
     
    ).where({
        'users.nim':nim
    })

    return res.status(200).send(data)
}


exports.createUsers = async(req, res)=>{
    const {nim, name, password} = req.body
    await userDb.query().insert({
        nim: nim,
        name: name,
        password: password
    })

    return res.status(200).send({
        message: "Data berhasil ditambahkan"
    })
}


exports.updateUsers = async(req, res)=>{
    const param = req.params.nim
    const {name, password} = req.body

    await userDb.query()
    .update({
        name: name,
        password: password
    }).where({
        nim:param
    })

    return res.status(200).send({
        message: "Data berhasil diubah."
    })
}

exports.deleteUsers = async(req, res)=>{
    const {nim} = req.params
    await userDb.query().delete()
    .where({
        nim: nim
    })

    return res.status(200).send({
        message: "Data berhasil dihapus."
    })
}


