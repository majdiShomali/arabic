const express = require("express");
const cors = require("cors");
const PORT = process.env.PORT;
const mongoose = require("mongoose");
const userRouts = require('./routes/userRouter');
const recipesRouts = require('./routes/recipesRouter');
const sponsorRouts = require('./routes/sponsorRouter');
const ingredientRouts = require('./routes/ingredientRouter');
const notFoundHandler = require('./middleware/404');
const dbURI = "mongodb+srv://majdishomali1997:uVxsL6cXyv6CIZv8@cluster0.pacgw6a.mongodb.net/ArabicRecipes"
const errorHandler = require('./middleware/500')
const Protected = require('./middleware/Protected')
const aboutUsRouts = require('./routes/aboutUsRouter');
const paymentRouts = require('./routes/paymentRouter');

const app = express();
app.use(cors());

const path = require("path");
app.use("/public", express.static(path.join(__dirname, "public")));

app.use(express.json());


app.get("/", (req, res) => {
  res.send("Welcome");
});


// const authController = require('./controllers/authController');
// app.use('/api/auth', authController);



app.use(userRouts);
app.use(sponsorRouts);
app.use(recipesRouts);
app.use(aboutUsRouts);
app.use(ingredientRouts);
app.use(paymentRouts);
app.use('*',notFoundHandler);
app.use(errorHandler);
app.use(Protected)







module.exports = {
  server: app,
  start: () => {
    mongoose
      .connect(dbURI, { useNewUrlParser: true, useUnifiedTopology: true })
      .then(() => {
        app.listen(PORT, () => {
          console.log(`Starting server on port ${PORT}`);
        });
      });
  },
};