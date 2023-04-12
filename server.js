const mongoose = require("mongoose"); // для Бази Даних
const { app } = require("./app");

const { DB_HOST, PORT = 8081 } = process.env; // змінні оточення

// щоб запустити сервер + бд:
mongoose
  .connect(DB_HOST)
  .then(() => console.log("Database connection successful"))
  .then(
    app.listen(PORT, (err) => {
      if (err) {
        console.error("error at server launch: ", err);
      }
      console.log(`Server works at port: ${PORT}`);
    })
  )
  .catch((err) => {
    console.log(err.message);
    process.exit(1);
  });
