const Product = require("../models/product");
// /admin/products => GET
exports.getProducts = (req, res, next) => {
  Product.fetchAll((products) => {
    res.render("admin/products", {
      prods: products,
      pageTitle: "Admin Products",
      path: "/admin/products",
    });
  });
};

// /admin/add-product => GET
exports.getAddProduct = (req, res, next) => {
  res.render("admin/edit-product", {
    pageTitle: "Add Product",
    path: "/admin/add-product",
    editing: false,
  });
};

// /admin/add-product => POST
exports.postAddProduct = (req, res, next) => {
  const title = req.body.title;
  const imageUrl = req.body.imageUrl;
  const price = req.body.price;
  const description = req.body.description;
  const discount = req.body.discount;
  const prodname = req.body.prodname;
  const quantity = req.body.quantity;
  const product = new Product(null, title, imageUrl, price, description, discount, prodname, quantity);
  product.save();
  res.redirect("/");
};

// /admin/edit-product => GET
exports.getEditProduct = (req, res, next) => {
  const editMode = req.query.edit;
  if (!editMode) return res.redirect("/");
  const prodId = req.params.productId;
  Product.findById(prodId, (product) => {
    if (!product) return res.redirect("/");
    res.render("admin/edit-product", {
      pageTitle: "Edit Product", 
      path: "/admin/edit-product",
      editing: editMode,
      product: product,
    });
  });
}; 

// /admin/edit-product => POST
exports.postEditProduct = (req, res, next) => {
  const prodId = req.body.productId;
  const title = req.body.title;
  const imageUrl = req.body.imageUrl;
  const price = req.body.price;
  const description = req.body.description;
  const discount = req.body.discount;
  const prodname = req.body.prodname;
  const quantity = req.body.quantity;
  const updatedProduct = new Product(prodId, title, imageUrl, price, description, discount, prodname, quantity);
  updatedProduct.save();
  res.redirect("/admin/products");
};