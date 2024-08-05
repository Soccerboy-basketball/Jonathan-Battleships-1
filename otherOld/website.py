


from flask import Flask, render_template, jsonify
app=Flask(__name__)
@app.route('/')
def home():
    return render_template('index.html')
# @app.route('/data', methods=['GET'])
# def send_data():
#     processed_data = {"key":value,"key1":10}
#     return jsonify(processed_data)

if __name__ == '__main__':
    app.run(debug=True)

