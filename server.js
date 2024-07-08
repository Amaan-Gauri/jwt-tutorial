const app = require("./app");
const mongoose = require("mongoose");
(async function connectingDataBase() {
  try {
    await mongoose
      .connect(
        "mongodb+srv://itsarhu20:Ly8q1hFtgJBo0MqR@cluster0.xfbcfhw.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0"
      )
      .then(() => {
        console.log("database is connected successfully");
      });
  } catch (err) {
    console.log("Bhai server connect nahi hua hai aur problem ye hai" + err);
  }
})();

app.listen(3000, () => {
  console.log("Server chal raha hai");
});
