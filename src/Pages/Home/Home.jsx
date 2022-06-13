import Hero from "../../Components/Hero/Hero";
import Favorites from "../../Components/Favorites/Favorites";
import Recommendations from "../../Components/Recommendations/Recommendations";
import Workshops from "../../Components/Workshops/Workshops";
import Review from "../../Components/Review/Review";
import Teaching from "../../Components/Teaching/Teaching";
import Articles from "../../Components/Articles/Articles";

const Home = () => {
  return (
    <main className="main">
      <Hero />
      <Favorites />
      <Recommendations />
      <Workshops />
      <Review />
      <Teaching />
      <Articles />
    </main>
  );
};

export default Home;
