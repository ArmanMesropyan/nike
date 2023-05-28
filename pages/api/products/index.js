import { products } from "@/data/products/products";

export default function handler(request, response) {
  if (request.method === "GET") {
    response.status(200).json(products);
  }
}
