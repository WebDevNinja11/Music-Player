// Audio Player Setup
const audio = new Audio();

// Define the Artists and their tracks
const artists = [
    {
        name: "Coldplay",
        tracks: [
            {
                name: "Sparks",
                author: "Coldplay",
                mp3file: "./assets/audio/Sparks.mp3",
                img: "./assets/images/Sparks.jpg",
                imgid: "1"
            }
        ]
    },
    {
        name: "Liana Flores",
        tracks: [
            {
                name: "Rises the moon",
                author: "Liana Flores",
                mp3file: "./assets/audio/rises the moon.mp3",
                img: "./assets/images/risesthemoon.jpg",
                imgid: "2"
            }
        ]
    },
    {
        name: "Hulvey & Forest Frank",
        tracks: [
            {
                name: "No longer Bound",
                author: "Hulvey & Forest Frank",
                mp3file: "./assets/audio/no longer bound.mp3",
                img: "./assets/images/notbound.jpg",
                imgid: "3"
            },
            {
                name: "Altar",
                author: "Hulvey & Forrest Frank",
                mp3file: "./assets/audio/Altar.mp3",
                img: "./assets/images/Altar.jpg",
                imgid: "8"
            },
            {
                name: "Cant Tell It All (Remix)",
                author: "Hulvey & KB & Lecrae",
                mp3file: "./assets/audio/All.mp3",
                img: "./assets/images/All.jpg",
                imgid: "4"
            }
        ]
    },
    {
        name: "Seafret",
        tracks: [
            {
                name: "Atlantis",
                author: "Seafret",
                mp3file: "./assets/audio/Atlantis.mp3",
                img: "./assets/images/Atlantis.jpg",
                imgid: "5"
            }
        ]
    },
    {
        name: "BoywithUke",
        tracks: [
            {
                name: "Toxic",
                author: "BoywithUke",
                mp3file: "./assets/audio/Toxic.mp3",
                img: "./assets/images/Toxi.jpg",
                imgid: "6"
            }
        ]
    },
    {
        name: "Hollow Coves",
        tracks: [
            {
                name: "Blessings",
                author: "Hollow Coves",
                mp3file: "./assets/audio/Blessings.mp3",
                img: "./assets/images/Blessings.jpg",
                imgid: "7"
            }
        ]
    },
    {
        name: "Passenger",
        tracks: [
            {
                name: "Let her go",
                author: "Passenger",
                mp3file: "./assets/audio/Let Her Go.mp3",
                img: "./assets/images/passenger.jpg",
                imgid: "9"
            }
        ]
    },
    {
        name: "VØJ & Narvent",
        tracks: [
            {
                name: "Memory Reboot",
                author: "VØJ & Narvent",
                mp3file: "./assets/audio/Memory Reboot.mp3",
                img: "./assets/images/Reboot.jpg",
                imgid: "10"
            }
        ]
    }
];

// Initialize current track index
let currentTrackIndex = null;
let currentArtistIndex = null;
let playing = false;
// Function to toggle play and pause
function togglePlayPause() {
    if (audio.paused) {
        audio.play();  // Play the audio if it's paused
        document.getElementById('play-pause-button').textContent = "⏸️";  // Change button to pause
    } else {
        audio.pause();  // Pause the audio if it's playing
        document.getElementById('play-pause-button').textContent = "▶️";  // Change button to play
    }
}

// Add an event listener for the play/pause button
document.getElementById('play-pause-button').addEventListener('click', togglePlayPause);

// Function to play selected track
function playTrack(artistIndex, trackIndex) {
    const track = artists[artistIndex].tracks[trackIndex]; // Get the track from the selected artist
    audio.src = track.mp3file;
    document.getElementById('track-img').src = track.img;
    document.getElementById('track-name').textContent = track.name;
    document.getElementById('track-author').textContent = track.author;
    audio.play();  // Play the track immediately
    playing = true;
    document.getElementById('play-pause-button').textContent = "⏸️";  // Change to Pause
    currentTrackIndex = trackIndex;
    currentArtistIndex = artistIndex;
}
document.getElementById('play-pause-button').onclick = () => {
    togglePlayPause()
}
// Toggle Menu visibility
document.getElementById('menu-toggle-button').addEventListener('click', () => {
    const menu = document.getElementById('menu');
    menu.style.display = menu.style.display === "none" || menu.style.display === "" ? "block" : "none";
});

// Append artists and their tracks to the menu
function appendArtistsToMenu() {
    const menu = document.getElementById('menu');
    artists.forEach((artist, artistIndex) => {
        // Create artist button
        const artistButton = document.createElement('button');
        artistButton.textContent = artist.name;
        artistButton.style.fontSize = '20px';
        
        // Create dropdown for artist's tracks
        const dropdown = document.createElement('div');
        dropdown.style.display = "none"; // Initially hidden
        dropdown.classList.add('track');

        // Create a button for each track
        artist.tracks.forEach((track, trackIndex) => {
            const trackButton = document.createElement('button');
            trackButton.textContent = track.name;
            trackButton.style.fontSize = '20px';
            trackButton.onclick = () => playTrack(artistIndex,trackIndex);
            
            dropdown.appendChild(trackButton);
        });

        // Toggle dropdown visibility when artist button is clicked
        artistButton.onclick = () => {
            dropdown.style.display = dropdown.style.display === "block" ? "none" : "block";
        };

        // Append artist button and dropdown to the menu
        menu.appendChild(artistButton);
        menu.appendChild(dropdown);
    });
}

// Initialize the page
appendArtistsToMenu();
