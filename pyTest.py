from flask import Flask, jsonify
    
app = Flask(__name__) 
    

@app.route('/add', methods=['GET', 'HEAD', 'POST']) 
def add_numbers(): 
    print("here")
    data = request.get_json() 
    a = data['a'] 
    b = data['b'] 
    print("hello")
    return jsonify({'Result': a + b}) 
    
if __name__ == '__main__': 
    app.run() 