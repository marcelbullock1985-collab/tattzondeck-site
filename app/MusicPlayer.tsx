"use client"

export default function MusicPlayer() {
  const toggleMusic = () => {
    const audio = document.getElementById("bg-music") as HTMLAudioElement
    if (!audio) return

    if (audio.paused) {
      audio.volume = 0.5
      audio.play()
    } else {
      audio.pause()
    }
  }

  return (
    <>
      <audio id="bg-music" src="/music.mp3" loop preload="auto"></audio>

      <button
        onClick={toggleMusic}
        style={{
          position: "fixed",
          bottom: "25px",
          right: "25px",
          padding: "14px 24px",
          background: "white",
          color: "black",
          fontWeight: 900,
          fontSize: "16px",
          border: "none",
          cursor: "pointer",
          zIndex: 1000
        }}
      >
        MUSIC
      </button>
    </>
  )
}
