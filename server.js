const express = require('express');
const app = express();

app.use(express.json());

let products = [
  { id: 1, name: "Produk A", price: 10000 },
  { id: 2, name: "Produk B", price: 20000 }
];

app.get('/products', (req, res) => {
  res.status(200).json({
    status: "success",
    data: products,
    message: "Data produk berhasil diambil"
  });
});

app.get('/products/:id', (req, res) => {
  const product = products.find(p => p.id == req.params.id);
  if (!product) {
    return res.status(404).json({
      status: "error",
      message: "Produk tidak ditemukan"
    });
  }
  res.status(200).json({
    status: "success",
    data: product,
    message: "Produk ditemukan"
  });
});

app.post('/products', (req, res) => {
  const newProduct = {
    id: products.length + 1,
    name: req.body.name,
    price: req.body.price
  };
  products.push(newProduct);
  res.status(201).json({
    status: "success",
    data: newProduct,
    message: "Produk berhasil ditambahkan"
  });
});

app.put('/products/:id', (req, res) => {
  const product = products.find(p => p.id == req.params.id);
  if (!product) {
    return res.status(404).json({
      status: "error",
      message: "Produk tidak ditemukan"
    });
  }
  product.name = req.body.name;
  product.price = req.body.price;
  res.status(200).json({
    status: "success",
    data: product,
    message: "Produk berhasil diupdate"
  });
});

app.delete('/products/:id', (req, res) => {
  products = products.filter(p => p.id != req.params.id);
  res.status(200).json({
    status: "success",
    message: "Produk berhasil dihapus"
  });
});

app.listen(3000, () => {
  console.log("Server berjalan di http://localhost:3000");
});
