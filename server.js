// 個人鏈接頁後端：只做三件事——託管靜態頁面、返回服務器時間、計數訪問人數
// 關鍵：端口必須讀環境變量 PORT（Infrlo 要求應用監聽 5000，寫死端口會 Bad Gateway）
const express = require('express');
const path = require('path');

const app = express();
const PORT = process.env.PORT || 5000;

let visits = 0; // 存在內存里，應用重啓後歸零，演示用

app.use(express.static(path.join(__dirname, 'public')));

app.get('/api/time', (req, res) => {
  res.json({ time: new Date().toISOString() });
});

app.get('/api/visits', (req, res) => {
  visits += 1;
  res.json({ visits });
});

app.listen(PORT, '0.0.0.0', () => {
  console.log(`server running at http://localhost:${PORT}`);
});
