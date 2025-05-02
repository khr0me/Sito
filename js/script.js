function ciao() {
  alert("that's me, khr0me!");
}

// Array delle canzoni
const songs = [
  "/songs/Blksmiith - SR20DET.mp3",
  "/songs/interface corrupted.mp3",
  "/songs/Locked In Alien Instrumental.mp3",
];

// Seleziona il player audio
const audio = document.getElementById("bg-music");

// Funzione per cambiare la canzone in modo casuale
function playRandomSong() {
  const randomIndex = Math.floor(Math.random() * songs.length);
  audio.src = songs[randomIndex];
  audio.volume = 0.2;
  audio.play().catch((error) => {
    // Se il play viene bloccato, non fare nulla
    console.log("Autoplay bloccato, aspettiamo l'interazione dell'utente.");
  });
}

// Avviare la canzone dopo la prima interazione
function startMusicOnInteraction() {
  document.removeEventListener("click", startMusicOnInteraction);
  playRandomSong();
}

document.addEventListener("DOMContentLoaded", () => {
  // Aspettiamo un click per avviare la musica
  document.addEventListener("click", startMusicOnInteraction);
});
