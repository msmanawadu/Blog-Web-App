const express = require("express");
const ejs = require("ejs");

//Array of Posts
const posts = [];

const PORT = 3000;

const homeStartingContent = "Lacus vel facilisis volutpat est velit egestas dui id ornare. Semper auctor neque vitae tempus quam. Sit amet cursus sit amet dictum sit amet justo. Viverra tellus in hac habitasse. Imperdiet proin fermentum leo vel orci porta. Donec ultrices tincidunt arcu non sodales neque sodales ut. Mattis molestie a iaculis at erat pellentesque adipiscing. Magnis dis parturient montes nascetur ridiculus mus mauris vitae ultricies. Adipiscing elit ut aliquam purus sit amet luctus venenatis lectus. Ultrices vitae auctor eu augue ut lectus arcu bibendum at. Odio euismod lacinia at quis risus sed vulputate odio ut. Cursus mattis molestie a iaculis at erat pellentesque adipiscing.";
const aboutStartingContent = "Hac habitasse platea dictumst vestibulum rhoncus est pellentesque. Dictumst vestibulum rhoncus est pellentesque elit ullamcorper. Non diam phasellus vestibulum lorem sed. Platea dictumst quisque sagittis purus sit. Egestas sed sed risus pretium quam vulputate dignissim suspendisse. Mauris in aliquam sem fringilla. Semper risus in hendrerit gravida rutrum quisque non tellus orci. Amet massa vitae tortor condimentum lacinia quis vel eros. Enim ut tellus elementum sagittis vitae. Mauris ultrices eros in cursus turpis massa tincidunt dui.";
const contactStartingContent = "Scelerisque eleifend donec pretium vulputate sapien. Rhoncus urna neque viverra justo nec ultrices. Arcu dui vivamus arcu felis bibendum. Consectetur adipiscing elit duis tristique. Risus viverra adipiscing at in tellus integer feugiat. Sapien nec sagittis aliquam malesuada bibendum arcu vitae. Consequat interdum varius sit amet mattis. Iaculis nunc sed augue lacus. Interdum posuere lorem ipsum dolor sit amet consectetur adipiscing elit. Pulvinar elementum integer enim neque. Ultrices gravida dictum fusce ut placerat orci nulla. Mauris in aliquam sem fringilla ut morbi tincidunt. Tortor posuere ac ut consequat semper viverra nam libero.";

//Express Setup
const app = express();

//EJS Setup
app.set('view engine', 'ejs');

//POST Request Body-Parsing
app.use(express.urlencoded({
  extended: true
}));

//Static File Rendering
app.use(express.static('public'));

//GET Requests

app.get('/', function (req, res) {
  res.render('home', {
    homeContent: homeStartingContent,
    postsArray: posts
  });

});

app.get('/about', function (req, res) {
  res.render('about', {
    aboutContent: aboutStartingContent
  });
});

app.get('/contact', function (req, res) {
  res.render('contact', {
    contactContent: contactStartingContent
  });
});

app.get('/compose', function (req, res) {
  res.render('compose');
});

app.get('/posts/:postName', function (req, res) {
  const requestedTitle = req.params.postName;

  posts.forEach(post => {
    if (post.title === requestedTitle) {
      console.log('Match Found');
    }
  })
});


//POST Request
app.post('/compose', function (req, res) {

  //Javascript Post Object
  const post = {
    title: req.body.postTitle,
    content: req.body.postBody
  };

  posts.push(post);

  res.redirect('/');

});










//Setup Express Server
app.listen(PORT, function () {
  console.log(`Server is listening on port ${PORT}`);
});