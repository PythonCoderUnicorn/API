
const PORT = process.env.PORT || 8000

const express = require('express')
const axios = require('axios')
const cheerio = require('cheerio')



const app = express()  // call the library as app

const newspapers = [
  {
    name: "thetimes",
    address: "https://www.thetimes.co.uk/environment/climate-change",
    base: ''
  },
  {
    name: "guardian",
    address: "https://www.theguardian.com/environment/climate-crisis",
    base: ''
  },
  {
    name: "telegraph",
    address: "https://www.telegraph.co.uk/climate-change",
    base: 'https://www.telegraph.co.uk/'
  },
  {
    name: "nyp",
    address: "https://www.nypost.com/tag/climate-change",
    base: ''
  },
  {
    name: "dm",
    address: "https://www.dailymail.co.uk/news/climate_change_global_warming/index.html",
    base: ''
  },
  {
    name: "bbc",
    address: "https://www.bbc.co.uk/news/science_and_environment",
    base: 'https://www.bbc.co.uk/'
  },
  {
    name: "latimes",
    address: "https://www.latimes.com/environment",
    base: ''
  }
  
]


const articles = []

// listening response  "/" is base
app.get("/", (req, res) => {
  res.json("Welcome to Climate Change News API")
})

newspapers.forEach(newspaper => {
  axios.get(newspaper.address)
    .then(response => {
      const html = response.data 
      const $ = cheerio.load(html)

      $('a:contains("climate")', html).each(function () {
        const title = $(this).text()
        const url = $(this).attr('href')

        articles.push({ title, url: newspaper.base +url, source: newspaper.name })
      })
    
  })
})


app.get('/news', (req, res) => {
  res.json(articles)
})


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


// http://localhost:8000/news/wonderful












app.listen(PORT, () => console.log(`server is running on PORT ${PORT}`))
