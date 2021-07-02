import json
import requests

url = 'https://thezmot.com/wp-json/wp/v2/posts?_embed=1&per_page=100'
r = requests.get(url, '')

with open('dist/data.json', 'w') as outfile:
    json.dump(r.json(), outfile)
print('success')