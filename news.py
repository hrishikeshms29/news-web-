from flask import Flask, render_template, jsonify, redirect, url_for,request
import requests

app = Flask(__name__)

@app.route('/')
def index():
    return render_template('display.html')


@app.route('/get_news', methods=['GET'])
def get_news():
    # Replace this with your actual News API endpoint URL
    api_url = "https://newsapi.org/v2/top-headlines?country=in&category=business&apiKey=0d5256f780a04156ba58cf7d772f1d41"

    try:
        # Make an HTTP request to the News API
        response = requests.get(api_url)
        content = response.json()

        # Extract relevant information (articles) from the API response
        articles = content.get('articles', [])

        return jsonify({'articles': articles})

    except Exception as e:
        return jsonify({'error': str(e)}), 500


@app.route('/search_results')
def search_results():
    return render_template('search_results.html')

# @app.route('/search_results', methods=['GET', 'POST'])
# def search_results():
#     if request.method == 'POST':
#         # Retrieve the search query from the form submission
#         search_query = request.form.get('query', '')
#
#         # Modify this part to use the News API's /everything endpoint
#         api_url = f'"https://newsapi.org/v2/everything"+"search_query"'
#         api_key = "YOUR_NEWS_API_KEY"  # Replace with your News API key
#
#         params = {
#             'q': search_query,
#             'apiKey': api_key,
#         }
#
#         try:
#             response = requests.get(api_url, params=params)
#             content = response.json()
#             search_results = content.get('articles', [])
#
#             return render_template('search_results.html', search_results=search_results)
#
#         except Exception as e:
#             return jsonify({'error': str(e)}), 500
#
#     return redirect(url_for('index'))

if __name__ == '__main__':
    app.run(debug=True)