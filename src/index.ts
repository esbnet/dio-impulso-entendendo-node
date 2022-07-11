import express from "express";
import { routes } from "./routes";

var server = express();
server.use(express.json());
server.use(routes);

server.listen(9999, () => {
	console.log("listening on port " + 9999);
});
