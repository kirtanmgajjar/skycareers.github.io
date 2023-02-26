from  flask import Flask, render_template,request

app = Flask(__name__)

@app.route("/")
def index():
    return render_template("login.html")

@app.route("/login.html")
def login1():
    return render_template("login.html")