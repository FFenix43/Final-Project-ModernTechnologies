const express = require('express');
const router = express.Router();
const fs = require('fs');
const path = require('path');

router.get('/ai-predictions', (req, res) => {
  const filePath = path.join(__dirname, '../ai_model/customer_churn_predictions.json');
  fs.readFile(filePath, 'utf8', (err, data) => {
    if (err) {
      return res.status(500).json({ success: false, error: 'Predictions not found.' });
    }
    res.json({ success: true, ...JSON.parse(data) });
  });
});

module.exports = router;
