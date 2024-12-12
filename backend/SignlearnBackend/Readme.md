## Setup Instructions

### Step 1: Clone the repository

    git clone <repository-url>
    cd <project-folder>

### Step 2: Clone the repository

# Delete venv directory if it exists

# Create the virtual environment
    python -m venv venv

# Activate the virtual environment
# For Windows:
    venv\Scripts\activate
# For Mac/Linux:
    source venv/bin/activate

### Step 3: Install dependencies
    pip install -r requirements.txt

### Step 4: Install dependencies not in requirements
    pip install moviepy
    pip install googletrans==4.0.0rc1
    pip install requests
    pip install opencv-python
    pip install pytesseract
### Step 5: Run the application
    python app.py -m flask run
