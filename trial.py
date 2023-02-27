import sqlite3
email="abc@abc.com"
password="1234"
conn = sqlite3.connect('./static/login.db')
c = conn.cursor()
c.execute('SELECT * FROM login_details WHERE email_id=? AND password=?', (email, password))
user = c.fetchone()
conn.close()
if user:
    print(user)
else:
    print("No")