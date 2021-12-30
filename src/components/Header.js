import "../style/header.css";

const Header = () => {
  return (
    <div className="header">
      <div className="headerBox">
        <h1 className="text-light">L'ATELIER SAUVAGE</h1>
        <p className="text-light">
          Découvrez les plantes sauvages comestibles, <br /> médicinales, et la
          vie en pleine Nature...
        </p>
        <div>
          <a href="#activities" className="btn btn-green text-light magicLinks">
            Découvrir
          </a>
        </div>
      </div>
      <div>
        <a href="#welcome" className="magicLinks">
          <img src="img/chevron.png" alt="chevron down" className="chevron" />
        </a>
      </div>
    </div>
  );
};

export default Header;
