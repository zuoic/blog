const express = require('express')
const app = express()
//设置默认采用的模板引擎名称
app.set('view engine','ejs')
//设置模板页面的存放路径
app.set('views','./views')


//把node_modules文件夹托管静资源目录
app.use('/node_modules',express.static('./node_modules'))

//用户请求的 项目首页
app.get('/',(req,res)=>{
    res.render('./index.ejs',{})
})

//用户请求的  注册页面
app.get('/register',(req,res)=>{
    res.render('./user/register.ejs',{})
})

//用户请求的  登录页面
app.get('/login',(req,res)=>{
    res.render('./user/login.ejs',{})
})

//注册新用户
app.post('/register',(req,res)=>{
    res.send({msg:'ok',status:200})
})

    //使用render函数之前  一定要保证安装 配置了ejs模板引擎
app.listen(80,()=>{
    console.log('http://127.0.0.1')
})