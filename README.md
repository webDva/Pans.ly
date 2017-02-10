# Pans.ly
Just a small, little URL shortener web app project

# How it works
Node.js and Expressjs are used to create the backend mini-API server. The API is designed to be very simple: GET requests for finding where a shortened URL leads to and POST requests to create a new URL PostgreSQL database entry.

The frontend uses Angular to perform the GET and POST requests and to perform some input validation, but ultimately it's up to the API server to decide.

..Actually, very little, if any, sort of validation happens (at least I brainstormed security features!). This web app may even be suspectible to SQL injection (I recently learned that the `pg` PostgreSQL module does some validation to prevent this) and other types of abuse. But it's not a real production app as Pans.ly is just a small project to gain skills in web app development.

Also, it's not really responsive in that the font is too big on small screens. I did try to do a mobile-first design, but, at my current level, I don't know how to do CSS3 media queries to adapt to small screens.

# No authentication and HTTPS
To decrease development time, no authentication like OAuth is used and no SSL as that would increase the scope and complexitity for me in my currently low-level web dev state.

# API features

`/api/shorten/?url=` (and subsequently `/api/createEntry`) takes a URL to create a hash for inserting a new entry into a database. The Pans.ly database has a table `urls` that looks like this:

```
CREATE TABLE urls (
  long_name varchar(80),
  short_name varchar(80)
);
```

where `long_name` is the URL to redirect to and `short_name` is the new URL pointer, e.g., `http://pans.ly/dv2dj9`.

# Installation and Setup
I think that since it's a Netbeans project, you can simply import this.

If you're not going to use Netbeans, you can still use Node.js on `main.js` and then use the URL `http://localhost:3000` to use Pans.ly.

Also, you have to create a PostgreSQL database named `pansly` with the user `postgres` or change the `pg.client` connection string parameter instead. You have to also create the `urls` table mentioned above.
