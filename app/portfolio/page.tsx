export default function Portfolio() {
  const tattoos = [
    "/tattoos/tattoo1.jpg",
    "/tattoos/tattoo2.jpg",
    "/tattoos/tattoo3.jpg",
    "/tattoos/tattoo4.jpg",
    "/tattoos/tattoo5.jpg",
    "/tattoos/tattoo6.jpg",
  ];

  return (
    <main className="portfolio-page">
      <h1 className="portfolio-title">Tattoo Portfolio</h1>

      <div className="portfolio-grid">
        {tattoos.map((src, index) => (
          <div key={index} className="tattoo-card">
            <img
              src={src}
              alt={`Tattoo ${index + 1}`}
              className="tattoo-img"
            />
          </div>
        ))}
      </div>
    </main>
  );
}
