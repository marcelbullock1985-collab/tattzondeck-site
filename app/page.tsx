export default function Home() {
return (
<main style={{
backgroundColor: "black",
color: "white",
minHeight: "100vh",
textAlign: "center",
padding: "20px",
fontFamily: "Arial"
}}>

```
  <img src="/logo.png" alt="TattzOnDeck Logo" width="250" />

  <h1 style={{marginTop:"20px"}}>TattzOnDeck</h1>
  <p>Albany NY Tattoo Artist</p>

  <a
    href="#portfolio"
    style={{
      display:"inline-block",
      marginTop:"20px",
      padding:"12px 20px",
      background:"white",
      color:"black",
      borderRadius:"8px",
      textDecoration:"none",
      fontWeight:"bold"
    }}
  >
    View Portfolio
  </a>

  <section id="portfolio" style={{marginTop:"40px"}}>
    <h2>Recent Work</h2>

    <div style={{
      display:"grid",
      gridTemplateColumns:"1fr 1fr",
      gap:"10px",
      marginTop:"20px"
    }}>

      <img src="/tattoos/tattoo1.jpg" width="100%" />
      <img src="/tattoos/tattoo2.jpg" width="100%" />
      <img src="/tattoos/tattoo3.jpg" width="100%" />
      <img src="/tattoos/tattoo4.jpg" width="100%" />

    </div>
  </section>

</main>
```

)
}
