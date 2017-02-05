# Pans.ly
Just a small, little URL shortener web app project (still in early development!)

# How it works
Node.js and Expressjs are used to create the backend API server. The API is designed to be very simple: GET requests for finding where a shortened URL leads to and POST requests to create a new URL PostgreSQL database entry.

The frontend uses Angular to perform the GET and POST requests and to perform some input validation, but ultimately it's up to the API server to decide.

# No authentication and HTTPS
To decrease development time, no authentication like OAuth is used and no SSL as that would increase the scope and complexitity for me in my currently low-level web dev state.
