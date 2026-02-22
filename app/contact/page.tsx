export default function Contact() {
  return (
    <div
      style={{
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        gap: "70px", // <-- BIG spacing between links
        fontSize: "40px",
        fontWeight: 900,
        letterSpacing: "3px"
      }}
    >
      <a
        href="https://www.facebook.com/share/1DVxFEGN8m/"
        target="_blank"
        rel="noopener noreferrer"
        style={{ textDecoration: "none", color: "white" }}
      >
        FACEBOOK
      </a>

      <a
        href="https://www.instagram.com/thetattguy518"
        target="_blank"
        rel="noopener noreferrer"
        style={{ textDecoration: "none", color: "white" }}
      >
        INSTAGRAM
      </a>

      <a
        href="https://pin.it/3zWGnD3N6"
        target="_blank"
        rel="noopener noreferrer"
        style={{ textDecoration: "none", color: "white" }}
      >
        PINTEREST
      </a>
    </div>
  )
}