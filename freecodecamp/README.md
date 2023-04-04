# API

a repo for learning APIs


- Course from [freecodecamp](https://www.youtube.com/watch?v=WXsD0ZgxjRw)
- with [notes](https://github.com/TwilioDevEd/introduction-to-apis-notes/blob/main/course-notes.md).
- [MDN Web APIs](https://developer.mozilla.org/en-US/docs/Web/API)  is list of various APIs available
- [Cool APIs](https://apilist.fun/collection/cool-apis)


3 units:

- 1 start to  (0:23:21)
- 2 start (0:29:06)  to (1:48:34)
- 3 start (2:15:30)  to (3:05:29)


> using an API is just like calling a method from a class

 



### HTTP VERBS

| HTTP  | CRUD    |
|-------|---------|
| GET   | read    |
| POST  | create  |  (submitting info)
| PUT   | update  |
| PATCH |         |
| DELETE | delete |


- create read use delete

- requests and response have headers [HTTP header fields](https://en.wikipedia.org/wiki/List_of_HTTP_header_fields)


## REST

Respresentational State Transfer. RestAPI, RESTful API.

A RESTful API criteria:

- client server architecture
  - the client (your program with libraries) makes request to server
  - the protocol used is HTTP 
  
- statelessness
  - uses headers
  - no data is stored
  - login details etc must be passed along with each request 

- cacheability 
  - data stored locally
  
  

- layered system
  - lots of data stored in the JSON

- uniform interface 
  - resource identification in requests
  - resource manipulation via representations
  - self descriptive messages
  - hypermedia as the engine of application state

- code on demand





GET data back from your request is in JSON format

```
import json
author = json.loads(json_response)
author['name']
author['books'][0]['title']
```


### Web API 

Spotify for Developers > Web API > Console > Search

Create an account for developers `api.spotify.com`
Create an OAUTH token to use the API
token is secret

- Spotify
- Requests: GET POST PUT DELETE
- URI & IDs
- pagination
- cacheing 
- status codes  200, 404 ...
- response schema

to make search for Beyonce 👍

- base_url = "https://api.spotify.com/"
- endpoint = "v1/search?q=Beyonce&type=artist"

if you have the artist id then endpoint is

- endpoint = "v1/artists/6v2.........0m"

for albums
- endpoint = "v1/artists/6v2.........0m/albums"


base_url + endpoint


### curl

curl Open source [software](https://curl.se/) to use the HTTP 

```'
brew install curl
```

then once installed 
```
curl https://icanhazdadjoke.com
```


curl -X "GET" "HTTPS://api.spotify.com/va/artists/6v9000000999090/albums .... 8skjskus7" 



### Twilio

- sms
- other
- with code
- javascript
- host code on twilio



Get Twilio phone number , it can send/ receive using it

Developer Docs > SMS > API Reference > Message Resource > create a message

select `curl` tab

Create a message (default)
```
curl -X POST "https://api.twilio.com/2010-04-01/Accounts/$TWILIO_ACCOUNT_SID/Messages.json" \
--data-urlencode "From=+15017122661" \
--data-urlencode "Body=Hi there" \
--data-urlencode "To=+15558675310" \
-u $TWILIO_ACCOUNT_SID:$TWILIO_AUTH_TOKEN
```

- [Restfox API app](https://github.com/flawiddsouza/Restfox) or [web browser option](https://restfox.dev/)

- VS Code extension Thunder Client


Using VS Code editor to use twilio api in a javascript file @ 1:48:00



## project 

the project uses Twilio to receive images and text messages

[the code (index.html)](https://github.com/TwilioDevEd/introduction-to-apis-notes/blob/main/code/3-all-together-now/1-introducing-the-project/index.html)


get Twilio to host your HTML code

Twilio functions & assets > services > create service > give name

Add+ (to upload file) > select index.html > select public > upload > deploy all

assets/ 🟢 /index.html > copy url > paste in browser 

[name of service][randomnumbers].twilio.io/index.html









