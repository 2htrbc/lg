const express = require('express');
const { spawn } = require('child_process');
const fs = require('fs');
const app = express();
const PORT = 8080;

// Clean old streams
if (!fs.existsSync('./hls')) fs.mkdirSync('./hls');

app.get('/stream.m3u8', (req, res) => {
  const mpdUrl = 'https://cdn-uw2-prod.tsv2.amagi.tv/linear/amg01006-abs-cbn-abscbn-gma-x7-dash-abscbnono/7c693236-e0c1-40a3-8bd0-bb25e43f5bfc/index.mpd';

  const ffmpeg = spawn('ffmpeg', [
    '-i', mpdUrl,
    '-c:v', 'copy',
    '-c:a', 'aac',
    '-f', 'hls',
    '-hls_time', '5',
    '-hls_list_size', '5',
    '-hls_flags', 'delete_segments',
    '-hls_allow_cache', '0',
    './hls/stream.m3u8'
  ]);

  ffmpeg.stderr.on('data', data => {
    console.log(`FFmpeg: ${data}`);
  });

  ffmpeg.on('close', code => {
    console.log(`FFmpeg process exited with code ${code}`);
  });

  res.sendFile(__dirname + '/hls/stream.m3u8');
});

app.use('/hls', express.static('./hls'));

app.listen(PORT, () => {
  console.log(`🎬 HLS restream available at http://localhost:${PORT}/stream.m3u8`);
});
