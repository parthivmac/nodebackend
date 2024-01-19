require('dotenv').config()
const express = require('express')
const app = express()
const port = 3000
const githubData = {
    "login": "abkmac",
    "id": 77147430,
    "node_id": "MDQ6VXNlcjc3MTQ3NDMw",
    "avatar_url": "https://avatars.githubusercontent.com/u/77147430?v=4",
    "gravatar_id": "",
    "url": "https://api.github.com/users/abkmac",
    "html_url": "https://github.com/abkmac",
    "followers_url": "https://api.github.com/users/abkmac/followers",
    "following_url": "https://api.github.com/users/abkmac/following{/other_user}",
    "gists_url": "https://api.github.com/users/abkmac/gists{/gist_id}",
    "starred_url": "https://api.github.com/users/abkmac/starred{/owner}{/repo}",
    "subscriptions_url": "https://api.github.com/users/abkmac/subscriptions",
    "organizations_url": "https://api.github.com/users/abkmac/orgs",
    "repos_url": "https://api.github.com/users/abkmac/repos",
    "events_url": "https://api.github.com/users/abkmac/events{/privacy}",
    "received_events_url": "https://api.github.com/users/abkmac/received_events",
    "type": "User",
    "site_admin": false,
    "name": "Abhishek Macwan",
    "company": null,
    "blog": "",
    "location": null,
    "email": null,
    "hireable": null,
    "bio": null,
    "twitter_username": null,
    "public_repos": 2,
    "public_gists": 0,
    "followers": 0,
    "following": 1,
    "created_at": "2021-01-08T09:18:20Z",
    "updated_at": "2024-01-17T10:10:04Z"
  }

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
app.get('/github',(req,res)=>{
    res.json(githubData);
})
app.listen(process.env.PORT, () => { 
    console.log(`Example app listening on port ${port}`)
})
