const User = require("../models/userModel");
const bcrypt = require("bcrypt");

const createUser = (newUser) => {
    return new Promise(async (resolve, reject) => {
      const { account, password } = newUser;
      try {
          const checkUser = await User.findOne({
              account
          })
          if(checkUser !== null){
              resolve({
                  status: "ERR",
                  message: "Tài khoản đã tồn tại!"
              })
          }
          const hash = bcrypt.hashSync(password, 10)
          if(checkUser === null){
            const created = await User.create({
              account,
              password: hash,
            });
            resolve({
              status: "OK",
              message: "SUCCESS",
              data: created,
            });
          }
      } catch (e) {
        reject(e);
      }
    });
  };
  
  const loginUser = (userLogin) => {
    return new Promise(async (resolve, reject) => {
      const { account, password} = userLogin;
      try {
          const checkUser = await User.findOne({
              account: account
          })
          if(checkUser === null){
              resolve({
                  status: "ERR",
                  message: "Không tìm thấy tài khoản!"
              })
          }
          const comparePassword = bcrypt.compareSync(password, checkUser.password)
        if (!comparePassword) {
          resolve({
            status: "ERR",
            message: "Mật khẩu sai!",
          });
        }
        resolve({
          status: "OK",
          message: "Login success!",
          data: checkUser
        })
      } catch (e) {
        reject(e);
      }
    });
  };

  const changeAvatar = (data, id) => {
    return new Promise(async (resolve, reject) => {
      try {
        const checkUser = await User.findOne({
          _id: id,
        });
        if (checkUser === null) {
          resolve({
            status: "ERR",
            message: "Không tìm thấy tài khoản!",
          });
        }
  
        const update = await User.findByIdAndUpdate(id, data, { new: true });
  
        resolve({
          status: "OK",
          message: "Đổi avatar thành công!",
          data: update,
        });
      } catch (e) {
        reject(e);
      }
    });
  };

  module.exports = {
    createUser,
    loginUser,
    changeAvatar
  };