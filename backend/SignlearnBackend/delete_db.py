# import json
# import sqlite3

# # Kết nối đến SQLite
# connection = sqlite3.connect('app_learn/data.db')

# if connection:
#     print("Connected to SQLite")
#     cur = connection.cursor()
    

#     # Xóa tất cả dữ liệu trong bảng (giả sử tên bảng là 'your_table')
#     cur.execute("DELETE FROM dictionary")

#     # Cam kết thay đổi
#     connection.commit()

#     # Đóng kết nối
#     connection.close()
#     print("All data has been deleted from the table.")
# else:
#     print("Connection failed")