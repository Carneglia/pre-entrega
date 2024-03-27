import { useState } from "react";


function Header() {

const [toggle, setToggle] = useState(false)

  return (
    <header>
      <nav>
        <a href="#"><h1>Pardo Studio</h1></a>
        {toggle &&(
           <ul className="ul">
           <li><a href="#">Clases</a></li>
           <li><a href="#">Videos</a></li>
           <li><a href="#">Contacto</a></li>
         </ul>
        )}
        <section className="cart-section">
          <img className="cart" src="/images/cart.png" alt="Carrito de compras" /><span>0</span>
        </section>
        <img onClick={() => setToggle(!toggle)} className="menu-burguer" src="/images/menu-burguer.png" alt="menú en tamaños de pantalla pequeños" />
      </nav>
    </header>
  )
}
export default Header;

