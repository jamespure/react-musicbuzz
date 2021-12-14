import { Link } from "react-router-dom";
import {
  Music_Playlist,
  Arrow,
  Sound_Settings,
  Search,
  Music_Note,
  Musician,
  Menu,
} from "../../assets/icons/index";
import ornament from "../../assets/ornament.svg";
import Button from "../Button/Button";
import Hero from "../Hero/Hero";
import "./Header.scss";

const Header = () => {
  return (
    <header className="header">
      <nav className="header__nav">
        <div className="header__logo">
          <h1>MusicBuzz</h1>
        </div>
        <div className="">
          <Link className="header__nav__link" to="">
            Home
          </Link>
          <Link className="header__nav__link" to="">
            Features
          </Link>
          <Link className="header__nav__link" to="">
            Contact
          </Link>
          <Link className="header__nav__link" to="">
            About Us
          </Link>
        </div>
        <div className="header__btn__group">
          <button to="" className="auth__btn__signIn">
            Sign In
          </button>
        </div>
        <img src={Menu} alt="" className="header__menu" />
      </nav>
      <Hero />
    </header>
  );
};

export default Header;
