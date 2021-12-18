import {
  Arrow,
  Musician,
  Music_Note,
  Music_Playlist,
  Search,
  Sound_Settings,
} from "../../assets/icons";
import Button from "../Button/Button";
import Ornament from "../../assets/ornament.svg";
import "./Hero.scss";
import { Link } from "react-router-dom";

const Hero = () => {
  return (
    <div className="hero__container">
      <article className="hero__details">
        <h1>Let's start with the good music!</h1>
        <p>
          Set your own playlist of your choice from your favorite artists or
          albums or enjoy our custom made music selection according to your
          preferences
        </p>
        <div className="hero__btn__group">
          <Button title="Try Free Trial" className="hero__btn" />
          <Link to="" className="hero__learn__more">
            Learn More <img src={Arrow} alt="" />
          </Link>
        </div>
      </article>
      <div className="hero__search">
        <img src={Ornament} alt="" className="hero__ornament" />
        <div className="search__container">
          <input type="text" name="" id="" />
          <Button title="Search" className="hero__btn__search">
            <img src={Search} alt="" />
          </Button>
        </div>
      </div>
      <div className="hero__category">
        <div className="hero__category__item">
          <img src={Music_Playlist} alt="" />
          <strong>Playlist Selection</strong>
        </div>
        <div className="hero__category__item">
          <img src={Sound_Settings} alt="" />
          <strong>Morning Hype</strong>
        </div>
        <div className="hero__category__item">
          <img src={Music_Note} alt="" />
          <strong>Calming Meditation</strong>
        </div>
        <div className="hero__category__item">
          <img src={Musician} alt="" />
          <strong>New & Fresh</strong>
        </div>
      </div>
    </div>
  );
};

export default Hero;
