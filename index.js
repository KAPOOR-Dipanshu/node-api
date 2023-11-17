const express = require('express');
const app = express();
const { MongoClient } = require('mongodb');
const url = 'mongodb+srv://dipanshukapoor2002:Dipanshu4321@cluster0.ee31fyz.mongodb.net/';
const port = 3000; 

const client = new MongoClient(url, { useNewUrlParser: true, useUnifiedTopology: true });

async function connectToDB() {
    try {
      await client.connect();
      console.log('Connected to MongoDB');
    } catch (e) {
      console.error('Error connecting to MongoDB', e);
    }
  }
  
  connectToDB();
  
  app.get('/users', async (req, res) => {
    const queryFilters = {};

    if (req.query.end_year) {
      queryFilters.end_year = parseInt(req.query.end_year) ;
    }
    
    if (req.query.intensity) {
      queryFilters.intensity = parseInt(req.query.intensity); 
    }

    if (req.query.sector) {
      queryFilters.sector = req.query.sector ;
    }

    if (req.query.topic) {
      queryFilters.topic = req.query.topic ;
    }

    if (req.query.insight) {
      queryFilters.insight = req.query.insight ;
    }

    if (req.query.url) {
      queryFilters.url = req.query.url ;
    }

    if (req.query.region) {
      queryFilters.region = req.query.region ;
    }

    if (req.query.start_year) {
      queryFilters.start_year = req.query.start_year ;
    }

    if (req.query.impact) {
      queryFilters.impact = parseInt(req.query.impact) ;
    }

    if (req.query.added) {
      queryFilters.added = req.query.added ;
    }

    if (req.query.published) {
      queryFilters.published = req.query.published ;
    }

    if (req.query.country) {
      queryFilters.country = req.query.country ;
    }

    if (req.query.relevance) {
      queryFilters.relevance = parseInt(req.query.relevance) ;
    }

    if (req.query.pestle) {
      queryFilters.pestle = req.query.pestle ;
    }

    if (req.query.source) {
      queryFilters.source = req.query.source ;
    }

    if (req.query.title) {
      queryFilters.title = req.query.title ;
    }

    if (req.query.likelihood) {
      queryFilters.likelihood = parseInt(req.query.likelihood) ;
    }

    console.log(queryFilters)

    const users = await client.db('MyAssignment').collection('assignmentDatabase').find(queryFilters).toArray();
    res.status(200).json(users);
  });

app.listen(port, () => {
  console.log(`Server running at http://localhost:${port}/users`);
});


