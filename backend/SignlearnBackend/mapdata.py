import json

# Đọc file data.json
with open('data.json', 'r', encoding='utf-8') as f:
    data_json = json.load(f)

# Đọc file qidepc.json
with open('qipedc.json', 'r', encoding='utf-8') as f:
    qidepc_json = json.load(f)

# Duyệt qua các mục trong data.json và qidepc.json, kết hợp dữ liệu nếu 'gross' == 'word'
combined_data = []

for data_item in data_json:
    gross = data_item.get('gross')
    url = data_item.get('url')

    # Tìm mục tương ứng trong qidepc_json
    matching_item = next((item for item in qidepc_json['data'] if item['word'] == gross), None)

    if matching_item:
        # Kết hợp các dữ liệu cần thiết
        combined_data.append({
            'word': gross,
            'url': url,
            'description': matching_item.get('description', ''),
            'tl': matching_item.get('tl', ''),
            '_id': matching_item.get('_id', '')
        })

# Xuất kết quả ra file mới
with open('combined_data.json', 'w', encoding='utf-8') as f:
    json.dump(combined_data, f, ensure_ascii=False, indent=4)

print("Kết quả đã được ghi vào 'combined_data.json'.")
