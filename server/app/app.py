from flask import Flask, jsonify, request
from flask_sqlalchemy import SQLAlchemy
from flask_cors import CORS
import logging
import pymysql
pymysql.install_as_MySQLdb()

app = Flask(__name__)
# ログレベルをDEBUGに設定
logging.basicConfig(level=logging.DEBUG)

# Flaskのデフォルトロガーを使用
logger = app.logger
app.config['SQLALCHEMY_DATABASE_URI'] = 'mysql://admin:Yukishiro0712@database-1.cyg88c2shco5.ap-northeast-1.rds.amazonaws.com/digiconbini'
db = SQLAlchemy(app)

# CORS設定
CORS(app, resources={r"/*": {"origins": "http://localhost:3000"}})

class Points(db.Model):
    id = db.Column(db.Integer, primary_key=True)
    name=db.Column(db.String(255))
    value = db.Column(db.Integer, default=0)

@app.route('/opening', methods=['POST'])
def opening():
    data = request.json
    name = data.get('name')
    existing_user = Points.query.filter_by(name=name).first()
    if existing_user:
        return jsonify({"error": "Name already exists"}), 400
    
    new_user = Points(name=name, value=100)
    db.session.add(new_user)
    db.session.commit()
    return jsonify({"id": new_user.id, "name": new_user.name, "value": new_user.value})
    
@app.route('/increment_point', methods=['POST'],endpoint='increment_point')
def increment_point():
    data = request.json
    point_id = data.get("id")
    point = Points.query.get(point_id)
    if point:
        point.value += 10
        db.session.commit()
        return jsonify({"id": point.id, "name": point.name, "value": point.value})
    else:
        return jsonify({"error": "Point not found"}), 404

    # ポイントをインクリメントするロジックをここに追加
@app.route('/decrement_point', methods=['POST'],endpoint='decrement_point')
def decrement_point():
    data = request.json
    point_id = data.get("id")
    point = Points.query.get(point_id)
    if point:
        point.value -= 20
        db.session.commit()
        return jsonify({"id": point.id, "name": point.name, "value": point.value})
    else:
        return jsonify({"error": "Point not found"}), 404


@app.route('/get_points', methods=['GET'])
def get_points():
    points = Points.query.all()  # すべてのポイントを取得
    points_list = [{"id": point.id, "name": point.name, "value": point.value} for point in points]
    return jsonify(points_list)



with app.app_context():
    db.create_all()

if __name__ == '__main__':
    app.run(debug=True, port=2000)

