import img from '../assets/digimonLogo.png'
import '../css/header.css'
function Header() {
    return (
        <header>
            <img src={img} alt="hola " />

            <nav class="menu">
                <a href="">Info</a>
                <a href="">Hola</a>
                <a href="">Contacto</a>
            </nav>
            
        </header>

    );
}

export default Header;