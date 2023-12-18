import requests

# url = "https://finance.yahoo.com"
# Your API key is: 0d5256f780a04156ba58cf7d772f1d41
key = "0d5256f780a04156ba58cf7d772f1d41"
url = "https://newsapi.org/v2/top-headlines?country=us&category=business&apiKey=0d5256f780a04156ba58cf7d772f1d41"
r = requests.get(url)
content = r.json()
print(content)