const express = require("express");
const mongoose = require("mongoose");
const bodyParser = require("body-parser");
const passport = require("passport");
const users = require("./routes/api/users");
const expenses = require('./routes/expenses');
const monthlyBudget = require('./routes/monthlyBudgets');
const app = express();
var cors = require('cors'); 


app.use(cors());
app.use((request, response, next) => {
  response.setHeader('Access-Control-Allow-Origin', '*');
  response.setHeader('Access-Control-Allow-Methods', 'GET, POST, OPTIONS, PUT, PATCH, DELETE');
  response.setHeader('Access-Control-Allow-Headers', 'X-Requested-With,content-type');
  response.setHeader('Access-Control-Allow-Credentials', true);
  next();
});

app.get('/expense', (request, response) => {
  response.json(require('./expense.json'));
});


// Bodyparser middleware
app.use(
  bodyParser.urlencoded({
    extended: false
  })
);
app.use(bodyParser.json());

// DB Config
const db = require("./config/keys").mongoURI;
// Connect to MongoDB
mongoose
  .connect(
    db,
    { useNewUrlParser: true, useUnifiedTopology: true  },
    
  )
  .then(() => console.log("MongoDB successfully connected"))
  .catch(err => console.log(err));

// Passport middleware
app.use(passport.initialize());
// Passport config
require("./config/passport")(passport);
// Routes
app.use("/api/users", users);
app.use('/expenses', expenses);
app.use('/monthlyBudgets', monthlyBudget)

app.get('/')
const port = process.env.PORT || 8080; // process.env.port is Heroku's port if you choose to deploy the app there
app.listen(port, () => console.log(`Server up and running on port ${port} !`));