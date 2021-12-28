import Activites from "../components/Activites";
import Events from "../components/Events";
import Header from "../components/Header";
import Navigation from "../components/Navigation";
import Welcome from "../components/Welcome";

const Home = () => {
  return (
    <div>
      <Navigation />
      <Header />
      <Welcome />
      <Activites />
      <Events />
    </div>
  );
};

export default Home;
