const express = require("express");
const User = require("./models").user;
const app = express();
const PORT = 4000;

app.get("/users", async (req, res) => {
  const users = await User.findAll({
      where: {
          id: [1,2]
      }
  });
  res.send(users);
});

app.listen(PORT, () => console.log(`Server started in port: ${PORT}`));
