import "express-async-errors";
import express from "express";
import handleError from "./errors/handleError";
import contactRoutes from "./routes/contact.routes";
import loginRouter from "./routes/login.routes";
import userRoutes from "./routes/users.routes";
import cors from "cors";


const app = express();

app.use(express.json());
app.use(cors());
app.use("/users", userRoutes);
app.use("/login", loginRouter);
app.use("/contact", contactRoutes)

app.use(handleError);

export default app;
