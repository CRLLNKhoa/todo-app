const UserService = require("../services/userService")

const createUser = async (req, res) => {
    try{
        const { account, password} = req.body
        if(!account || !password){
            return res.status(200).json({
                status: "ERR",
                massage:"Nhập chưa đủ thông tin!"
            })
        }
        const response = await UserService.createUser(req.body)
        return res.status(200).json(response)
    }
    catch(e){
        return res.status(404).json({
            message: e
        })
    }
}

const loginUser = async (req, res) => {
    try{
        const { account, password} = req.body
        if(!account || !password){
            return res.status(200).json({
                status: "ERR",
                massage:"Nhập chưa đủ thông tin!"
            })
        }
        const response = await UserService.loginUser(req.body)
        return res.status(200).json(response)
    }
    catch(e){
        return res.status(404).json({
            message: e
        })
    }
}

const changeAvatar = async (req, res) => {
    try{
        const {avatar} = req.body
        const Id = req.params.id;
        if(!avatar){
            return res.status(200).json({
                status: "ERR",
                massage:"Nhập chưa đủ thông tin!"
            })
        }
        const response = await UserService.changeAvatar(req.body,Id)
        return res.status(200).json(response)
    }
    catch(e){
        return res.status(404).json({
            message: e
        })
    }
}

module.exports = {
    createUser,
    loginUser,
    changeAvatar
}