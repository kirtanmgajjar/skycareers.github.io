import sqlite3
from  flask import Flask, render_template,request,redirect, url_for

app = Flask(__name__)

@app.route("/")
def index():
    return render_template("index.html")

@app.route("/login", methods=["GET","POST"])
def login():
    if request.method == "GET":
        return render_template("login.html")
    elif request.methood == "POST":
        email = request.form.get("email")
        password = request.form.get("password")
        conn = sqlite3.connect('./static/login.db')
        c = conn.cursor()
        c.execute('SELECT * FROM login_details WHERE email_id=? AND password=?', (email, password))
        user = c.fetchone()
        conn.close()
        if user:
            return render_template("main.html", email=email, password=password)
        else:
            return render_template("login.html")


@app.route("/main", methods=["POST"])
def main():
    email = request.form.get("email")
    password = request.form.get("password")
    
    conn = sqlite3.connect('./static/login.db')
    c = conn.cursor()
    c.execute('SELECT * FROM login_details WHERE email_id=? AND password=?', (email, password))
    user = c.fetchone()
    conn.close()
    if user:
        return render_template("main.html", email=email, password=password)
    else:
        return redirect(url_for('login'))