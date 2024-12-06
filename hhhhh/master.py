import mysql.connector

connection = mysql.connector.connect(
    host="localhost", 
    user="edwinsharon",
    password="achayan123",
    database="mydatabase"
)

print("Connected successfully!")
connection.close()
