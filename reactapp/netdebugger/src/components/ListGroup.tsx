import { MouseEvent } from "react";

function ListGroup() {
  //event handler
  const handleClicked = (e: MouseEvent) => console.log(e.target);
  const times = ["1am", "2am", "3am", "4am"];
  const msg = times.length === 4 && <h1>nahhh</h1>;
  return (
    <>
      <h1>List</h1>
      {msg}
      <ul className="list-group">
        {times.map((item, index) => (
          <li className="list-group-item" key={item} onClick={handleClicked}>
            {item}
          </li>
        ))}
      </ul>
    </>
  );
}

export default ListGroup;
