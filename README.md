# Pans.ly
Just a small, little URL shortener web app project (still in early development!)

# How it works
Node.js and Expressjs are used to create the backend API server. The API is designed to be very simple: GET requests for finding where a shortened URL leads to and POST requests to create a new URL PostgreSQL database entry.

The frontend uses Angular to perform the GET and POST requests and to perform some input validation, but ultimately it's up to the API server to decide.

..Actually, very little, if any, sort of validation happens (at least I brainstormed security features!). This web app may even be suspectible to SQL injection and other types of abuse. But it's not a real production app as Pans.ly is just a small project to gain skills in web app development.

# No authentication and HTTPS
To decrease development time, no authentication like OAuth is used and no SSL as that would increase the scope and complexitity for me in my currently low-level web dev state.
