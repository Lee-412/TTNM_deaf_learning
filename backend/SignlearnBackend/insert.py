# # # import json
# # # import sqlite3

# # # connection = sqlite3.connect('app_learn/data.db')

# # # if connection:
# # #     print("Connected to SQLite")
# # #     cur = connection.cursor()
# # #     for data in ReviseData_vn:
# # #         name = data["name"]
# # #         target= data["target"]
# # #         data=json.dumps(data["data"])

# # #         cur.execute("INSERT INTO revise_data (name, target, data) VALUES (?, ?, ?)",
# # #             (name, target, data))
# # #         connection.commit()

# # #     connection.close()
# # #     print("insert successfully")
# # # else:
# # #     print("Connection failed")

# # import json
# # import sqlite3

# # # Kết nối đến SQLite
# # connection = sqlite3.connect('app_learn/data.db')

# # if connection:
# #     print("Connected to SQLite")
# #     cur = connection.cursor()
    


# #     # Duyệt qua danh sách trong dữ liệu
# #     for data in ReviseData_vn["data"]:
# #         word = data["word"]
# #         description = data["description"]
# #         tl = data["tl"]
# #         url = data["url"]
# #         # Chèn dữ liệu vào bảng revise_data
# #         cur.execute("""
# #             INSERT INTO dictionary (word, description, tl,url)
# #             VALUES (?, ?, ?,?)
# #         """, (word, description, tl,url))

# #     # Lưu thay đổi
# #     connection.commit()
# #     connection.close()
# #     print("Insert successfully")
# # else:
# #     print("Connection failed")


# import json
# import sqlite3

# # Kết nối đến SQLite
# connection = sqlite3.connect('app_learn/data.db')

# if connection:
#     print("Connected to SQLite")
#     cur = connection.cursor()

#     # Dữ liệu bạn đã cung cấp
#     userData = [
#         {
#             "userID": 1,
#             "timeStudied": [512, 3, 5, 2, 1, 4, 3],
#             "wordStudiedPerDay": [2, 4, 0, 1, 5, 5, 2],
#             "wordStudiedPerCategory": [7, 4, 2, 4, 6, 4, 2],
#         },
#         {
#             "userID": 2,
#             "timeStudied": [12, 1, 4, 3, 2, 5, 6],
#             "wordStudiedPerDay": [5, 3, 2, 4, 1, 7, 8],
#             "wordStudiedPerCategory": [6, 5, 3, 7, 4, 3, 5],
#         },
#         {
#             "userID": 3,
#             "timeStudied": [0, 2, 3, 5, 2, 1, 4],
#             "wordStudiedPerDay": [3, 2, 5, 6, 3, 4, 7],
#             "wordStudiedPerCategory": [5, 4, 6, 3, 7, 2, 1],
#         },
#         {
#             "userID": 4,
#             "timeStudied": [3, 4, 1, 2, 5, 3, 2],
#             "wordStudiedPerDay": [4, 3, 6, 1, 2, 5, 4],
#             "wordStudiedPerCategory": [8, 6, 5, 7, 3, 2, 4],
#             "totalWordStudied": 35,
#         },
#         {
#             "userID": 5,
#             "timeStudied": [3, 4, 1, 2, 5, 3, 2],
#             "wordStudiedPerDay": [4, 3, 6, 1, 2, 5, 4],
#             "wordStudiedPerCategory": [3, 6, 2, 4, 3, 2, 4],
#             "totalWordStudied": 24,
#         },
#         {
#             "userID": 6,
#             "timeStudied": [3, 4, 1, 2, 5, 3, 2],
#             "wordStudiedPerDay": [4, 3, 6, 1, 2, 5, 4],
#             "wordStudiedPerCategory": [3, 2, 1, 3, 4, 2, 1],
#         },
#     ]

#     # Duyệt qua danh sách trong dữ liệu
#     for data in userData:
#         userID = data["userID"]
#         timeStudied = json.dumps(data["timeStudied"])  
#         wordStudiedPerDay = json.dumps(data["wordStudiedPerDay"])
#         wordStudiedPerCategory = json.dumps(data["wordStudiedPerCategory"])

#         # Chèn dữ liệu vào bảng statistics_data
#         cur.execute("""
#             INSERT INTO statistics_data (userID, timeStudied, wordStudiedPerDay, wordStudiedPerCategory)
#             VALUES (?, ?, ?, ?)
#         """, (userID, timeStudied, wordStudiedPerDay, wordStudiedPerCategory))

#     # Lưu thay đổi và đóng kết nối
#     connection.commit()
#     connection.close()
#     print("Insert successfully")
# else:
#     print("Connection failed")
