import React from "react";
import NoClicked from "./components/NoClicked";
import Clicked from "./components/Clicked";

const App: React.FC = () => {
  const [clicked, setClicked] = React.useState(true);

  const toggleClicked = () => {
    setClicked(!clicked);
  };

  return clicked ? (
    <Clicked toggleClicked={toggleClicked} />
  ) : (
    <NoClicked toggleClicked={toggleClicked} />
  );
};

export default App;
