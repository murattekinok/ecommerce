const express = require('express');
const path = require('path'); // path modülünü içeri alın

const app = express();

// Express sunucusu başlat
const port = process.env.PORT || 3000;
app.listen(port, () => {
  console.log(`Sunucu ${port} portunda çalışıyor.`);
});

// React uygulamasını sunucuyla entegre et
app.use(express.static(path.join(__dirname, 'build')));

app.get('/', (req, res) => {
  res.sendFile(path.join(__dirname, 'build', 'index.html'));
});
