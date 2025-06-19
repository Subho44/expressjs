const express = require('express');
const app = express();
const port = 5700;
const products = require('./data/product');

app.use(express.json());

//data view
app.get('/api/products',(req,res)=>{
    res.json(products);
});
//single data view
app.get('/api/products/:id',(req,res)=>{
    const productid = parseInt(req.params.id);
    const product = products.find(p=>p.id === productid);
    if(product) {


        res.json(product);
    } else {
        res.status(404).json({message:'product not found'});
    }
    
});
//start server
app.listen(port,()=>{
    console.log("server is running port 5700");
})
