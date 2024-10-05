import "./Inicio.css"

const Inicio = () => {

document.title = "Gamarucci"

  return (
    <div>
      <section id="home" class="banner">
        <h1>Bienvenido a Gamarucci</h1>
        <p style={{width: "50%", margin: "auto"}}>Los mejores polos de tus bandas favoritas, en un solo lugar. En Gamarucci, nos apasiona ofrecerte una selección exclusiva de ropa que refleja tu estilo y tus gustos musicales.</p>
    </section>
    <section id="products" class="products-section">
        <h2>Nuestros Polos Destacados</h2>
        <div class="products-grid">
            <div class="product-card" data-aos="fade-down">
                <img src="/images/tdg.webp" alt="Polo Blink 182" />
                <h3>Polo Three Days Grace</h3>
                <p>Un polo con el logo clásico de la banda.</p>
            </div>
            <div class="product-card" data-aos="fade-up">
                <img src="/images/nirvana.webp" alt="Polo Nirvana" />
                <h3>Polo Nirvana</h3>
                <p>Estilo vintage para los fanáticos del grunge.</p>
            </div>
            <div class="product-card" data-aos="fade-down">
                <img src="/images/linkinpark.png" alt="Polo Nirvana" />
                <h3>Polo Linkin Park</h3>
                <p>Descuento por ser amante de la banda</p>
            </div>
            <div class="product-card" data-aos="fade-up">
                <img src="/images/foo.webp" alt="Polo Nirvana" />
                <h3>Polo Foo Fighters</h3>
                <p>Descuento por ser amante de la banda</p>
            </div>
            <div class="product-card" data-aos="fade-down">
                <img src="/images/tekillers.webp" alt="The killers" />
                <h3>Polo The killers</h3>
                <p>Descuento por ser amante de la banda</p>
            </div>
        </div>
    </section>
    </div>
  )
}

export default Inicio