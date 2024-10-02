import Carrusel from "../../Carrusel/Carrusel"
import "./Inicio.css"

const Inicio = () => {
  return (
    <div>
      {/* <Carrusel /> */}
      <section id="home" class="banner">
        <h1>Bienvenido a Gamarucci</h1>
        <p>Los mejores polos de tus bandas favoritas, en un solo lugar.</p>
    </section>
    <section id="products" class="products-section">
        <h2>Nuestros Polos Destacados</h2>
        <div class="products-grid">
            <div class="product-card">
                <img src="/images/tdg.webp" alt="Polo Blink 182" />
                <h3>Polo Three Days Grace</h3>
                <p>Un polo con el logo clásico de la banda.</p>
            </div>
            <div class="product-card">
                <img src="/images/nirvana.webp" alt="Polo Nirvana" />
                <h3>Polo Nirvana</h3>
                <p>Estilo vintage para los fanáticos del grunge.</p>
            </div>
            <div class="product-card">
                <img src="/images/linkinpark.png" alt="Polo Nirvana" />
                <h3>Polo Linkin Park</h3>
                <p>Descuento por ser amante de la banda</p>
            </div>
            <div class="product-card">
                <img src="/images/foo.webp" alt="Polo Nirvana" />
                <h3>Polo Foo Fighters</h3>
                <p>Descuento por ser amante de la banda</p>
            </div>
            <div class="product-card">
                <img src="/images/tekillers.webp" alt="The killers" />
                <h3>Polo The killers</h3>
                <p>Descuento por ser amante de la banda</p>
            </div>
        </div>
    </section>
    <section id="contact" class="contact-section">
        <h2>Contáctanos</h2>
        <p>¿Tienes alguna duda o consulta? ¡Escríbenos!</p>
        <form action="#" method="POST">
            <label for="name">Nombre:</label>
            <input type="text" id="name" name="name" required />
            <label for="email">Correo Electrónico:</label>
            <input type="email" id="email" name="email" required />
            <label for="message">Mensaje:</label>
            <textarea id="message" name="message" required></textarea>
            <button type="submit" class="btn btn-success">Enviar</button>
        </form>
    </section>
    </div>
  )
}

export default Inicio