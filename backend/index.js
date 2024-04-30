const express = require('express');
const cors = require('cors'); // Import the CORS middleware
const app = express();
const port = 5000;
const mongoDB = require("./db");
mongoDB();

// Use the CORS middleware
app.use(cors());

app.get('/', (req, res) => {
  res.send('Hello World!');
});

app.use(express.json());
app.use('/api', require("./Routes/CreateUser"));
app.use('/api', require("./Routes/Logincreate"));
app.use('/api', require("./Routes/DisplayData"));

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`);
});
