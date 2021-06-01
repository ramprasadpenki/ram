import React, { useState } from "react";
import ReactDOM from "react-dom";
import "./index.css";

const Heading = (props) => <h2>{props.text}</h2>;

const Button = (props) => <button onClick={props.onClick}>{props.text}</button>;

const Anecdote = (props) => {
  return (
    <>
      {props.anecdote}
      <br />
    
    </>
  );
};



const App = (props) => {
  const [selected, setSelected] = useState(0);
  const [votes, setVotes] = useState(new Array(props.anecdotes.length).fill(0));
  

  const getRandomIdx = (length) => {
    return Math.floor(Math.random() * length);
  };

  const setNewRandomAnecdote = () => {
    let randomAnecdoteIdx;

    do {
      randomAnecdoteIdx = getRandomIdx(props.anecdotes.length);
    } while (randomAnecdoteIdx === selected);

    setSelected(randomAnecdoteIdx);
  };


  const handleButtonClick = (type) => {
    switch (type) {
      case "next":
        setNewRandomAnecdote();
        break;
      default:
        break;
    }
  };

 
  

  return (
    <div>
    
      <Anecdote anecdote={anecdotes[selected]} />
      <br />
    
      <Button onClick={() => handleButtonClick("next")} text="next anecdote" />
      
    </div>
  );
};

const anecdotes = [
  "If it hurts, do it more often",
  "Adding manpower to a late software project makes it later!",
  "The first 90 percent of the code accounts for the first 90 percent of the development time...The remaining 10 percent of the code accounts for the other 90 percent of the development time.",
  "Any fool can write code that a computer can understand. Good programmers write code that humans can understand.",
  "Premature optimization is the root of all evil.",
  "Debugging is twice as hard as writing the code in the first place. Therefore, if you write the code as cleverly as possible, you are, by definition, not smart enough to debug it.",
];

ReactDOM.render(<App anecdotes={anecdotes} />, document.getElementById("root"));
export default App