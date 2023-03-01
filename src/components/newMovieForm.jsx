import Form from "./common/loginForm/form";
import Input from "./common/loginForm/input";
import Image from "./common/loginForm/media/add_new_movie.svg";
import uniqueId from "lodash/uniqueId";
import Select from "./common/loginForm/select";
import Joi from "joi";

class NewMovieForm extends Form {
  state = {
    data: {
      _id: "",
      title: "",
      genre: { _id: "", name: "" },
      numberInStock: 0,
      dailyRentalRate: 0,
      publishDate: "2018-01-03T19:04:28.809Z",
    },
    errors: {},
  };

  schema = Joi.object({
    title: Joi.string().required().min(3).max(30),
    genre: Joi.string().required().min(3).max(30),
    numberInStock: Joi.string().required().min(3).max(30),
    dailyRentalRate: Joi.string().required().min(3).max(30),
  });

  getNewId = () => {
    return uniqueId("movie_");
  };

  getCurrentDate = () => {
    let currPublishDate = new Date();
    return currPublishDate.toUTCString();
  };

  handleSave = () => {
    console.log("---");
  };

  doSave = () => {
    // Call the server
    console.log("Saved");
  };

  render() {
    return (
      <>
        <div className="wrapper-container d-flex justify-content-center">
          <div className="login-container">
            <form onSave={this.handleSave}>
              <h2>Add new movie</h2>

              <div className="div-container " role="form">
                {/* Title */}
                {this.renderInput("title", "Title", "formControlTitle")}

                {/* Genre */}
                <Select name="genre" label="Genre" id="formControlGenre" />

                {/* Number In Stock */}
                {this.renderInput(
                  "numberInStock",
                  "Number in Stock",
                  "formControlNumberInStock"
                )}

                {/* Rate */}
                {this.renderInput("dailyRentalRate", "Rate", "formControlRate")}

                {this.renderButton("Save", "")}
                {/* -------------- Image -------------- */}
                <div className="image-container">
                  <img
                    className="illustration"
                    src={Image}
                    alt="new-movie-illustration"
                  />
                </div>
              </div>
            </form>
          </div>
        </div>
      </>
    );
  }
}

export default NewMovieForm;

// {
//     _id: "5b21ca3eeb7f6fbccd471815",
//     title: "Terminator",
//     genre: { _id: "5b21ca3eeb7f6fbccd471818", name: "Action" },
//     numberInStock: 6,
//     dailyRentalRate: 2.5,
//     publishDate: "2018-01-03T19:04:28.809Z",
//   },
