const express = require('express');
const cors = require('cors');

const app = express();
const PORT = 5000;

app.use(cors());
app.use(express.json());

app.post('/api/login', (req, res) => {
  const { email, password } = req.body;

  // Dummy login validation
  if (email === 'test@example.com' && password === 'password') {
    res.json({ success: true });
  } else {
    res.json({ success: false });
  }
});

app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});
