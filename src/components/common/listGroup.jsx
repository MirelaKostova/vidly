const ListGroup = ({
  items,
  selectedGenre,
  onGenreSelect,
  textProperty,
  idProperty,
}) => {
  return (
    <ul className="list-group">
      {items.map((item) => (
        <li
          key={item[idProperty]}
          onClick={() => {
            onGenreSelect(item);
          }}
          className={
            item.name === selectedGenre.name || selectedGenre.idProperty === ""
              ? "list-group-item clickable active"
              : "list-group-item clickable"
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
