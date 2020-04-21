const express = require("express");

const PORT = process.env.PORT || 3000;

const app = express();

app.use(express.urlencoded({ extended: true }));
app.use(express.json());

// Karaoke App

// Users

const users = [
  {
    name: "Jonathan",
    password: "password",
    queuedSongs: [1, 2, 3],
    _id: "1",
  },
  {
    name: "Sam",
    password: "password",
    queuedSongs: [4],
    _id: "2",
  },
  {
    name: "John",
    password: "password",
    queuedSongs: [],
    _id: "3",
  },
];

// Songs

const songs = [
  {
    genre: "Country",
    title: "Achy Breaky Heart",
    artist: "Billy Ray Cyrus",
    _id: "1",
  },
  {
    genre: "Rock",
    title: "Bohemnian Rhapsody",
    artist: "Queen",
    _id: "2",
  },
  {
    genre: "Alternative",
    title: "Tubthumping",
    artist: "Chumbawumba",
    _id: "3",
  },
  {
    genre: "Latin",
    title: "Livin' La Vida Loca",
    artist: "Ricky Martin",
    _id: "5",
  },
];

app.get("/api/users", (req, res) => {
  // RETURNS A COLLECTION OF USER RESOURCES
  if (req.query.hasSongs === "true") {
    const usersArray = users.filter((user) => user.queuedSongs.length > 0);
    res.json(usersArray);
  } else {
    const usersArray = users;
    res.json(usersArray);
  }
});

app.get("/api/users/:id", (req, res) => {
  const foundUserArray = users.filter((user) => user._id === req.params.id);
  const foundUser = foundUserArray[0];
  // RETURNS A SINGLE USER RESOURCE
  res.json(foundUser);
});

app.get("/api/songs", (req, res) => {
  // RETURNS A COLLECTION OF SONG RESOURCES
  let songsArray = songs;
  if (req.query.hasSongs === true) {
    songsArray = songs.filter((song) => {
      song.queuedSongs.length > 0;
    });
  }
  res.json(songsArray);
});

app.get("/api/SONGS/:id", (req, res) => {
  const foundSongArray = songs.filter((song) => song._id === req.params.id);
  const foundSong = foundSongArray[0];
  // RETURNS A SINGLE SONG RESOURCE
  res.json(foundSong);
});

app.listen(PORT, () => {
  console.log(`App running on port ${PORT}!`);
});
