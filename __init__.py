from flask import Flask, render_template, jsonify


app = Flask(__name__)

@app.route('/')
def main():
    return render_template('index.html')

@app.route('/t/<int:num>')
def text(num):
    return render_template('main%d.html' % num)

if __name__ == '__main__':
    app.run(host='0.0.0.0')