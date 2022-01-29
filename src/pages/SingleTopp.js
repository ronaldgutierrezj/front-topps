import { Link } from "react-router-dom";

const SingleTopp = ({topps,match,edit, deleteCard}) => {

  const id = match.params.id

  const topp = topps.find((top) => top.id === id);

  // const div = {
  //   textAlign: "center",
  //   border: "3px solid green",
  //   width: "80%",
  //   margin: "30px auto",
  // };

  return (
    <div >
      <img src={topp?.image} alt={topp?.name}/>
      <h2>{topp?.name}</h2>
      <h2>{topp?.cardNumber}</h2>
      <h2>{topp?.collection}</h2>
      <h2>{topp?.series}</h2>
      <h2>{topp?.releaseDate}</h2>
      <button onClick={(event) => edit(topp)}>Edit</button>
      <button onClick={(event) => deleteCard(topp)}>Delete</button>
      <Link to="/">
        <button>Go Back</button>
      </Link>
    </div>
  );
};

export default SingleTopp;
