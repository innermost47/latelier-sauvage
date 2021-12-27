import "../style/welcome.css";
import { welcomeDatas } from "../datas/welcomeDatas";

const Welcome = () => {
  return (
    <section id="welcome">
      <div className="container">
        <div className="row">
          <h2 className="sectionTitle">VOUS SOUHAITEZ</h2>
          {welcomeDatas.map((data, key) => {
            return (
              <div key={key} className="col-md-4">
                <img src={data.image} alt="image" className="icon" />
                <p>{data.content}</p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default Welcome;
