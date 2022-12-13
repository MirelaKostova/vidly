// Input: boolean
// Output: onClick

const Like = ({ status, onClick }) => {
  console.log("Like component status -> ", status);
  let classes = status ? "fa fa-heart" : "fa fa-heart-o";
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
