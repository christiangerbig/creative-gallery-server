import configMiddlewares from "./config/index";
import express, { static } from "express";
import session from "express-session";
import MongoStore from "connect-mongo";
import { join } from "path";
import allRoutes from "./routes";
import contactRoutes from "./routes/contact.routes";
import errorHandling from "./error-handling";

const app = express();

configMiddlewares(app); // Run middlewares

app.use(
  session({
    secret: "NotMyAge",
    saveUninitialized: false,
    resave: false,
    cookie: {
      maxAge: 1000 * 60 * 60 * 24, // In milliseconds expiring in 1 day
    },
    store: new MongoStore({
      mongoUrl:
        process.env.MONGODB_URI || "mongodb://localhost/creative-gallery",
      ttl: 60 * 60 * 24, // In seconds expiring in 1 day
    }),
  })
);

app.use(static(join(__dirname, "public")));

// Routes
app.use("/api", allRoutes);
app.use("/api", contactRoutes);
app.use(
  (req, res) => res.sendFile(__dirname + "/public/index.html") // If no routes match, send React HTML
);

// Error handling
errorHandling(app);

export default app;
