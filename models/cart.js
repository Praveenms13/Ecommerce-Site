const fs = require("fs");
const path = require("path");

const p = path.join(path.dirname(require.main.filename), "data", "cart.json");

module.exports = class Cart {
  static addproducts(id, productPrice) {
    // Fetch the Previous Cart
    fs.readFile(p, (err, fileContent) => {
      let cart = { products: [], totalprice: 0 };
      if (!err) {
        cart = JSON.parse(fileContent);
      }

      // Ensure that cart.products is always an array
      if (!Array.isArray(cart.products)) {
        cart.products = [];
      }

      // Analyzing the cart => Existing products
      const existingProductIndex = cart.products.findIndex(
        (prod) => prod.id === id
      );
      const existingProduct = cart.products[existingProductIndex];
      let updatedProduct;

      // Add new products or increase the quantity
      if (existingProduct) {
        updatedProduct = { ...existingProduct };
        updatedProduct.qty = updatedProduct.qty + 1;
        cart.products[existingProductIndex] = updatedProduct;
      } else {
        updatedProduct = { id: id, qty: 1 };
        cart.products.push(updatedProduct);
      }
      cart.totalprice = cart.totalprice + +productPrice;
      fs.writeFile(p, JSON.stringify(cart), (err) => {
        console.log(err);
      });
    });
  }
};
