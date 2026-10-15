// Object Array Finder: USe the .find() method on an array of movie objects to log the title of the first movie with a 5 star rating.

let movies = [
    { title: "Inception", rating: 4 },
    { title: "Interstellar", rating: 5 },
    { title: "Avatar", rating: 5 },
    { title: "Titanic", rating: 4 }
];

let movie = movies.find((m) => m.rating === 5);

console.log(movie.title);