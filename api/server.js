const express = require('express');
const app = express();

app.get('/health', (req, res) => res.send('OK'));
app.get('/', (req, res) => res.send('API is working!'));

app.listen(5000, () => console.log('API running on port 5000'));