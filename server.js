const express = require('express')
const hbs = require('hbs')

const port = process.env.PORT || 3000;
var app = express();

hbs.registerPartials(__dirname+ '/views/partials')
app.set('view engine', 'hbs')
app.use(express.static(__dirname+ '/public'))

app.use((req,res,next)=>{
  res.render('Maintenance');
  next();
})

app.get('/', (req, res) => {
  res.send('Hello World');
});

app.get('/about', (req,res)=>{
  res.render('about.hbs', {
    pageTitle: 'About Page',
    pageDesc: 'This is page description'
  })
})

app.get('/projects', (req,res) => {
  res.render('projects.hbs');
})
app.listen(port)
