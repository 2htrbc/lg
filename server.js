const express = require('express');
const fs = require('fs');
const { spawn } = require('child_process');

const app = express();
const PORT = 3000;

// DASH input
const MPD_URL = 'https://cdn-uw2-prod.tsv2.amagi.tv/linear/amg01006-abs-cbn-abscbn-gma-x7-dash-abscbnono/7c693236-e0c1-40a3-8bd0-bb25e43f5bfc/index.mpd';
const HLS_FOLDER = './hls';

// Make sure the folder exists
if (!fs.existsSync(HLS_FOLDER)) {
  fs.mkdirSync(HLS_FOLDER);
}

// Start FFmpeg HLS conversion
const ffmpeg = spawn('ffmpeg', [
  '-i', MPD_URL,
  '-c:v', 'libx264',
  '-c:a', 'aac',
  '-f', 'hls',
  '-hls_time', '5',
  '-hls_list_size', '6',
  '-hls_flags', 'delete_segments+append_list',
  '-hls_allow_cache', '0',
  `${HLS_FOLDER}/stream.m3u8`
]);

ffmpeg.stderr.on('data', data => {
  console.log(`FFmpeg log: ${data}`);
});

ffmpeg.on('close', code => {
  console.log(`FFmpeg exited with code ${code}`);
});

// Serve HLS folder
app.use('/hls', express.static(HLS_FOLDER));

// Root page info
app.get('/', (req, res) => {
  res.send(`
    <h2>🎥 IPTV HLS Restreaming</h2>
    <p>Your HLS link:</p>
    <code>https://${process.env.GITHUB_CODESPACES_PORT_3000_URL}hls/stream.m3u8</code>
  `);
});

app.listen(PORT, () => {
  console.log(`🚀 Server running at http://localhost:${PORT}`);
});
