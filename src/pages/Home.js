import Activites from "../components/Activites";
import Contact from "../components/Contact";
import Events from "../components/Events";
import Header from "../components/Header";
import Navigation from "../components/Navigation";
import Welcome from "../components/Welcome";
import Whoami from "../components/Whoami";

const Home = () => {
  return (
    <div>
      <Navigation />
      <Header />
      <Welcome />
      <Activites />
      <Events />
      <Whoami />
      <section id="break"></section>
      <Contact />
    </div>
  );
};

export default Home;
