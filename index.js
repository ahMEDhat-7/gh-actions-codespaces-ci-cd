import { createServer } from "http";

const server = createServer({});

server.on("request", (req, res) => {
  console.log(req.url);
  console.log(req.method);
  res.writeHead(200, { "Content-Type": "application/json" });
  res.end(
    JSON.stringify({
      data: "Hello World!",
    }),
  );
});

server.listen(3000, () => {
  console.log("server is up and listening...");
});
