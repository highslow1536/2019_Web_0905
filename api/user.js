const models = require('../models/user')

const create = async (req, res,next)=>{
    const {userid,username,userpassword} = req.body
    // await -> 동기
    await models.User.sync() // singleton pattern

    const user = models.User.build({email:userid,name:username,password:userpassword})
    await user.save().catch((e)=>{ // save commit
        console.log('error')
        console.log(e)
    }).then((r)=>{
        console.log('then')
        console.log(r)
    })
    res.status(201).json({ item: user })
}

const findAll = async (req, res,next)=>{
    models.User.findAll().then((data)=>{
        res.send(data)
    }).catch(err=>{
        console.log(err)
        res.status(500)
    })
}

module.exports = {
    create,
    findAll
}