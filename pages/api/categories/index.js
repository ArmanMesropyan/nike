export default function handler(request, response) {
  if (request.method === "GET") {
    response
      .status(200)
      .json([
        `Men's Shoes`,
        `Women's Shoes`,
        `Men's clothes`,
        `Women's clothes`,
      ]);
  }
}
