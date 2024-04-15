import requests

print(requests.get("http://localhost:3000/number").text)
print(requests.post("http://localhost:3000/number", json={"number": 10}).text)
print(requests.get("http://localhost:3000/number").text)