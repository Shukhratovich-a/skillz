import Button from "../Button/Button";

import TeachingImage from "../../Assets/Images/Teaching.png";

import "./Teaching.scss";

const Teaching = () => {
  return (
    <section className="teaching">
      <div className="container">
        <img className="teaching__image" src={TeachingImage} alt="" width={635} height={660} />

        <div className="teaching__info">
          <h2 className="teaching__heading">A Passion for Teaching</h2>

          <p className="teaching__description">
            A deep-dive on the Instagram algorythm, hashtags, content strategy, and branding.
          </p>

          <Button className={"teaching__button"}>About Skillz</Button>
        </div>
      </div>
    </section>
  );
};

export default Teaching;
