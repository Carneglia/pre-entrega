import { useState } from "react";
import CartWidget from "./CartWidget";


function NavBar() {

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
       <CartWidget/>
        <img onClick={() => setToggle(!toggle)} className="menu-burguer" src="/images/menu-burguer.png" alt="menú en tamaños de pantalla pequeños" />
      </nav>
    </header>
  )
}
export default NavBar;

