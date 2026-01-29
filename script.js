let allSongs = [];

fetch("data/music.json")
  .then(res => res.json())
  .then(data => {
    allSongs = data.songs;
    displaySongs(allSongs);
  });

function displaySongs(songs) {
  const container = document.getElementById("songs");
  if (!container) return;

  container.innerHTML = "";

  songs.forEach(song => {
    container.innerHTML += `
      <div class="card">
        <h3>${song.title}</h3>
        <p>${song.artist}</p>
        <p>Mood: ${song.mood}</p>
        <p>Genre: ${song.genre}</p>
        <a href="${song.spotify}" target="_blank">🎧 Open in Spotify</a>
      </div>
    `;
  });
}

function searchMusic(value) {
  const filtered = allSongs.filter(song =>
    song.title.toLowerCase().includes(value.toLowerCase()) ||
    song.artist.toLowerCase().includes(value.toLowerCase())
  );
  displaySongs(filtered);
}
