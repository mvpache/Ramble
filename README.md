Backend TODOS/Needs

Need an auth system for sign up/in

Need a way to write and save posts on a movie
Need a way to add comments to posts

Need a list that keeps your "wishlisted"
Need a way to rate movies
Need a list of movies you've rated

Will need userSchema{
username,
password,
reviews, (array of reviews)
rated, (array of movieIds and ratings???)
wishlist,(array of movie ids)
}???

ReviewSchema {
movie,
user,
Review,
comments(array of comments)
}

NEED: some kind of schema for ratings as they will need to be accessed by users, and aggregated by a movie's page

START: get a basic get route,
THEN: Move all your actions/gets from FE to the server
LATER: Mlab connection & those get routes
