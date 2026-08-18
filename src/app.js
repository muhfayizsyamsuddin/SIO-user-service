const express = require('express');
const cors = require('cors');
const app = express();

app.use(express.json());
app.use(cors({
  origin: "https://sioms.faizms.com",
  methods: ["GET", "POST", "PUT", "DELETE"],
  allowedHeaders: ["Content-Type", "Authorization"],
  credentials: true,
}));

const userRouter = require('./routers/user');
const authRouter = require('./routers/auth');

app.use('/users', userRouter);
app.use('/auth', authRouter);

app.get('/health', (req, res) => {
  res.json({
    service: 'user-service',
    status: 'OK'
  });
});

module.exports = app;