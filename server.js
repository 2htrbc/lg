const express = require('express');
const request = require('request');
const app = express();
const PORT = 3000;

// DASH base URL
const DASH_BASE = 'https://cdn-uw2-prod.tsv2.amagi.tv/linear/amg01006-abs-cbn-abscbn-gma-x7-dash-abscbnono/7c693236-e0c1-40a3-8bd0-bb25e43f5bfc/';

// Proxy DASH content
app.get('/dash/:file(*)', (req, res) => {
  const filePath = req.params.file;
  const targetUrl = DASH_BASE + filePath;
  console.log(`Proxying: ${targetUrl}`);
  req.pipe(request(targetUrl)).pipe(res);
});

// Info route
app.get('/', (req, res) => {
  res.send(`
    <h2>🎥 IPTV DASH Proxy is Running</h2>
    <p>Use this MPD URL in your player:</p>
    <code>https://${process.env.GITHUB_CODESPACES_PORT_3000_URL}dash/index.mpd</code>
  `);
});

app.listen(PORT, () => {
  console.log(`✅ Server running at http://localhost:${PORT}`);
});
