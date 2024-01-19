require('dotenv').config();
const express = require('express')
const app = express()
const port = 3000

app.get('/', (req, res) => {
    res.send('<h1>Hello World!</h1>')
})
app.get('/twitter',(req, res) => {
    res.send('abhishek.twitter.com')
})
app.get('/login',(req,res)=>{
    res.send('<h1>please log in</h1>')
})
app.get('/youtube',(req,res)=>{
    res.send('<h2>chai aur code</h2>')
})

app.listen(port, () => {
    console.log(`Example app listening on port ${port}`)
})
