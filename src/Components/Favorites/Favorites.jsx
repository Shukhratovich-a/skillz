import Button from "../Button/Button";

import "./Favorites.scss";

const Favorites = () => {
  return (
    <section className="favorites">
      <div className="container">
        <div className="favorites__info">
          <h2 className="favorites__heading">Featured Courses</h2>

          <p className="favorites__text">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse varius enim in eros
            elementum tristique. Duis cursus, mi quis viverra ornare, eros dolor interdum nulla, ut
            commodo diam libero vitae erat.
          </p>

          <Button>View All Courses</Button>
        </div>
      </div>
    </section>
  );
};

export default Favorites;
