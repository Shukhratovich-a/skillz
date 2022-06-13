import Button from "../Button/Button";

import "./Articles.scss";

const Articles = () => {
  return (
    <section className="articles">
      <div className="container">
        <div className="articles__info">
          <h2 className="articles__heading">Recent Articles</h2>

          <p className="articles__description">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse varius enim in eros
            elementum tristique. Duis cursus, mi quis viverra ornare, eros dolor interdum nulla, ut
            commodo diam libero vitae erat.
          </p>

          <Button className={"articles__button"}>View all articles</Button>
        </div>

        <ul className="articles__list">
          <li className="articles__item">
            
          </li>
        </ul>
      </div>
    </section>
  );
};

export default Articles;
