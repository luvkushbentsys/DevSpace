const express = require('express');
const app = express();
app.use(express.static('public'))

// Define a route that sends an HTML page
    app.get('/', (req, res) => {
    // Set the Content-Type header to 'text/html'
    res.setHeader('Content-Type', 'text/html');
    // Send the HTML page to the client
    res.sendFile(__dirname + "\\index.html");
});

app.get('/home', (req, res) => {
    // Set the Content-Type header to 'text/html'
    res.setHeader('Content-Type', 'text/html');
    // Send the HTML page to the client
    res.sendFile(__dirname + "\\routes\\home-guest.html");
});

app.get('/chat', (req, res) => {
    // Set the Content-Type header to 'text/html'
    res.setHeader('Content-Type', 'text/html');
    // Send the HTML page to the client
    res.sendFile(__dirname + "\\routes\\chat-visible.html");
});

app.get('/create', (req, res) => {
    // Set the Content-Type header to 'text/html'
    res.setHeader('Content-Type', 'text/html');
    // Send the HTML page to the client
    res.sendFile(__dirname + "\\routes\\create-post.html");
});

app.get('/error', (req, res) => {
    // Set the Content-Type header to 'text/html'
    res.setHeader('Content-Type', 'text/html');
    // Send the HTML page to the client
    res.sendFile(__dirname + "\\routes\\error.html");
});

app.get('/post', (req, res) => {
    // Set the Content-Type header to 'text/html'
    res.setHeader('Content-Type', 'text/html');
    // Send the HTML page to the client
    res.sendFile(__dirname + "\\routes\\post.html");
});

app.get('/profile', (req, res) => {
    // Set the Content-Type header to 'text/html'
    res.setHeader('Content-Type', 'text/html');
    // Send the HTML page to the client
    res.sendFile(__dirname + "\\routes\\profile-posts.html");
});

// Start the server
app.listen(3000, () => {
  console.log('Server started on port 3000');
});