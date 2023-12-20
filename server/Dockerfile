# Pythonの公式イメージをベースにする
FROM python:3.8

# 作業ディレクトリを設定
WORKDIR /app

# requirements.txt を作業ディレクトリにコピー
COPY requirements.txt ./

RUN pip install --upgrade pip
RUN pip install -r requirements.txt
RUN pip install cryptography
# アプリケーションのソースをコンテナにコピー
COPY . .

# アプリケーションがリッスンするポートを指定
EXPOSE 2000

# アプリケーションを起動するコマンド
ENV FLASK_APP /usr/src/app/app.py

CMD ["flask", "run", "--host=0.0.0.0","--port=5001"]

