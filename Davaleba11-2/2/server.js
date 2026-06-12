const http = require("http");
const url = require("url");
const fs = require("fs");

const server = http.createServer((req, res) => {
  const parsedUrl = url.parse(req.url, true);
  const pathname = parsedUrl.pathname;
  const method = req.method;

  if (method === "GET" && pathname === "/about") {
    res.writeHead(200, { "content-type": "application/json" });
    return res.end(
      JSON.stringify({
        name: "Dimitri",
        role: "Full-Stack Engineer",
        hobby: "Coding",
      }),
    );
  }

  if (method === "GET" && pathname === "/players") {
    const fileData = fs.readFileSync("players.json", "utf-8");
    const players = JSON.parse(fileData);

    const nationQuery = parsedUrl.query.nation;

    if (nationQuery) {
      const filteredPlayers = players.filter(
        (player) => player.nation.toLowerCase() === nationQuery.toLowerCase(),
      );
      res.writeHead(200, { "content-type": "application/json" });
      return res.end(JSON.stringify(filteredPlayers));
    }

    res.writeHead(200, { "content-type": "application/json" });
    return res.end(JSON.stringify(players));
  }

  if (method === "POST" && pathname === "/players") {
    let body = "";
    req.on("data", (chunk) => {
      body += chunk;
    });
    req.on("end", () => {
      const parsedBody = JSON.parse(body);

      if (!parsedBody.name || !parsedBody.nation || !parsedBody.age) {
        res.writeHead(400, { "content-type": "application/json" });
        return res.end(
          JSON.stringify({
            message: "ყველა ველი სავალდებულოა (name, nation, age)",
          }),
        );
      }

      const fileData = fs.readFileSync("players.json", "utf-8");
      const players = JSON.parse(fileData);

      const lastId = players[players.length - 1]?.id || 0;
      const newPlayer = {
        id: lastId + 1,
        name: parsedBody.name,
        nation: parsedBody.nation,
        age: Number(parsedBody.age),
      };

      players.push(newPlayer);
      fs.writeFileSync(
        "players.json",
        JSON.stringify(players, null, 2),
        "utf-8",
      );

      res.writeHead(201, { "content-type": "application/json" });
      return res.end(
        JSON.stringify({ message: "Player created successfully" }),
      );
    });
  }

  if (method === "DELETE" && pathname.startsWith("/players/")) {
    const playerId = pathname.split("/")[2];

    const fileData = fs.readFileSync("players.json", "utf-8");
    const players = JSON.parse(fileData);

    const index = players.findIndex((player) => player.id === Number(playerId));

    if (index === -1) {
      res.writeHead(404, { "content-type": "application/json" });
      return res.end(JSON.stringify({ message: "Player not found" }));
    }

    players.splice(index, 1);
    fs.writeFileSync("players.json", JSON.stringify(players, null, 2), "utf-8");

    res.writeHead(200, { "content-type": "application/json" });
    return res.end(JSON.stringify({ message: "Player deleted successfully" }));
  }

  res.writeHead(404, { "content-type": "application/json" });
  return res.end(JSON.stringify({ message: "Route not found" }));
});

server.listen(4000, () => {
  console.log("Server running on port http://localhost:4000");
});
