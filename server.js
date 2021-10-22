const app = require("./app");
const PORT = process.env.PORT || 5005;

const server = app.listen(PORT, () =>
  console.log(`Server listening on port http://localhost:${PORT}`)
);


// import express from "express";
// const app = express();

// const PORT = process.env.PORT || 5005;

// app.listen(PORT, () =>
//   console.log(`Server listening on port http://localhost:${PORT}`)
// );
