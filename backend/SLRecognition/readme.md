# Hướng dẫn chạy Service trên Docker

## Yêu cầu trước khi bắt đầu
- **Docker**: Đảm bảo đã cài đặt Docker trên máy.
  - [Hướng dẫn cài đặt Docker](https://docs.docker.com/get-docker/)
- **Docker Compose**: 
    Với Windows/Mac, Docker Compose được tích hợp sẵn trong Docker Desktop. 

    Với Linux, cài đặt riêng bằng lệnh: sudo apt-get install docker-compose

### Step 1: Clone the repository
    git clone <repository-url>
    cd <project-folder>

### Step 2: Run docker

# For Windows:
    Open Docker desktop
    
    docker compose up -d

# For Mac/Linux:
    docker compose up -d

### Step 3: Check Services
    docker ps -a

### Step 4: Stop Services
    docker compose down

