
import trollFace from '../assets/troll-face.png';
import Toggle from './Toggle/Toggle';

const Header = () => { 

    return (
        <header>
            <nav>
                <div className="nav--title-logo">
                    <img src={trollFace} alt="troll face png" className="nav--img" />
                    <h2 className="nav--item">Meme Generator</h2>
                </div>

                <Toggle />
            </nav>
        </header>
    )
}

export default Header
