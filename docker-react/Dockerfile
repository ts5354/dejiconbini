# Node.jsのイメージを使用
FROM node:lts

# アプリケーションディレクトリを作成
WORKDIR /usr/src/app

# package.jsonをコピー
COPY app/digiconbini/package.json ./

# 依存関係をインストール
RUN npm install
RUN npm install --save-dev @babel/plugin-proposal-private-property-in-object


# アプリケーションのソースをコピー
COPY app/digiconbini/ .

# アプリケーションを起動
CMD ["npm", "start"]
