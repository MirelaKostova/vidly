const ListGroup = (props) => {
  const { items, selectedGenre, textProperty, idProperty, onGenreSelect } =
    props;

  return (
    <ul className="list-group">
      {items.map((item) => (
        <li
          key={item[idProperty]}
          style={{ cursor: "pointer" }}
          onClick={() => {
            onGenreSelect(item);
          }}
          className={
            item === selectedGenre
              ? "list-group-item active"
              : "list-group-item"
          }
        >
          {item[textProperty]}
        </li>
      ))}
    </ul>
  );
};

ListGroup.defaultProps = {
  textProperty: "name",
  idProperty: "_id",
};
export default ListGroup;
