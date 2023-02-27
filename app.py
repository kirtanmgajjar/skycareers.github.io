from  flask import Flask, render_template,request

app = Flask(__name__)

@app.route("/")
def index():
    return render_template("index.html")

@app.route("/loginpage")
def loginpage():
    return render_template("login.html")

@app.route("/main", methods=["POST"])
def main():
    email = request.form.get("email")
    pasword = request.form.get("password")
    return render_template("main.html", email=email, password=password)