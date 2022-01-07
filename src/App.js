import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import NotFound from "./pages/NotFound";
import Activities from "./pages/Activities";
import "./style/index.css";
import CookieConsent from "react-cookie-consent";
import Login from "./pages/Login";
import ProtectedRoute from "./components/ProtectedRoute";
import Back from "./pages/Back";
import Update from "./pages/Update";
import Mentions from "./pages/Mentions";

const App = () => {
  return (
    <div>
      <BrowserRouter>
        <Routes>
          <Route exact path="/" element={<Home />} />
          <Route exact path="/mentions-legales" element={<Mentions />} />
          <Route exact path="/login" element={<Login />} />
          <Route
            exact
            path="/back"
            element={
              <ProtectedRoute>
                <Back />
              </ProtectedRoute>
            }
          />
          <Route
            exact
            path="/update/:id"
            element={
              <ProtectedRoute>
                <Update />
              </ProtectedRoute>
            }
          />
          <Route exact path="/activites/:activiteId" element={<Activities />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
      </BrowserRouter>
      <CookieConsent
        style={{ background: "#101010" }}
        buttonStyle={{
          background: "#96A24E",
          color: "#FFF",
          fontSize: "13px",
        }}
        expires={150}
        enableDeclineButton
        declineButtonStyle={{
          color: "#FFF",
          fontSize: "13px",
        }}
      >
        This website uses cookies to ensure you get the best experience on our
        website.
      </CookieConsent>
    </div>
  );
};

export default App;
