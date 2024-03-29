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
