export default function Home() {
return (
<main
style={{
backgroundColor: "black",
color: "white",
minHeight: "100vh",
textAlign: "center",
padding: "20px",
fontFamily: "Arial, sans-serif"
}}
>
{/* Logo */}
<img
src="/logo.png"
alt="TattzOnDeck Logo"
style={{ width: "220px", marginBottom: "10px" }}
/>

```
  {/* Title */}
  <h1 style={{ fontSize: "28px", margin: "10px 0" }}>TattzOnDeck</h1>
  <p style={{ opacity: 0.8 }}>Albany NY Tattoo Artist</p>

  {/* Buttons */}
  <div style={{ marginTop: "20px" }}>
    <a
      href="#portfolio"
      style={{
        display: "inline-block",
        margin: "10px",
        padding: "12px 20px",
        background: "white",
        color: "black",
        borderRadius: "8px",
        textDecoration: "none",
        fontWeight: "bold"
      }}
    >
      View Portfolio
    </a>

    <a
      href="https://instagram.com"
      style={{
        display: "inline-block",
        margin: "10px",
        padding: "12px 20px",
        background: "#e1306c",
        color: "white",
        borderRadius: "8px",
        textDecoration: "none",
        fontWeight: "bold"
      }}
    >
      Instagram
    </a>
  </div>

  {/* Portfolio Section */}
  <section id="portfolio" style={{ marginTop: "50px" }}>
    <h2 style={{ marginBottom: "20px" }}>Recent Work</h2>

    <div
      style={{
        display: "grid",
        gridTemplateColumns: "1fr 1fr",
        gap: "10px"
      }}
    >
      <img src="/portfolio/tattoo1.jpg" style={{ width: "100%" }} />
      <img src="/portfolio/tattoo2.jpg" style={{ width: "100%" }} />
      <img src="/portfolio/tattoo3.jpg" style={{ width: "100%" }} />
      <img src="/portfolio/tattoo4.jpg" style={{ width: "100%" }} />
    </div>
  </section>
</main>
```

)
}

