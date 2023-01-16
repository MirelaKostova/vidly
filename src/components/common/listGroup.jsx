const ListGroup = ({
  items,
  selectedGenre,
  onGenreSelect,
  textProperty,
  idProperty,
}) => {
  return (
    <ul className="list-group">
      {items.map((item, index) => (
        <li
          key={item[idProperty]}
          style={{ cursor: "pointer" }}
          onClick={() => {
            onGenreSelect(item);
          }}
          className={
            item.name === selectedGenre.name
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
