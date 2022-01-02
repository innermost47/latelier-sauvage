import Footer from "../components/Footer";
import axios from "axios";
import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import { url } from "../js/Constantes";
import Navigation from "../components/Navigation";
import { useNavigate } from "react-router-dom";
import "../style/update.css";
import { useForm } from "react-hook-form";
import dateFormat from "dateformat";
import { Link } from "react-router-dom";

const Update = () => {
  window.scrollTo(0, 0);
  let id = useParams();
  id = id.id;
  const [dataToUpdate, setData] = useState([]);
  const navigate = useNavigate();
  const redirect = () => navigate("/back");
  const token = localStorage.getItem("token");

  useEffect(() => {
    axios.get(`${url}events/${id}`).then((res) => {
      setData(res.data);
    });
  }, []);

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const formData = new FormData();
  let imagefile = document.querySelector("#image");
  const onSubmit = (data) => {
    formData.append("title", data.title);
    formData.append("description", data.description);
    formData.append("place", data.place);
    formData.append("link", data.link);
    formData.append("startAt", data.startAt);
    formData.append("endAt", data.endAt);
    if (!imagefile.files[0]) {
      formData.append("image", dataToUpdate.image);
    } else {
      formData.append("image", imagefile.files[0].name);
    }
    const object = {};
    formData.forEach((value, key) => {
      object[key] = value;
    });
    const json = JSON.stringify(object);
    axios
      .put(url + "api/events/" + id, json, {
        headers: {
          "Content-Type": "multipart/form-data",
          Authorization: "Bearer " + token,
        },
      })
      .then((response) => {
        if (!imagefile.files[0]) {
          redirect();
        }
      })
      .catch((error) => {
        alert("Il y a eu une erreur");
      });
    if (imagefile.files[0]) {
      formData.append("image", imagefile.files[0]);
      axios
        .post(url + "api/images", formData, {
          headers: {
            "Content-Type": "multipart/form-data",
            Authorization: "Bearer " + token,
          },
        })
        .then((response) => {
          redirect();
        })
        .catch((error) => {
          alert("Erreur lors de l'upload de l'image");
        });
    }
  };

  let errorCount = 0;
  let errorMessage = "";
  if (Object.keys(errors).length > 0) {
    errorCount = Object.keys(errors).length;
    if (errors.title) {
      errors.title.message = "Quel est le titre de l'évènement ?";
      errorMessage = errors.title.message;
    }
    if (errors.description) {
      errors.description.message = "Quel est la description de l'évènement ?";
      errorMessage = errors.description.message;
    }
    if (errors.place) {
      errors.place.message = "Où se passe cet évènement ?";
      errorMessage = errors.place.message;
    }
    if (errors.startAt) {
      errors.startAt.message = "Quand commence cet évènement ?";
      errorMessage = errors.startAt.message;
    }
    if (errors.endAt) {
      errors.endAt.message = "Quand est ce que fini cet évènement ?";
      errorMessage = errors.endAt.message;
    }
    if (errors.link) {
      errors.link.message = "Quel est le lien de l'évènement ?";
      errorMessage = errors.link.message;
    }
  }
  return (
    <div>
      <Navigation />
      <div className="update">
        <div className="container">
          <div className="row">
            <h2 className="mt-4">Modifier {dataToUpdate.title}</h2>
            {errorCount > 0 ? (
              <p className="alert alert-danger mt-3 mb-3">{errorMessage}</p>
            ) : (
              ""
            )}
            <form onSubmit={handleSubmit(onSubmit)} className="mb-3">
              <div className="form-container mt-3">
                <input
                  type="text"
                  placeholder="Title"
                  className="form-control"
                  value={dataToUpdate.title ? dataToUpdate.title : ""}
                  {...register("title", { required: true })}
                />
              </div>
              <div className="form-container mt-3">
                <textarea
                  placeholder="Description"
                  className="form-control"
                  value={
                    dataToUpdate.description ? dataToUpdate.description : ""
                  }
                  {...register("description", { required: true })}
                ></textarea>
              </div>
              <div className="form-container mt-3">
                <input
                  type="text"
                  placeholder="Lieu"
                  className="form-control"
                  value={dataToUpdate.place ? dataToUpdate.place : ""}
                  {...register("place", { required: true })}
                />
              </div>
              <div className="form-container mt-3">
                <input
                  type="text"
                  placeholder="Lien"
                  className="form-control"
                  value={dataToUpdate.link ? dataToUpdate.link : ""}
                  {...register("link", { required: true })}
                />
              </div>
              <div className="form-container mt-3">
                <label htmlFor="start">
                  Start date:{" "}
                  {dateFormat(dataToUpdate.startAt, "dd/mm/yy HH:MM")}
                </label>
                <input
                  type="datetime-local"
                  id="start"
                  className="form-control mt-1"
                  {...register("startAt", { required: true })}
                />
              </div>
              <div className="form-container mt-3">
                <label htmlFor="end">
                  End date: {dateFormat(dataToUpdate.endAt, "dd/mm/yy HH:MM")}
                </label>
                <input
                  type="datetime-local"
                  className="form-control mt-1"
                  id="end"
                  {...register("endAt", { required: true })}
                />
              </div>
              <div className="form-container mt-3">
                <p>Image actuelle</p>
                <img
                  src={url + "img/" + dataToUpdate.image}
                  alt={dataToUpdate.image}
                  className="imageEventsBack"
                />
              </div>
              <div className="form-container mt-3">
                <label htmlFor="image">Nouvelle image (facultatif)</label>
                <input type="file" className="form-control mt-1" id="image" />
              </div>
              <button
                type="submit"
                className="btn btn-success mt-3 text-light float-start"
              >
                Update
              </button>
              <Link to={"/back"} className="btn btn-primary mx-1 mt-3">
                Back
              </Link>
            </form>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default Update;
