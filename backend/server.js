const express = require('express');
// const data =  require('./data.js');

const db = require('./config/keys').MONGOURI
const mongoose = require('mongoose');
// const dotenv = require('dotenv')
// dotenv.config();
const app = express();
//middlewares
app.use(express.json())
app.use(express.urlencoded({extended:true}));


mongoose.connect(db,{useNewUrlParser:true,useUnifiedTopology: true,useCreateIndex:true})


// app.get('/api/products/:id', (req, res) => {
//   const product = data.products.find((x) => x._id === req.params.id);
//   if (product) {
//     res.send(product);
//   } else {
//     res.status(404).send({ message: 'Product Not Found' });
//   }
// }); 

// app.get("/api/products", (req, res) => {
//   res.send(data.products);
// });


//routes
const userRouter = require('./router/userRouter.js');
const productRouter = require('./router/productRouter.js');
const orderRouter = require('./router/orderRouter.js');
const AddRouter = require('./router/AddRouter.js');



app.use('/api/users',userRouter);
app.use('/api/products',productRouter);
app.use('/api/orders',orderRouter);
app.use('/api',AddRouter);

app.get("/", (req, res) => {
  res.send("server is ready .........");
});

app.use((err,req,res,next)=>{
  res.status(500).send({message:err.message});
})

app.listen(5000, (req, res) => {
  console.log("server at http://localhost:5000");
});
