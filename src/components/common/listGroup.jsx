const ListGroup = (props) => {
  const { items, selectedGenre, textProperty, idProperty, onGenreSelect } =
    props;

  return (
    <ul className="list-group">
      {/* <li className="list-group-item active">All Generes</li> */}
      {items.map((item) => (
        <li
          onClick={() => {
            onGenreSelect(item);
          }}
          key={item[idProperty]}
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
