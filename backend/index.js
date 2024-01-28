
const express = require("express");

const cors = require("cors"); 
require("./db/config");
const product =require('./db/Product')
const User = require('./db/User');
const app = express();

app.use(express.json()); 
app.use(cors());

app.post("/register", async (req, resp) => {
let user = new User(req.body);
let result = await user.save();
result = result.toobject();
delete result.password; 
resp.send(result);

})


app.post("/login", (req, resp)=>{
    console.log(req.body)
    if(req.body.password && req.body.email){
        let user = await User.findOne(req.body).select("-password");
        if(user){
            resp.send(user)
        }
        else{
            resp.send({result:"No User Found"})
        }

    }
    else{
        resp.send({result:"No User Found"})
    }

   
})

app.post("/add-product", async(req, resp)=>{
    let product = new Product(req, body);
    let result = await product.save();
    resp.send(result)
})

app.get("/products",async(req,resp)=>{
    let products = await Product.find();
    if(products.length>0){
        resp.send(products)

    }else{
        resp.send({result:"No Products Found"})
    }
    


})

app.listen(5000);