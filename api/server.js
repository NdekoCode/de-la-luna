import { createServer } from "http";
import app from "./app.js";

export const PORT = process.env.PORT || 3000;
const server = createServer(app);
server.listen(PORT, () => {
  console.log(`Server is listening at ${PORT} https://localhost:${PORT}`);
});
