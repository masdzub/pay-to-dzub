const express = require('express');
const path = require('path');
const fs = require('fs');
const app = express();
const port = 3000;

// Load bank and e-wallet data
const bankData = JSON.parse(fs.readFileSync(path.join(__dirname, 'data', 'bank.json'), 'utf8'));

// Set up EJS
app.set('view engine', 'ejs');
app.set('views', path.join(__dirname, 'views'));

// Serve static files
app.use(express.static(path.join(__dirname, 'public')));

// Routes
app.get('/', (req, res) => {
  res.render('index', {
    profile: bankData.profile,
    bankAccounts: bankData.bankAccounts,
    ewallets: bankData.ewallets
  });
});

app.listen(port, () => {
  console.log(`Server is running on http://localhost:${port}`);
});