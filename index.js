const express = require('express');
const { resolve } = require('path');

const app = express();
const port = 3000;

let cors = require('cors');
app.use(cors());
let cart = [
  { productId: 1, name: 'Laptop', price: 50000, quantity: 1 },
  { productId: 2, name: 'Mobile', price: 20000, quantity: 2 }
];
function addItems(productId,name,price,quantity)
{
  let newItem={productId,name,price,quantity};
  cart.push(newItem);
  return cart;
}

app.get('/cart/add', (req, res) => {
  let productId=parseInt(req.query.productId);
  let name=req.query.name;
  let price=parseFloat(req.query.price);
  let quantity=parseInt(req.query.quantity);
  let result=addItems(productId,name,price,quantity);
  res.json({cartItems:result});
});


function editQuantityOfItem(cart,productId,quantity)
{
  for(let i=0;i<cart.length;i++)
  {
    if(cart[i].productId===productId)
    {
      cart[i].quantity=quantity;
      break;
    }
  }
  return cart;
}
app.get('/cart/edit',(req,res)=>{
  let productId=parseInt(req.query.productId);
  let quantity=parseInt(req.query.quantity);
  let cartItems=editQuantityOfItem(cart,productId,quantity);
  res.json({cartItems});
});

function deleteItem(productId)
{
  return cart.filter(item=>item.productId!==productId);
}
app.get('/cart/delete',(req,res)=>{
  let productId=parseInt(req.query.productId)
  let cartItems=deleteItem(productId);
  res.json({cartItems});
});

app.get('/cart',(req,res)=>{
  res.json(cart);
});

function calculateTotal(cart)
{
  let totalQuantity=0;
  for(let i=0;i<cart.length;i++)
  {
  totalQuantity+=cart[i].quantity
  }
  return totalQuantity;
}
app.get('/cart/total-quantity',(req,res)=>{
  let totalQuantity=calculateTotal(cart);
  res.json({totalQuantity});
});

function totalPriceOfItem(cart) {
  let totalPrice = 0;
  for (let i = 0; i < cart.length; i++) {
    totalPrice += cart[i].price;
  }
  return totalPrice;
}
app.get("/cart/total-price", (req, res) => {
  let totalPrice = totalPriceOfItem(cart);
  res.json({ totalPrice });
});


app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`);
});
