let conf=require("../config/db.js")
let util=require("../utils/util.js")
let $mysql=require("mysql")
let usersql=require("./usersql.js")

let pool=$mysql.createPool(util.extend({}),conf.mysql)
// 向前台返回JSON方法的简单封装
var jsonWrite = function (res, ret) {
	if(typeof ret === 'undefined') {
		res.json({
			code:'1',
			msg: '操作失败'
		});
	} else {
		res.json(ret);
	}
};
module.exports={
	add_user:function (req,res,next){
	// pool.getConnection(function(err,connection){

	// })

	let result={
		code:200,
		msg:"添加成功"
	}
	jsonWrite(res,result)
},


	update_user:function (req,res,next){
	// pool.getConnection(function(err,connection){
			
	// 	})
	let result={
		code:200,
		msg:"修改成功"
	}
	jsonWrite(res,result)
},

	delete_user:function (req,res,next){
	// pool.getConnection(function(err,connection){
			
	// 	})
	let result={
		code:200,
		msg:"删除成功"
	}
	jsonWrite(res,result)
},

	find_allUser:function (req,res,next){
	// pool.getConnection(function(err,connection){
			
	// 	})
	let result={
		code:200,
		msg:"查找成功"
	}
	jsonWrite(res,result)
},
	find_userById:function (req,res,next){
	// pool.getConnection(function(err,connection){
			
	// 	})
	let result={
		code:200,
		msg:"通过id查找成功"
	}
	jsonWrite(res,result)
}
}

