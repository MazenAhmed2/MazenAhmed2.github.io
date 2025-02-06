const express = require('express')

const app = express()
app.use('/', express.static('./static'))

app.get('/', (req, res)=>{
    htmlPage = res.sendFile('./static/index.html')
    htmlPage.pipe(res)
})

app.listen(8000)