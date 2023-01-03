const ListGroup = (props) => {
  const { items, textProperty, idProperty } = props;

  return (
    <ul className="list-group">
      {/* <li className="list-group-item active">All Generes</li> */}
      {items.map((item) => (
        <li key={item[idProperty]} className="list-group-item">
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
