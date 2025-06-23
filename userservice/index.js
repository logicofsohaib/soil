const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');

const app = express();

const corsOptions = {
  origin: 'http://13.232.202.17:3000', // Frontend URL and port
  optionsSuccessStatus: 200,
};

app.use(cors(corsOptions));
app.use(express.json());

const userRoutes = require('./routes/userRoutes');
app.use('/api', userRoutes);

// MongoDB URI (Docker internal network name for mongo service)
const mongoUri = 'mongodb://mongo:27017/userdb';

mongoose.connect(mongoUri)
  .then(() => console.log('✅ MongoDB connected'))
  .catch(err => console.error('❌ MongoDB connection error:', err));

app.get('/', (req, res) => {
  res.send('User Service is running 🚀');
});

const PORT = 3003;
app.listen(PORT, '0.0.0.0', () => {
  console.log(`✅ User Service listening on port ${PORT}`);
});
