import flask
import os
import json
from db import dbname
db = dbname()

a=flask.Flask(__name__)

@a.route('/executequery',methods=['GET','POST'])
def LoadData():
    s=flask.request.get_json()
    try:
        print("[System] Executing query...")
        data=os.popen(s['query']).read()
        return(flask.jsonify(json.loads(data)))
    except Exception:
        data={"ERROR":"no data available."}
        return(flask.jsonify(data))


if __name__=='__main__':
    a.run(debug=True, port=5002)


@a.route('/aws/benchmark/executequery',methods=['GET','POST'])
def AwsCompliance():
    s=flask.request.get_json()
    collection_name = s['aws']
    try:

        if s['op'] == "audit_manager":
            print("[System] Executing query...")
            data=os.popen(s['query']).read()
            item = {
                "id": s['id'],
                "data": jsonify(json.loads(data))
            }
            collection_name.insert_many(item_1)

            return({
                "status": "ok",
            })
    except Exception:
        data={"ERROR":"no data available."}
        return(flask.jsonify(data))


if __name__=='__main__':
    a.run(debug=True, port=5002)
