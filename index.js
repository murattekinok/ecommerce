const express = require('express');
const path = require('path');
const helmet = require('helmet');
const cors = require('cors');
const morgan = require('morgan');
const app = express();

// Middleware
app.use(express.json()); // JSON body parser
app.use(express.urlencoded({ extended: false })); // URL kodunu çözme

// Güvenlik middleware'leri
app.use(helmet()); // HTTP başlıklarını güvenli hale getirir
app.use(cors()); // Cross-Origin Resource Sharing (CORS) koruması sağlar

// Loglama
app.use(morgan('combined')); // HTTP isteklerini kaydetme

// Routes
app.use('/api/auth', require('./routes/auth')); // Authentication routes
app.use('/api/users', require('./routes/users')); // User routes

// Serve static files
app.use(express.static(path.join(__dirname, 'public')));

// Error handling middleware
app.use((err, req, res, next) => {
  console.error(err.stack);
  res.status(err.status || 500).json({ error: err.message });
});

// Server listening
const port = process.env.PORT || 3000;
app.listen(port, () => {
  console.log(`Server ${port} numaralı bağlantı noktasında çalışıyor`);
});
