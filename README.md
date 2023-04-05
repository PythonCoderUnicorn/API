
# API

my repo for learning APIs


### RapidAPI

- https://rapidapi.com/products/build-apis/

- `https://jsonplaceholder.typicode.com/posts`


GET `jsonplaceholder.typicode.com/posts`

### FastAPI

https://fastapi.tiangolo.com/



install FastAPI
```
pip install fastapi
```

run fastapi 
https://fastapi.tiangolo.com/deployment/manually/



## RapidAPI Studio

create an API private thuses an API 

`https://zoo-animal-api.herokuapp.com/`

`https://rapidapi.com/unicornapi/api/earth-animals`



## climate change api

to install a node version `nvm install v0.x.x`

`npm init`

`npm install cheerio`   ( version in tutorial 1.0.0-rc.10 )

`npm install express`   (version in tutorial 6.17.1 )

`npm i axios`           (version in tutorial 0.21.4 )

`npm i nodemon`




### initial setup


change in package.json
```
"scripts": {
    "start": "nodemon index.js"
  }
```

index.js
```
const PORT = 8000

const express = require('express')
const axios = require('axios')
const cheerio = require('cheerio')

const app = express()  // call the library as app

app.listen(PORT, () => console.log(`server is running on PORT ${PORT}`))
```

then to run program : `npm run start`

check in browser : `http://localhost:8000/`


### part 2

```
const articles = []

app.get('/news', (req, res) => {
  axios.get('https://www.theguardian.com/environment/climate-crisis')
    .then((response) => {
      const html = response.data 
      // console.log(html) // raw html 
      const $ = cheerio.load(html)  // allows for elements

      // find all a tags that have climate 
      $('a:contains("climate")', html).each(function () { // callback function
        const title = $(this).text()
        const url = $(this).attr('href')

        articles.push({
          title,
          url
        })
      })  
      res.json(articles)
    }).catch((err) => console.log(err)) 
})
```

### part 3

```
//------------ select specific articles from specific paper

app.get('/news/:newspaperId', async (req, res) => {
  // console.log(req.params.newspaperId)
  const newspaperId = req.params.newspaperId 

  const newspaperAddress = newspapers.filter(newspaper => newspaper.name == newspaperId)[0].address
  // console.log(newspaperAddress)
  const newspaperBase = newspapers.filter(newspaper => newspaper.name == newspaperId)[0].base 
  
  axios.get(newspaperAddress)
    .then(response => {
      const html = response.data
      const $ = cheerio.load(html)
      const specific_articles = []
  
        $('a:contains("climate")', html).each(function () { // callback function
          const title = $(this).text()
          const url = $(this).attr('href')
          specific_articles.push({
            title,
            url: newspaperBase + url,
            source: newspaperId
          })
      })
      res.json(specific_articles)
    }).catch((err) => console.log(err))
    
})

```




tutorial had : climatechangeapi.herokuapp.com 




climate change API


## Render 

New + > new web service 
npm run build

https://climatenewsapi.onrender.com