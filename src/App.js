import { useState } from "react";
import "./App.css";
import CardForm from "./components/CardForm";
import Card from "./components/Card";
import isEmpty from "./functions/isEmpty";
import Heading from "./components/Heading";
function App() {
  const [data, setData] = useState({});
  const handleSubmit = (data) => {
    setData(data);
    console.log(data);
  };
  return (
    <div className="App">
      <Heading value="Form card header" />{" "}
      <div className="cards-wrapper">
        <CardForm bgColor="#34568B" handleSubmit={handleSubmit} />
        {!isEmpty(data) ? <Card data={data} bgColor="green" /> : <span></span>}
      </div>
    </div>
  );
}

export default App;
