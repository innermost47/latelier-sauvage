import React from "react";
import Navigation from "../components/Navigation";
import Footer from "../components/Footer";
import { useEffect, useState } from "react";
import axios from "axios";
import { url } from "../js/Constantes";
import "../style/back.css";
import dateFormat from "dateformat";
import { useForm } from "react-hook-form";
import { Link } from "react-router-dom";
import UpdateWhoAmI from "../components/UpdateWhoAmI";

const Back = () => {
  window.scrollTo(0, 0);
  const token = localStorage.getItem("token");
  const [data, setData] = useState([]);

  const events = () => {
    axios.get(url + "events").then((res) => {
      setData(res.data);
    });
  };

  useEffect(() => {
    events();
  }, []);

  const refreshList = () => {
    events();
  };

  const deleteEvent = (id) => {
    if (window.confirm("Souhaites tu supprimer cet évènement ?")) {
      axios
        .delete(url + "api/events/" + id, {
          headers: {
            Authorization: "Bearer " + token,
          },
        })
        .then((response) => {
          refreshList();
        });
    } else {
      return;
    }
  };
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
    formData.append("image", imagefile.files[0].name);
    const object = {};
    formData.forEach((value, key) => {
      object[key] = value;
    });
    const json = JSON.stringify(object);
    axios
      .post(url + "api/events", json, {
        headers: {
          "Content-Type": "multipart/form-data",
          Authorization: "Bearer " + token,
        },
      })
      .then((response) => {
        console.log(response.data);
        window.scrollTo(0, 0);
        refreshList();
      })
      .catch((error) => {
        alert("Il y a eu une erreur");
      });
    formData.append("image", imagefile.files[0]);
    axios
      .post(url + "api/images", formData, {
        headers: {
          "Content-Type": "multipart/form-data",
          Authorization: "Bearer " + token,
        },
      })
      .then((response) => {
        console.log("image transfered");
      })
      .catch((error) => {
        alert("Erreur lors de l'upload de l'image");
      });
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
      errors.endAt.message = "Quand est ce que finit cet évènement ?";
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
      <div className="container backContent">
        <div className="row">
          <h2 className="mt-4">Gérer les évènements</h2>
          <table className="table mt-4">
            <thead>
              <tr>
                <th scope="col">Date</th>
                <th scope="col">Title</th>
                <th scope="col">Action</th>
              </tr>
            </thead>
            <tbody>
              {data.map((content, key) => (
                <tr key={key}>
                  <td>{dateFormat(content.startAt, "dd/mm/yy HH:MM")}</td>
                  <td>{content.title}</td>
                  <td>
                    <button
                      className="btn btn-danger"
                      onClick={() => {
                        deleteEvent(content.id);
                      }}
                    >
                      Delete
                    </button>
                    <Link
                      to={"/update/" + content.id}
                      className="btn btn-primary mx-1"
                    >
                      Update
                    </Link>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
          <h2 className="mt-4">Créer un évènement</h2>
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
                {...register("title", { required: true })}
              />
            </div>
            <div className="form-container mt-3">
              <textarea
                placeholder="Description"
                className="form-control"
                {...register("description", { required: true })}
              ></textarea>
            </div>
            <div className="form-container mt-3">
              <input
                type="text"
                placeholder="Lieu"
                className="form-control"
                {...register("place", { required: true })}
              />
            </div>
            <div className="form-container mt-3">
              <input
                type="text"
                placeholder="Lien"
                className="form-control"
                {...register("link", { required: true })}
              />
            </div>
            <div className="form-container mt-3">
              <label htmlFor="start">Start date</label>
              <input
                type="datetime-local"
                id="start"
                className="form-control mt-1"
                {...register("startAt", { required: true })}
              />
            </div>
            <div className="form-container mt-3">
              <label htmlFor="end">End date</label>
              <input
                type="datetime-local"
                className="form-control mt-1"
                id="end"
                {...register("endAt", { required: true })}
              />
            </div>
            <div className="form-container mt-3">
              <label htmlFor="image">Image</label>
              <input type="file" className="form-control mt-1" id="image" />
            </div>
            <button
              type="submit"
              className="btn btn-success mt-3 text-light float-start"
            >
              Créer
            </button>
          </form>
          <UpdateWhoAmI />
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default Back;
