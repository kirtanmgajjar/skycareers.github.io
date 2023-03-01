import sqlite3
import random
import string
from  flask import Flask, render_template,request,redirect, url_for,session
from fileinput import filename
from flask_session import Session
from werkzeug.utils import secure_filename

import os

app = Flask(__name__)
app.config["SESSION_PERMANENT"] = False
app.config["SESSION_TYPE"] = "filesystem"
Session(app)

resumeFolder = os.path.join(app.instance_path, 'resume_uploads')
os.makedirs(resumeFolder,exist_ok=True)

@app.route("/")
def index():
    return render_template("index.html")

@app.route("/login", methods=["GET","POST"])
def login():
    if request.method == "POST":
        email = request.form.get("email")
        password = request.form.get("password")
        msg = "Invalid login credentials"
        conn = sqlite3.connect('./static/login.db')
        db = conn.cursor()
        db.execute('SELECT * FROM login_details WHERE email_id=? AND password=?', (email, password))
        user = db.fetchone()
        conn.close()
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
        country = request.form['country']
        resumeFile = request.files['file']
        """resumeName = "".join((random.choice(string.ascii_letters)) for x in range(15))
        resumeName+=".pdf" """
        resumeFile.save(resumeFile.filename)
        conn = sqlite3.connect('./static/login.db')
        db = conn.cursor()
        db.execute("insert into login_details values (?,?)",(email,password))
        db.execute("insert into registration_details (email_id,first_name,last_name,phone_number,dob,gender,country,resume) values(?,?,?,?,?,?,?,?);",(email,fname,lname,pnumber,dob,gender,country,resumeFile.filename))
        conn.commit()
        conn.close()
        #return render_template("trial.html",a=fname,b=lname,c=gender,d=dob,e=email,f=password,g=pnumber)
        return redirect("/login")
    
    if request.method == "GET":
        conn = sqlite3.connect('./static/login.db')
        db = conn.cursor()
        db.execute("select * from country;")
        name = [str(i)[2:-3] for i in db.fetchall()]
        return render_template("registration.html",name = name)

@app.route("/try",methods=["GET","POST"])
def trial():
    if request.method == "POST":
        f = request.files['files']
        f.save(secure_filename(f.filename))
        return redirect("/")
        
    return render_template("trial.html")


if __name__=='__main__':
    app.run()