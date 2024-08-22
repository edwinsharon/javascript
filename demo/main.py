# import sqlite3
# connection = sqlite3.connect('example.db')
# cursor = connection.cursor()
# cursor.execute("INSERT INTO users (name, age) VALUES ('sreeju', 35)")
# cursor.execute("SELECT * FROM users")
# rows = cursor.fetchall()
# for row in rows:
#     print(row)
# connection.commit()
# connection.close()



# cursor.execute("SELECT name, age FROM users")
# rows = cursor.fetchall()
# for row in rows:
#     print(row)



# cursor.execute("SELECT * FROM users WHERE age > 25")
# rows = cursor.fetchall()
# for row in rows:
#     print(row)


# cursor.execute("SELECT * FROM users ORDER BY age DESC")
# rows = cursor.fetchall()
# for row in rows:
#     print(row)


# cursor.execute("UPDATE users SET age = 31 WHERE name = 'Alice'")
# connection.commit()

# cursor.execute("DELETE FROM users WHERE name = 'Bob'")
# connection.commit()

# cursor.execute("SELECT COUNT(*) FROM users")
# count = cursor.fetchone()[0]
# print(f"Total number of users: {count}")

# cursor.execute('''
#     CREATE TABLE IF NOT EXISTS orders (
#         id INTEGER PRIMARY KEY,
#         user_id INTEGER,
#         product TEXT,
#         FOREIGN KEY (user_id) REFERENCES users(id)
#     )
# ''')
# # Insert some orders
# cursor.execute("INSERT INTO orders (user_id, product) VALUES (1, 'Laptop')")
# cursor.execute("INSERT INTO orders (user_id, product) VALUES (1, 'Phone')")
# # Join tables to find users and their orders
# cursor.execute('''
#     SELECT users.name, orders.product
#     FROM users
#     JOIN orders ON users.id = orders.user_id
# ''')
# rows = cursor.fetchall()
# for row in rows:
#     print(row)


# name = 'Alice'
# cursor.execute("SELECT * FROM users WHERE name = ?", (name,))
# rows = cursor.fetchall()
# for row in rows:
#     print(row)

# cursor.execute("CREATE INDEX IF NOT EXISTS idx_users_age ON users (age)")


# try:
#     connection = sqlite3.connect('example.db')
#     cursor = connection.cursor()

#     cursor.execute("INSERT INTO users (name, age) VALUES ('Charlie', 40)")
#     cursor.execute("INSERT INTO users (name, age) VALUES ('Diana', 35)")
    
#     # Commit the changes
#     connection.commit()
# except sqlite3.Error as e:
#     # Rollback in case of error
#     connection.rollback()
#     print(f"An error occurred: {e}")
# finally:
#     connection.close()

# cursor.execute("SELECT * FROM users LIMIT 5 OFFSET 10")
# rows = cursor.fetchall()
# for row in rows:
#     print(row)

# cursor.execute('''
#     CREATE TABLE IF NOT EXISTS products (
#         id INTEGER PRIMARY KEY,
#         name TEXT NOT NULL UNIQUE,
#         price REAL CHECK(price >= 0)
#     )
# ''')



