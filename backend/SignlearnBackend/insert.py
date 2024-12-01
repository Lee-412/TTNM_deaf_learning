# import json
# import sqlite3

# connection = sqlite3.connect('app_learn/data.db')

# if connection:
#     print("Connected to SQLite")
#     cur = connection.cursor()
#     for data in ReviseData_vn:
#         name = data["name"]
#         target= data["target"]
#         data=json.dumps(data["data"])

#         cur.execute("INSERT INTO revise_data (name, target, data) VALUES (?, ?, ?)",
#             (name, target, data))
#         connection.commit()

#     connection.close()
#     print("insert successfully")
# else:
#     print("Connection failed")