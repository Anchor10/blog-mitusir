 
 var User = require('./user.js')

 //模糊查询
 function getByRegex(){
     var whereStr = { 'username':{$regex:/m/i} };

     User.find(whereStr, function(err, res){
         if(err){
             console.log("Error:" + err);
         }else{
             console.log("Res:" + res)
         }
     })
 }

 //分页查询

 function getByPager() {
     var pageSize = 5;
     var currentPage = 1;
     var sort = { 'logindate': -1 };
     var condition = {};
     var skipnum = ( currentPage - 1 ) * pageSize;

     User.find(condition).skip(skipnum).limit(pageSize).sort(sort).exec(function(err,res){
         if(err){
             console.log('Error:' + err);
         }else{
             console.log('Res:' + res);
         }
     })
 }

 //根据id查询

 function findById(){
     var id = '56f261fb448779caa359cb73';
     User.findById(id,function(err,res){
         if(err){
             console.log('Error:' + err);
         }else{
             console.log('Res:' + res);
         }
     })
 }

 //数量查询

 function getCountByConditions(){
     var whereStr = {};
     User.count(whereStr,function(err,res){
         if(err){
             console.log('Error:' + err);
         }else{
             console.log('Res:' + res);
         }
     })
 }

 //条件查询

 function getByConditions(){
     var whereStr = {'username': 'Tracy Mcgrady'};
     User.find(whereStr, function(err,res){
         if(err){
             console.log('Error:' + err);
         }else{
             console.log('Res:' + res);
         }
     })
 }

 //删除

 function del(){
    var whereStr = {'username': 'Tracy Mcgrady'};
    User.remove(whereStr, function(err, res){
        if(err){
            console.log('Error:' + err);
        }else{
            console.log('Res' + res);
        }
    })
 }

//  更新

function update(){
    var whereStr = {'username': 'Tracy Mcgrady'};
    var updateStr = {'userpwd' : 'zzzz'};

    User.update(whereStr,updateStr, function(err, res){
        if(err){
            console.log('Error:' + err);
        }else{
            console.log('Res' + res);
        }
    })
}

// 插入

function insert(){
    var user = new User({
        username: 'Tracy McGrady',
        userpwd: 'abcd',
        userage: 37,
        logindate:new Date()
    })
    user.save(function(err,res){
        if(err){
            console.log('Error:' + err);
        }else{
            console.log('Res:' + res);
        }
    })
}

//其他操作

//索引和默认值

var mongoose = require('./db.js'),
    Schema = mongoose.Schema;

var UserSchema = new Schema({
    username: {
        type: String,
        index: true
    },
    userpwd: {
        type: String
    },
    userage: {
        type: Number
    },
    logindate: {
        type: Date,
        default: Date.now
    }

});

module.exports = mongoose.model('User', UserSchema);

//LBS 地理位置
