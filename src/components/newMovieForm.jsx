import Form from "./common/loginForm/form";
import Input from "./common/loginForm/input";
import uniqueId from "lodash/uniqueId";
import Select from "./common/loginForm/select";

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

  getNewId = () => {
    return uniqueId("movie_");
  };

  getCurrentDate = () => {
    let currPublishDate = new Date();
    return currPublishDate.toUTCString();
  };

  doSave = () => {
    // Call the server
    console.log("Saved");
  };

  render() {
    return (
      <>
        <form className="wrapper-container justify-content-center ">
          <h2>Add new movie</h2>
          {/* <h2>{this.getNewId()}</h2>
          <h2>{this.getCurrentDate()}</h2> */}

          <div className="div-container " role="form">
            {/* Title */}
            {/* <Input name="title" label="Title" id="formControlTitle" /> */}
            {this.renderInput("title", "Title", "formControlTitle")}

            {/* Genre */}
            <Select name="genre" label="Genre" id="formControlGenre" />
            {/* {this.renderInput("title", "Title", "formControlTitle")} */}

            {/* Number In Stock */}
            <Input
              name="numberInStock"
              label="Number in Stock"
              id="formControlNumberInStock"
            />
            {this.renderInput(
              "numberInStock",
              "Number in Stock",
              "formControlNumberInStock"
            )}

            {/* Rate */}
            <Input name="dailyRentalRate" label="Rate" id="formControlRate" />

            {this.renderButton("Save", "")}
          </div>
        </form>
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
