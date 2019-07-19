var mongoose = require("mongoose");

module.exports = new mongoose.Schema({
	//用户名：
	username: {
		type: String,
		required:true
	},
	//邮箱
	email: {
		type: String,
		required:true
	},
	//密码
	password: {
		type: String,
		required:true
	},
	//是否是管理员
	isAdmin: {
		type: Boolean,
		default: false
  }
})