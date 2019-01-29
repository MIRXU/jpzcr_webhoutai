let conf=require("../config/db.js")
let util=require("../utils/util.js")
let $mysql=require("mysql")
let jpzcrsql=require("./jpzcrsql.js")

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
module.export={
	
}