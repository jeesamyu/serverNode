const express = require('express');
const app = express();
require('dotenv').config();
const cors = require('cors')

const port = process.env.PORT || 3000;

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.use(cors({
    origin: '*',
    methods: ['GET', 'POST', 'PUT', 'DELETE'],
    allowedHeaders: ['Content-Type', 'Authorization']
}));

app.get('/test', (req, res) => {
  res.send('Hello World!');
}
);

app.listen(port, () => {
    console.log(`Server is running on http://localhost:${port}`);
})