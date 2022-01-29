import { Link } from "react-router-dom";
const Topp = ({topp}) => {

    const div = {
        textAlign: "center",
        border: "3px solid",
        margin: "10px auto",
        width: "80%",
    };

  return (
    <div style={div}>
      <Link to={`/topp/${topp.id}`}>
        <h1>{topp.name}</h1>
      </Link>
      <h2>{topp.cardNumber}</h2>
    </div>
  );
};

export default Topp;