require("dotenv/config");
require("./db");

const express = require("express");
const app = express();

// Run middlewares
require("./config")(app);

// Setup connect-mongo
const session = require("express-session");
const MongoStore = require("connect-mongo").default;

app.use(
  session(
    {
      secret: "NotMyAge",
      saveUninitialized: false,
      resave: false,
      cookie: {
        maxAge: 1000 * 60 * 60 * 24 // In milliseconds expiring in 1 day
      },
      store: new MongoStore(
        {
          mongoUrl: process.env.MONGODB_URI || "mongodb://localhost/creative-gallery",
          ttl: 60 * 60 * 24 // In seconds expiring in 1 day
        }
      )
    }
  )
);

const path = require('path');
app.use(express.static(path.join(__dirname, "public")));

// Routes
const allRoutes = require("./routes");
app.use("/api", allRoutes);

const contactRoutes = require("./routes/contact.routes");
app.use("/api", contactRoutes);

app.use(
  (req, res, next) => {
	  // If no routes match, send them the React HTML.
	  res.sendFile(__dirname + "/public/index.html");
  }
);

// Error handling
require("./error-handling")(app);

module.exports = app;