const express = require('express');
const morgan = require('morgan')
const mongoose = require('mongoose')
const Blog = require('./models/blog');
const { result } = require('lodash');

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
app.use(express.urlencoded({ extended: true}))
app.use(morgan("combined"))


// register view engine


// app.set('views', 'myviews');

//mongoose and mongo sandbox
// app.get('/add-blog', (req, res) => {
//   const blog = new Blog({
//     title: "Newest blog",
//     snippet: "About the new blog created from the db",
//     body: "More about the blog"
//   })
//   blog.save()
//     .then((result) => {
//       res.send(result)
//     }).catch((err) => {
//       console.log(err)
//     })
// })

// app.get('/all-blogs', (req, res) => {
//   Blog.find()
//   .then((result) => {
//     res.send(result)
//   })
//   .catch((err) => {
//     console.log(err)
//   })
// })

// app.get('/single-blog', (req,res) => {
//   Blog.findById('63b621c122e5f9e06b84ec0a')
//     .then((result) => {
//       res.send(result)
//     })
//     .catch((err) => {
//       console.log(err)
//     })
// })

//routes
app.get('/', (req, res) => {
  res.redirect('/blogs')
});

app.get('/about', (req, res) => {
  res.render('about', { title: 'About' });
});

// blog routes
app.get('/blogs', (req, res) => {
  Blog.find().sort({ createdAt: -1})
    .then((result) => {
      res.render('index', { title: 'All Blogs', blogs: result})
    })
    .catch((err) => {
      console.log(err)
    })
})

app.post('/blogs', (req, res) => {
    const blog = new Blog(req.body)

    blog.save()
      .then((result) => {
        res.redirect('/blogs')
      })
      .catch((err) => {
        console.log(err)
      })
})

app.get('/blogs/:id', (req,res) => {
  
})

app.get('/blogs/create', (req, res) => {
  res.render('create', { title: 'Create a new blog' });
});

// 404 page
app.use((req, res) => {
  res.status(404).render('404', { title: '404' });
});
