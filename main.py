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





@a.route('/aws/benchmark/executequery',methods=['GET','POST'])
def AwsCompliance():
    s=flask.request.get_json()
    print(s)
    # collection_name = db.aws
    try:
        print("[System] Executing query...")
        data=os.popen(s['query']).read()
        return(flask.jsonify(json.loads(data)))
        # if s['op'] == "audit_manager":
        #     print("[System] Executing query...")
        #     data=os.popen(s['query']).read()
            # item = {
            #     "id": s['id'],
            #     "data": json.loads(data)
            # }
            # collection_name.insert_one(item)

            # return(flask.jsonify(json.loads(data)))

    except Exception(err):
        data={"ERROR":"no data available."}
        return(flask.jsonify(data))


if __name__=='__main__':
    a.run(debug=True, port=5002)
