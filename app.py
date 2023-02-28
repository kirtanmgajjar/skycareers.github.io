import sqlite3
from  flask import Flask, render_template,request,redirect, url_for,session
from flask_session import Session

app = Flask(__name__)
app.config["SESSION_PERMANENT"] = False
app.config["SESSION_TYPE"] = "filesystem"
Session(app)

conn = sqlite3.connect('./static/login.db')
db = conn.cursor()

@app.route("/")
def index():
    return render_template("index.html")

@app.route("/login", methods=["GET","POST"])
def login():
    if request.method == "POST":
        email = request.form.get("email")
        password = request.form.get("password")
        msg = "Invalid login credentials"
        db.execute('SELECT * FROM login_details WHERE email_id=? AND password=?', (email, password))
        user = db.fetchone()
        if user:
            session["email"] = email
            session["password"] = password
            return redirect("/main")
        else:
            return render_template("login.html", msg=msg)
    return render_template("login.html")

@app.route("/main", methods=["GET","POST"])
def main():
    if not session.get("email"):
        return redirect("/login")
    return render_template("main.html",email=session['email'],password=session['password'])
    
@app.route("/logout")
def logout():
    session["email"] = None
    session["password"] = None
    return redirect("/")

@app.route("/register",methods=["GET","POST"])
def register():
    if request.method == "POST":
        fname = request.form['fname']
        lname = request.form['lname']
        gender = request.form['gender']
        dob = request.form['dob']
        pnumber = request.form['pnumber']
        email = request.form['email']
        password = request.form['password']
        return render_template("trial.html",a=fname,b=lname,c=gender,d=dob,e=email,f=password,g=pnumber)
    return render_template("registration.html")