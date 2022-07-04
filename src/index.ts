import express from "express";
import routes from "./routes";
const app = express();

app.use("/api", routes);

const port = 3000;
app.listen(port, () => {
  console.log(`server is up and running on port: ${port}`);
});

export default app;
