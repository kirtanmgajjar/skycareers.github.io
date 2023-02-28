import sqlite3
conn = sqlite3.connect('./static/login.db')
db = conn.cursor()
db.execute('SELECT * FROM login_details;')
user = db.fetchall()
conn.close()
print(user)