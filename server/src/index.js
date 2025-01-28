import "dotenv/config";
import { app } from "./app";

app.listen(process.env.PORT || 8000, () => {
  console.log(`⚙️  Server is running at port: ${process.env.PORT}`);
});
