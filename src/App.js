import AllTopps from "./pages/AllTopps";
import Quantity from "./components/quantity";
import SingleTopp from "./pages/SingleTopp";
import Form from "./pages/Form";

import React, { useState, useEffect } from "react";

import { Route, Switch, Link } from "react-router-dom";

function App(props) {

  const h1 = {
    textAlign: "center",
    margin: "10px",
  
  };

  const button = {
    backgroundColor: "navy",
    display: "block",
    margin: "auto",
  };

  const url = "https://backend-toppcards.herokuapp.com/cards/";

  const [topps, setTopps] = useState([]);

  const nullCard = {
    image: "",
    name: "",
    cardNumber: "",
    collection: "",
    series: "",
    releaseDate: "",
  };

  const [targetCard, setTargetCard] = useState(nullCard);
  //////////////
// Functions
//////////////

const getCards = async () => {
  const response = await fetch(url);
  const data = await response.json();
  setTopps(data);
};

const addCards = async (newCard) => {
  await fetch(url, {
    method: "post",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(newCard),
  });
  getCards();
};


const getTargetCard = (card) => {
  setTargetCard(card);
  props.history.push("/edit");
};

const updateCard = async (card) => {
  await fetch(url + card.id, {
    method: "put",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(card),
  });

  getCards();
};

const deleteCard = async (card) => {
  await fetch(url + card.id + "/", {
    method: "delete",
  });

  getCards();
  props.history.push("/");
};
//////////////
// useEffects
//////////////


useEffect(() => {
  getCards();
}, []);

  return (
    <div className="App">
     <h1 style={h1}>My Topp Cards</h1>
     {/* <Quantity toppCards = {toppCards}/> */}
     <Link to="/new"><button style={button}>Add a new Card</button></Link>
      <Switch>
        <Route
          exact
          path="/"
          render={(routerProps) => <AllTopps {...routerProps} topps={topps} />}
        />
        <Route
          path="/topp/:id"
          render={(routerProps) => (
            <SingleTopp {...routerProps} 
            topps={topps} 
            edit={getTargetCard}
            deleteCard={deleteCard}/>
          )}
        />
        <Route
          path="/new"
          render={(routerProps) => (
          <Form 
            {...routerProps} 
            initialCard={nullCard}
            handleSubmit={addCards}
            buttonLabel="Add Card"
          />)}
        />
        <Route
          path="/edit"
          render={(routerProps) => (
          <Form {...routerProps} 
          initialCard={targetCard}
          handleSubmit={updateCard}
          buttonLabel="update Card"/>)}
        />
      </Switch> 

    </div>
  );
}

export default App;
