var express = require("express")
var mysql = require("mysql")

const app = express()
const PORT = process.env.PORT || 5000;
app.listen(PORT,()=>{
    console.log("Server is running")
})
app.get('/',(req,res)=>{
    res.send('<html><body><h1>Hello from Main Page</h1></body></html>')
})
var con = mysql.createConnection(()=>{
    host : "localhost"
    username: "sumitgupta"
    password: "123456"
})
con.connect((err)=>{
    if (err) {
        console.log(err)
    }
    console.log("Database created")
})
