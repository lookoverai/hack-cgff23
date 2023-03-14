import flask
import os
import json
from db import dbname
from flask_cors import CORS, cross_origin

db = dbname()

a=flask.Flask(__name__)
cors = CORS(a)
a.config['CORS_HEADERS'] = 'Content-Type'





@a.route('/aws/benchmark/executequery',methods=['GET','POST'])
@cross_origin()
def AwsCompliance():
    s=flask.request.get_json()
    print(s)
    try:
        print("[System] Executing Query...")
        data=os.popen(s['query']).read()
        print("[System] Executed Query...")
        return(flask.jsonify(json.loads(data)))

    except Exception(err):
        data={"ERROR":"no data available."}
        return(flask.jsonify(data))


if __name__=='__main__':
    a.run(debug=True, host='0.0.0.0', port=5002)