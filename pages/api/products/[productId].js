import { products } from "@/data/products/products";
export default function handler(request, response) {
  const {productId} = request.query;
  if (request.method === "GET") {
    const product = products.find(
      (product) => product.id == productId
    );
    response.status(200).json(product);
   
  }
}
