from flask import Flask,request
from flask_sqlalchemy import SQLAlchemy
from flask_cors import CORS

app = Flask(__name__)
CORS(app)
app.config ['SQLALCHEMY_DATABASE_URI'] = 'sqlite:///test.db'
db = SQLAlchemy(app)


class students(db.Model):
    id = db.Column('student_id', db.Integer, primary_key=True)
    first_name = db.Column(db.String(100))
    last_name = db.Column(db.String(50))
    age = db.Column(db.Integer())
    company = db.Column(db.String(10))
    email = db.Column(db.String(10))


def __init__(self, first_name, last_name, age, company, email):
    self.first_name = first_name
    self.last_name = last_name
    self.age = age
    self.company = company
    self.email = email


# POST CALL FOR POSTING DATA

@app.route('/client', methods=['POST'])
def post():
    if request.method == 'POST':
        # gets the payload
        content = request.json
        key1 = 'first_name'
        key2 = 'last_name'
        key3 = 'age'
        key4 = 'company'
        key5 = 'email'

        # if payload is missing some field
        if key1 not in content or key2 not in content or key3 not in content or key4 not in content or key5 not in content:
            return ({"error": 'Please enter all the fields'})

        else:
            # creating instance of database class
            student = students(first_name=content['first_name'], last_name=content['last_name'], age=content['age'],
                               company=content['company'], email=content['email'])
            # adding the instance to the database
            db.session.add(student)

            db.session.commit()
        return content


# GET CALL FOR GETTING ALL THE DATA

@app.route('/client', methods=['GET'])
def get():
    if request.method == 'GET':
        # using orm to get all the students in the database
        a = students.query.all()
        final = []
        for i in a:
            object1 = {}
            object1['first_name'] = i.first_name
            object1['last_name'] = i.last_name
            object1['age'] = i.age
            object1['company'] = i.company
            object1['email'] = i.email
            final.append(object1)
            object1 = {}
        print('final result', final)
        return {"data": final}


if __name__ == '__main__':
    app.run("0.0.0.0", 4444)

# python3 get into shell
# db.create_all() create db

# rest code