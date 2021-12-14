import { Arrow, Musician, Music_Note, Music_Playlist, Search, Sound_Settings } from "../../assets/icons";
import Button from "../Button/Button";
import Ornament from "../../assets/ornament.svg";
import './Hero.scss';

const Hero = () => {
    return (
      <div className="hero__container">
        <div className="hero__details">
          <h1>Let's start with the good music!</h1>
          <h3>
            Set your own playlist of your choice from your favorite artists or
            albums or enjoy our custom made music selection according to your
            preferences
          </h3>
          <Button title="Try Free Trial" />
          <a href="">
            Learn More <img src={Arrow} alt="" />
          </a>
        </div>
        <div className="">
          <img src={Ornament} alt="" className="hero__ornament" />
          <input type="text" name="" id="" />
          <Button title="Search">
            <img src={Search} alt="" />
          </Button>
        </div>
        <div className="">
          <div className="">
            <img src={Music_Playlist} alt="" />
            <strong>Playlist Selection</strong>
          </div>
          <div className="">
            <img src={Sound_Settings} alt="" />
            <strong>Morning Hype</strong>
          </div>
          <div className="">
            <img src={Music_Note} alt="" />
            <strong>Calming Meditation</strong>
          </div>
          <div className="">
            <img src={Musician} alt="" />
            <strong>New & Fresh</strong>
          </div>
        </div>
      </div>
    );
}

export default Hero
