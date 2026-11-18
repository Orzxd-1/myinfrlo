# 個人鏈接頁demo

一個超小的 Node.js 個人鏈接頁，部署在 Infrlo 免費檔上就能跑。不用數據庫，不用綁卡。

## 本地運行

```bash
npm install
npm start
```

打開 http://localhost:5000

## 部署到 Infrlo

1. 把這個倉庫推到你自己的 GitHub
2. Infrlo 控制台新建應用，選 Public Git URL，填這個倉庫地址，分支 main
3. 構建命令：`npm install`
4. 運行命令：`npm start`
5. 環境變量：`PORT=5000`
6. 部署成功後打開分配的地址就能看到

## 改成你自己的

- 改 `public/index.html` 里的名字、簡介和四個鏈接
- 頭像那個字也在 `index.html` 里改

## 說明

- 訪問人數存在內存里，應用重啓後歸零，演示用
- 端口讀環境變量 `PORT`，不要寫死，否則 Infrlo 上會報 Bad Gateway
