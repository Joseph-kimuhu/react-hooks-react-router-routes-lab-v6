// src/data.jsx

export const movies = [
  {
    id: 1,
    title: "The Matrix",
    time: "2h 16m",
    genres: ["Action", "Sci-Fi"],
  },
  {
    id: 2,
    title: "Inception",
    time: "2h 28m",
    genres: ["Action", "Adventure", "Sci-Fi"],
  },
  {
    id: 3,
    title: "Interstellar",
    time: "2h 49m",
    genres: ["Adventure", "Drama", "Sci-Fi"],
  },
];

export const actors = [
  {
    id: 1,
    name: "Keanu Reeves",
    movies: ["The Matrix"],
  },
  {
    id: 2,
    name: "Leonardo DiCaprio",
    movies: ["Inception"],
  },
  {
    id: 3,
    name: "Matthew McConaughey",
    movies: ["Interstellar"],
  },
];

export const directors = [
  {
    id: 1,
    name: "Lana Wachowski",
    movies: ["The Matrix"],
  },
  {
    id: 2,
    name: "Christopher Nolan",
    movies: ["Inception", "Interstellar"],
  },
  {
    id: 3,
    name: "Lilly Wachowski",
    movies: ["The Matrix"],
  },
];
