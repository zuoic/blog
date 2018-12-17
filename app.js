const express = require('express')
const app = express()
const bodyParser = require('body-parser')
const mysql = require('mysql')

const conn = mysql.createConnection({
    host:'127.0.0.1',
    database:'mysql_001',
    user:'root',
    password:'root'
})
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
    const body = req.body

    //判断用户输入的数据是否完整
if(body.username.trim().length<=0 || body.password.trim().length<=0 || body.nickname.trim().length<= 0){
    return res.send({msg:'请填写完整的表单数据后再注册',status:501})
}
//查询用户是否重复
const sql1 = 'select count(*) as count from blog_users where username=?'

conn.query(sql1, body.username, (err,result)=>{
    
    if(err) return res.send({msg:'用户名查重失败!',status:502})
    
})
    res.send({msg:'ok',status:200})
})

    //使用render函数之前  一定要保证安装 配置了ejs模板引擎
app.listen(80,()=>{
    console.log('http://127.0.0.1')
})