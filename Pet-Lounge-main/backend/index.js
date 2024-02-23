const express = require('express')
const app = express()
const port = 5550
const mongoDB = require("./db")
mongoDB();

app.get('/', (req, res) => {
  res.send('Hello World!')
})

//middleware
app.use((req,res,next)=>{
  res.setHeader("Access-Control-Allow-Origin","http://localhost:3000");
  res.header(
    "Access-Control-Allow-Headers",
    "Origin,X-Requested-With,Content-Type,Accept"
  );
  next();
})
app.use(express.json())
app.use('/api',require("./routes/CreateUser"))
app.use(express.json())
app.use('/api',require("./routes/LoginUser"))
//app.use('/api',require("./routes/Profile"))
app.use('/api',require("./routes/DisplayData"))
app.use('/api',require("./routes/OrderData"))
app.use('/api',require("./routes/MyOrderData"))
app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})