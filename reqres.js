// Assuming you're using a Node.js server

// Import required modules
const http = require('http');
const url = require('url');

// Create the server
const server = http.createServer((req, res) => {
  // Parse the URL
  const parsedUrl = url.parse(req.url, true);
  
  // Get the path from the URL
  const path = parsedUrl.pathname;

  // Set the response headers
  res.setHeader('Content-Type', 'text/plain');

  // Check the path and send the appropriate response
  if (path === '/home') {
    res.end('Welcome home');
  } else if (path === '/about') {
    res.end('Welcome to About Us page');
  } else if (path === '/node') {
    res.end('Welcome to my Node.js project');
  } else {
    res.statusCode = 404;
    res.end('Page not found');
  }
});

// Start the server
server.listen(3000, () => {
  console.log('Server listening on port 3000');
});
