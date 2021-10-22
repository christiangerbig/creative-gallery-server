module.exports = (app) => {
  app.use((req, res) =>
    res.status(404).json({ errorMessage: "This route does not exist" })
  );

  app.use((err, req, res) => {
    console.error("ERROR", req.method, req.path, err);
    // Only render if the error ocurred before sending response
    if (!res.headersSent)
      res
        .status(500)
        .json({
          errorMessage: "Internal server error. Check the server console",
        });
  });
};


// export default (app) => {
//   app.use((req, res) =>
//     res.status(404).json({ errorMessage: "This route does not exist" })
//   );

//   app.use((err, req, res) => {
//     console.error("ERROR", req.method, req.path, err);
//     // Only render if the error ocurred before sending response
//     if (!res.headersSent)
//       res.status(500).json({
//         errorMessage: "Internal server error. Check the server console",
//       });
//   });
// };
