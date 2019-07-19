var express = require('express')

var router = express.Router()

var fs = require('fs');
var marked = require( "marked" );

const sendMail = require('./email');

var Article = require('../models/Article')
var User = require("../models/User");
var Category = require("../models/Category");

var validateCode;
var data;
//首先走这个方法
router.use(function(req, res, next){
    data={
        userInfo: req.userInfo,
        categories: []
    }
    next();
})

router.get('/', function(req, res, next){
    // var categoryid = req.query.categoryid || "";

    // data.page = req.query.page || 1;
    // data.limit = 10;
    // data.count = 0;
    // data.category = categoryid;

    // var where = {};

    // if(data.category){
    //     where.category = data.category;
    // }
    // Article.countDocuments().where(where).then(function(count){
    //     data.count = count;
    //     data.pages = Math.ceil(data.count / data.limit);
    //     data.page = Math.min(data.page, data.pages);
    //     data.page = Math.max(data.page, 1);
    //     var skip = (data.page - 1) * data.limit;
    //     return Article.find().where(where).limit(data.limit).skip(skip).sort({_id:-1}).populate(['category', 'user']);
    // }).then(function(articles){
    //     data.articles = articles;
    //     console.log(data.articles)
    //     res.render("index.html",{
    //         data
    //     })
    // })
    Article.find({}).exec(function(err,data){
        if(err){
            console.log(err)
        }else{
            res.render('index.html',{
                data
            })
        }
        
    })


    // fs.readFile('./public/year2017.md', function(err, data){
    //     if(err){
    //         console.log(err);
    //         res.send("No Found !");
    //     }else{
    //         str = marked(data.toString());
    //        res.render('index.html',{
    //         data:'hahaha',
    //         str:str
    //     })
    //     }
    // });
    
})

// router.get('/md', function(req, res) {
//     fs.readFile('./public/year2017.md', function(err, data){
//         if(err){
//             console.log(err);
//             res.send("No Found !");
//         }else{
//             str = marked(data.toString());
//            res.json(str);
//         }
//     });
// })

router.get('/add', function(req, res){
    res.render('edit.html')
})
router.get('/article/add', function(req, res){
    if(req.body.category == ""){
		res.render("admin/error", {
			message: "内容分类不能为空"
		})
		return;
    }
    if(req.body.title == ""){
		res.render("admin/error", {
			message: "标题不能为空"
		})
		return;
    }
    new Article({
		category: '5cfe1a31cd0a884f083960cd',
		title: 'node服务器的搭建10',
		body: 'node服务器的搭建node服务器的搭建'
	}).save().then(function(rs){
        console.log(rs)
		res.render("index.html", {
			data
		})
		return ;
	})
})

router.get('/login', function(req, res){
    res.render('login.html')
})

router.get('/register', function(req, res){
    res.render('register.html')
})



// 注册逻辑
var count = '' //新建一个空字符串用来存放邮箱验证码

// 邮箱验证接口
router.post("/sendmail", (req, res) => {
    count = ""; //初始化验证码容器
    var mail = req.body.email; //获取前端传来的邮箱号
    for (let i = 0; i < 4; i++) {
        count += Math.floor(Math.random() * 10); //生成4个随机数
    }
    var callback = () => {
        console.log("发送成功");
    };
    sendMail.send(mail, count, callback); //调用邮件发送模块
    res.send('send');
});

router.post('/register', function(req, res){
    var username = req.body.username;
    var email = req.body.email;
    var password = req.body.password;


    User.find({isAdmin:false}, function(err, data){
        if(err){
            console.log(err);
            return;
        }
        res.json(data)
        console.log(data)
    })

})

module.exports = router