# What is Vidly?

A React App to display, filter, like and delete movies in the database.

<img width="571" alt="Screenshot 2023-01-04 at 11 57 58" src="https://user-images.githubusercontent.com/106656146/210530863-62db7f1a-62d6-4f26-80ba-e8c48e9cfbc9.png">

From "Mastering React" course by Mosh Hamedani
-> https://codewithmosh.com/p/mastering-react

## Content of this course:

- Creating reusable react component
  -- Like, ListGroup, Pagination, Table

Example:

```
const Like = ({ status, onClick }) => {
  const initialClassName = "fa fa-heart";
  let classes = status ? initialClassName : initialClassName + "-o";
  return (
    <i
      style={{ cursor: "pointer" }}
      onClick={onClick}
      className={classes}
      aria-hidden="true"
    />
  );
};

export default Like;
```

"font-awesome": "4.7.0"

- Lifecycle hooks
- Paginating, filtering, sorting
  <img width="556" alt="Screenshot 2023-01-19 at 12 16 08" src="https://user-images.githubusercontent.com/106656146/213416429-f51aad89-272d-4817-be0f-72b365bfc8e1.png">

- Routing
<img width="534" alt="Screenshot 2023-01-19 at 20 33 31" src="https://user-images.githubusercontent.com/106656146/213530679-fdac6772-390d-42cb-97d4-745fb1c93400.png">

- Forms and their validation
- Calling backends services - Axios used for this project
- Authentification & Authorization
- Deployment

## Run Project in local

#### `npm install`

#### `npm start`

Runs the app in the development mode.
Open [http://localhost:3000](http://localhost:3000) to view it in your browser.
