var express = require('express')
var bodyParser = require('body-parser');
var path = require('path')
var app = express()
var PORT = 3000;

// Controllers
var staticController = require('./controllers/staticController');
var caseStudiesController = require('./controllers/caseStudiesController');
var blogController = require('./controllers/blogController');
var contactController = require('./controllers/contactController');


// Set Pug as template engine
app.set('view engine', 'pug');

// Set Views
app.set('views', `${__dirname}/public/html/pages`);

// Static files
app.use(express.static(path.join(__dirname, 'public')));

// Body parser
app.use(bodyParser.json());


/* Home Page */
app.get('/', staticController.home_page);

/* Case Studies Page */
app.get('/case-studies', caseStudiesController.case_studies_page);

/* Case Study Page */
app.get('/case-studies/:title', caseStudiesController.case_study_page)

/* Blog Page */
app.get('/blog', blogController.blog_page);

/* Post Page */
app.get('/blog/:title', blogController.post_page);

/* Contact Page */
app.get('/contact', contactController.contact_page);

/* Contact Submit Form */
app.post('/contact', contactController.contact_form);


// Start server
app.listen(PORT, function() {
  console.log(`<name> listening on port ${PORT}!`);
})
