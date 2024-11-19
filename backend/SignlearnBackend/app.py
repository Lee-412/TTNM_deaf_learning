from app_learn import create_app

if __name__ == '__main__':
    app = create_app()
    app.run(debug=True)