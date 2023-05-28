import { products } from "../../../data/products/products";

export default function handler(req, res) {
  const  category  = req.query.category;
  const filteredProducts = products.filter(
    (product) => product.category === category
  );

  res.status(200).json(filteredProducts);
}
