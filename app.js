const express = require('express');
const morgan = require('morgan')
const mongoose = require('mongoose')
const Blog = require('./models/blog')

// express app
const app = express();

// database connection
const dbURI = 'mongodb+srv://bunbee:bunbee@cluster0.8ljddhj.mongodb.net/?retryWrites=true&w=majority'
mongoose.set('strictQuery', true)
mongoose.connect(dbURI, { useNewUrlParser: true, useUnifiedTopology: true })
  .then((result) => 'connected to db')
  .catch((err) => console.log(err))

// listen for requests
app.listen(4000);
app.set('view engine', 'ejs');
app.use(express.static('public'))
// app.use(morgan("combined"))


// register view engine


// app.set('views', 'myviews');

//mongoose and mongo sandbox
app.get('add-blog', (req, res) => {
  const blog = new Blog({

  })
})

app.get('/', (req, res) => {
  const blogs = [
    {title: 'Yoshi finds eggs', snippet: 'Lorem ipsum dolor sit amet consectetur'},
    {title: 'Mario finds stars', snippet: 'Lorem ipsum dolor sit amet consectetur'},
    {title: 'How to defeat bowser', snippet: 'Lorem ipsum dolor sit amet consectetur'},
  ];
  res.render('index', { title: 'Home', blogs });
});

app.get('/about', (req, res) => {
  res.render('about', { title: 'About' });
});

app.get('/blogs/create', (req, res) => {
  res.render('create', { title: 'Create a new blog' });
});

// 404 page
app.use((req, res) => {
  res.status(404).render('404', { title: '404' });
});
