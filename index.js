// Array of song objects. Add at least 5 songs with title, artist, and genre properties.
const songs = [
    { title: "Hooked on a Feeling", artist: "Blue Swede", genre: "Pop" },
    { title: "Moonage Daydream", artist: "David Bowie", genre: "Rock" },
    { title: "I Want You Back", artist: "The Jackson 5", genre: "Pop" },
    { title: "Spirit in the Sky", artist: "Norman Greenbaum", genre: "Rock" },
    { title: "Cherry Bomb", artist: "The Runaways", genre: "Rock" },
    { title: "Escape (The Piña Colada Song)", artist: "Rupert Holmes", genre: "Pop" },
    { title: "O-O-H Child", artist: "The Five Stairsteps", genre: "R&B" },
    { title: "Ain't No Mountain High Enough", artist: "Marvin Gaye & Tammi Terrell", genre: "R&B" },
    { title: "Come and Get Your Love", artist: "Redbone", genre: "Rock" },
    { title: "I'm Not in Love", artist: "10cc", genre: "Pop" },
    { title: "Fooled Around and Fell in Love", artist: "Elvin Bishop", genre: "Rock" },
    // Feel free to add even more songs
    { title: "Shape of You", artist: "Ed Sheeran", genre: "Pop"},
    { title: "Another", artist: "Muni Long", genre: "R&B"},
    { title: "Hotel California", artist: "Eagles", genre: "Rock"},
    { title: "Bohemian Rhapsody", artist: "Queen", genre: "Rock"},
    { title: "Rolling in the Deep", artist: "Adele", genre: "Pop"},
    { title: 'Dancing in the Dark', artist: 'Bruce Springsteen', genre: 'Pop'},
];


// Object containing each Guardian's preferred genre
const guardians = {
    "Star-Lord": "Rock",
    "Gamora": "Pop",
    "Drax": "R&B",
    "Rocket": "Pop",
    "Groot" : "R&B",
    // Add preferences for Drax, Rocket, and Groot
};

// Function to generate playlist based on preferred genre
function generatePlaylist(guardians, songs) {
    // The map() function to create playlists for each Guardian
    let guardianPlaylist =  Object.entries(guardians).map(([guardian, genre]) => 
    ({ guardian,songs: songs.filter(song => song.genre === genre)}));
    return guardianPlaylist;
}

// Call generatePlaylist and display the playlists for each Guardian
let playlists =  generatePlaylist(guardians, songs);

    let playlistsDiv = document.getElementById('playlists');

    playlists.forEach(playlist => {

      const { guardian, songs } = playlist;
  
      const playlistElement = document.createElement('div');
      playlistElement.classList.add('playlist');

      let guardianHeader = document.createElement("h2");
      guardianHeader.textContent = `${guardian}'s Playlist`;
      playlistElement.appendChild(guardianHeader);

      
      songs.forEach(song => {
        const songElement = document.createElement('div');
        songElement.classList.add('song');

        const songTitle = document.createElement('span');
        songTitle.classList.add('song-title');
        songTitle.textContent = song.title;
        songElement.appendChild(songTitle);

        const songArtist = document.createElement('span');
        songArtist.textContent = ` by ${song.artist}`;
        songElement.appendChild(songArtist);

        playlistElement.appendChild(songElement);
      });
      playlistsDiv.appendChild(playlistElement);
    });
