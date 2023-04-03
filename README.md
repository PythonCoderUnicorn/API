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
- layered system
- code on demand
- uniform interface 


GET data back from your request is in JSON format

```
import json
author = json.loads(json_response)
author['name']
author['books'][0]['title']
```


