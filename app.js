const express = require('express')
const app = express()
const port = 3000
const web = require('./routes/web')



//view engine ejs
app.set('view engine', 'ejs')

//Css or image ka link
app.use(express.static('public'))













//route load
app.use('/' ,web)


 //server start(ye hamesha page k last mai hota hai)
app.listen(port, ()=>{
    console.log(`server start  localhost: ${port}`)
})

