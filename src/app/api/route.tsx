export async function GET(request: Request) {
  console.log(request);

  // return Response.json({ message: "Hello, world!" });
  return new Response("Hello, world!");
}
