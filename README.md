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

- Lifecycle hooks
- Paginating, filtering, sorting

- Routing
- Forms 
  <img width="1424" alt="Screenshot 2023-01-31 at 11 45 27" src="https://user-images.githubusercontent.com/106656146/215725345-8cf49c07-a4a3-451f-bd7a-c0c6636a2fe2.png">
  
  and their validation using Joi 
  <img width="1442" alt="Screenshot 2023-02-24 at 13 06 30" src="https://user-images.githubusercontent.com/106656146/221164312-b89a0e77-d40d-4905-96d8-4ec3575cf1b4.png">

  

- Calling backends services - Axios used for this project
- Authentification & Authorization
- Deployment

## Run Project in local

#### `npm install`

#### `npm start`

Runs the app in the development mode.
Open [http://localhost:3000](http://localhost:3000) to view it in your browser.
