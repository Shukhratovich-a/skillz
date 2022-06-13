import Button from "../Button/Button";

import FavoritesFourth from "../../Assets/Images/FavoritesFourth.jpg";
import FavoritesThird from "../../Assets/Images/FavoritesThird.jpg";

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
            <div className="articles__item__wrapper">
              <img
                className="articles__item__image"
                src={FavoritesFourth}
                alt=""
                width={390}
                height={195}
              />

              <div className="articles__item__inner">
                <time className="articles__item__time" dateTime="2021-02-08">
                  February 8, 2021
                </time>

                <h3 className="articles__item__heading">
                  The TikTok Algorithm: How to Get the Best Engagement
                </h3>

                <strong className="articles__item__username">Dianne Russell</strong>
              </div>
            </div>
          </li>

          <li className="articles__item">
            <div className="articles__item__wrapper">
              <img
                className="articles__item__image"
                src={FavoritesFourth}
                alt=""
                width={390}
                height={195}
              />

              <div className="articles__item__inner">
                <time className="articles__item__time" dateTime="2021-02-08">
                  February 8, 2021
                </time>

                <h3 className="articles__item__heading">How to Win Friends and Influence People</h3>

                <strong className="articles__item__username">Marvin McKinney</strong>
              </div>
            </div>
          </li>

          <li className="articles__item">
            <div className="articles__item__wrapper">
              <img
                className="articles__item__image"
                src={FavoritesThird}
                alt=""
                width={390}
                height={195}
              />

              <div className="articles__item__inner">
                <time className="articles__item__time" dateTime="2021-01-31">
                  January 31, 2021
                </time>

                <h3 className="articles__item__heading">
                  iPhone Photography: Tips, Tricks, and Best Practices
                </h3>

                <strong className="articles__item__username">Katie Murphy</strong>
              </div>
            </div>
          </li>
        </ul>
      </div>
    </section>
  );
};

export default Articles;
