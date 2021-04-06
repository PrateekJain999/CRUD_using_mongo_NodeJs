const userModel= require('../models/userModel');

let userService = {};

userService.registerUser = async (payload) => {
  return await userModel(payload).save();
};


userService.updateUser = async (criteria,dataToUpdate) => {
  let userData = await userService.getUser(criteria);
  let updatedUserData = await userModel.findOneAndUpdate(criteria, dataToUpdate);
  return updatedUserData;
};

userService.deleteUser = async (criteria) => {
  let userData = await userService.getUser(criteria);
  let updatedUserData = await userModel.deleteMany(criteria);
  return updatedUserData;
};

userService.getUser = async (criteria) => {
  let data = await userModel.findOne(criteria,function(err,msg){
    console.log(msg)
  })
  return data
};

userService.getUsers = async (criteria) => {
  return await userModel.find(criteria);
};


module.exports = userService;