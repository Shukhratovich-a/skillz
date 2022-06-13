import Hero from "../../Components/Hero/Hero";
import Favorites from "../../Components/Favorites/Favorites";
import Recommendations from "../../Components/Recommendations/Recommendations";

const Home = () => {
  return (
    <main className="main">
      <Hero />
      <Favorites />
      <Recommendations />
    </main>
  );
};

export default Home;
