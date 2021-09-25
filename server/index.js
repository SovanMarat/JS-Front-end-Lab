const express = require('express');
const cors = require('cors');

const routerAuth = require('./authRouter');
const PORT = process.env.PORT || 8000;
const mongoose = require('mongoose');
const URL = 'mongodb+srv://labMS:labMS1991@cluster0.eirpc.mongodb.net/BD_users_netflix?retryWrites=true&w=majority';

const app = express();
app.use(express.json());
app.use(cors());
app.use('/auth', routerAuth);

const start = async () => {
  try {
    await mongoose.connect(URL);
    app.listen(PORT, () => {
      console.info(`Express listening on port ${PORT}`);
    });
  } catch (e) {
    console.log(e);
  }
};

start();
