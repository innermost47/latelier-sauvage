import { Editor } from "@tinymce/tinymce-react";
import axios from "axios";
import { useEffect, useState } from "react";
import { url } from "../js/Constantes";
import { useForm } from "react-hook-form";
import { decode } from "html-entities";

const UpdateWhoAmI = () => {
  const [data, setData] = useState({ id: "", image: "", description: "" });
  const [content, setContent] = useState("");
  const token = localStorage.getItem("token");

  const whoAmI = () => {
    axios.get(url + "whoami").then((res) => {
      setData(res.data);
      setContent(res.data.description);
    });
  };

  useEffect(() => {
    whoAmI();
  }, []);

  const refreshWhoAmI = () => {
    whoAmI();
  };

  const handleEditorChange = (e) => {
    setContent(e.target.getContent());
  };
  const { handleSubmit } = useForm();
  const formData = new FormData();
  const onSubmit = () => {
    formData.append("image", data.image);
    formData.append("description", content);
    const object = {};
    formData.forEach((value, key) => {
      object[key] = value;
    });
    const json = JSON.stringify(object);
    axios
      .put(url + "api/whoami/1", json, {
        headers: {
          Authorization: "Bearer " + token,
        },
      })
      .then((response) => {
        refreshWhoAmI();
        window.scrollTo(0, 0);
      })
      .catch((error) => {
        alert("Il y a eu une erreur lors de la modification");
      });
  };
  return (
    <div>
      <h2>Modifier Qui suis-je</h2>
      <div className="mb-4 mt-4">
        <div
          className="mb-4"
          dangerouslySetInnerHTML={{ __html: decode(content) }}
        ></div>
        <form onSubmit={handleSubmit(onSubmit)}>
          <Editor
            apiKey="5x35t8ocvnbcudz7sicedvjklwec9hxb9jghq3ukw72wxpui"
            initialValue={"<p>" + data.description + "</p>"}
            init={{
              plugins: "link image code",
              toolbar:
                "undo redo | bold italic | alignleft aligncenter alignright | code",
            }}
            onChange={handleEditorChange}
          />
          <button type="submit" className="btn btn-success mt-3">
            Update
          </button>
        </form>
      </div>
    </div>
  );
};

export default UpdateWhoAmI;
