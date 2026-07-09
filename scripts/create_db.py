import MySQLdb
import sys

HOST='127.0.0.1'
PORT=3306
USER='root'
PASS='123456'
DB='cookingwebsite'

try:
    conn = MySQLdb.connect(host=HOST, user=USER, passwd=PASS, port=PORT)
    conn.autocommit(True)
    cur = conn.cursor()
    cur.execute(f"CREATE DATABASE IF NOT EXISTS {DB} CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;")
    print(f"Database '{DB}' ensured.")
    cur.close()
    conn.close()
except Exception as e:
    print('Error creating database:', e)
    sys.exit(1)
