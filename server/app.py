from flask import Flask, jsonify, request
from flask_sqlalchemy import SQLAlchemy
from flask_cors import CORS

app = Flask(__name__)
app.config['SQLALCHEMY_DATABASE_URI'] = 'sqlite:///your_local_database_file.db'
db = SQLAlchemy(app)

# CORS設定
CORS(app, resources={r"/*": {"origins": "http://localhost:3000"}})

class Points(db.Model):
    id = db.Column(db.Integer, primary_key=True)
    value = db.Column(db.Integer, default=0)

@app.route('/increment_point', methods=['POST'],endpoint='increment_point')
def increment_point():
    point = Points.query.first()
    if not point:
        point = Points(value=10)  # 初期値を10に設定
    else:
        point.value += 10  # 既存のポイントに10を加算
    db.session.add(point)
    db.session.commit()
    return jsonify({"success": True, "new_value": point.value})
    # ポイントをインクリメントするロジックをここに追加
@app.route('/decrement_point', methods=['POST'],endpoint='decrement_point')
def increment_point():
    point = Points.query.first()
    if not point:
        point = Points(value=-10)  # 初期値を10に設定
    else:
        point.value -= 10  # 既存のポイントに10を加算
    db.session.add(point)
    db.session.commit()
    return jsonify({"success": True, "new_value": point.value})


@app.route('/get_points', methods=['GET'])
def get_points():
    point = Points.query.first()
    if point:
        return jsonify({"points": point.value})
    else:
        # データが存在しない場合はデフォルト値を返す
        return jsonify({"points": 0})
    # ポイントを取得するロジックをここに追加
    

with app.app_context():
    db.create_all()

if __name__ == '__main__':
    app.run(debug=True, port=2000)

