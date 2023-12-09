const fs = require("fs");
const path = require("path");

const p = path.join(
  path.dirname(require.main.filename),
  "data",
  "products.json"
);

// function getProductsFromFile(cb){}
const getProductsFromFile = (cb) => {
  fs.readFile(p, (err, fileContent) => {
    if (err) {
      cb([]);
    } else {
      try {
        const products = JSON.parse(fileContent);
        cb(products);
      } catch (error) {
        console.error("Error parsing file: ", error);
        cb([]);
      }
    }
  });
};

module.exports = class Product {
  constructor(title, imageUrl, price, description, discount, prodname, quantity) {
    this.title = title;
    this.prodname = prodname;
    this.imageUrl = imageUrl;
    this.description = description;
    this.price = price;
    this.discount = discount;
    this.quantity = quantity;
  }
  // By using arrow function we can use this keyword inside the function
  // This will not work if we use normal function
  save() {
    this.id = Math.random().toString();
    getProductsFromFile((products) => {
      products.push(this);
      fs.writeFile(p, JSON.stringify(products), (err) => {
        console.log(err);
      });
    });
  }

  static fetchAll(cb) {
    getProductsFromFile(cb);
  }

  static findById(id, cb) {
    getProductsFromFile((products) => {
      const product = products.find((p) => p.id === id);
      cb(product);
    });
  }
};
