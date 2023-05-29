import React from "react";
import Clicked from "./components/Clicked";
import { Button } from "@mui/material";

const App: React.FC = () => {
  const [clicked, setClicked] = React.useState(true);

  const toggleClicked = () => {
    setClicked(!clicked);
  };

  return clicked ? (
    <Clicked toggleClicked={toggleClicked} />
  ) : (
    <Button onClick={toggleClicked} variant="contained">
      Enjoy
    </Button>
  );
};

export default App;
