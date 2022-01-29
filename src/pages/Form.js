import { useState } from "react";

const Form = ({ initialCard, handleSubmit, buttonLabel, history }) => {
  
  const [formData, setFormData] = useState(initialCard);


  const handleChange = (event) => {
    setFormData({ ...formData, [event.target.name]: event.target.value });
  };

  const handleSubmisson = (event) => {
    event.preventDefault();
    handleSubmit(formData);
    history.push("/");
  };

  return (
    <form onSubmit={handleSubmisson}>
      <input
        type="text"
        onChange={handleChange}
        value={formData.image}
        name="image"
      />
      <input
        type="text"
        onChange={handleChange}
        value={formData.name}
        name="name"
      />

      <input
        type="text"
        onChange={handleChange}
        value={formData.cardNumber}
        name="cardNumber"
      />
      <input
        type="text"
        onChange={handleChange}
        value={formData.collection}
        name="collection"
      />
      <input
        type="text"
        onChange={handleChange}
        value={formData.series}
        name="series"
      />
      <input
        type="date"
        onChange={handleChange}
        value={formData.releaseDate}
        name="releaseDate"
      />
      <input type="submit" value={buttonLabel} />
    </form>
  );
};

export default Form;