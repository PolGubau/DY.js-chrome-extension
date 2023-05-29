import { useState } from "react";
import { lyrics } from "../models/lyrics";
import { Lyric } from "../react-app-env";
import { getRandomItem } from "../utils/arrayUtils";
import { Typography, Button, ButtonGroup, Paper } from "@mui/material";

interface ClickedProps {
  toggleClicked: () => void;
}

const Clicked = ({ toggleClicked }: ClickedProps) => {
  const [song, setSong] = useState<Lyric>(getRandomItem(lyrics));

  const randomSong = () => {
    setSong(getRandomItem(lyrics));
  };

  return (
    <Paper elevation={3}>
      <ButtonGroup
        variant="contained"
        aria-label="outlined primary button group"
      >
        <Button onClick={toggleClicked}>Back</Button>
        <Button onClick={randomSong}>Random Song</Button>
      </ButtonGroup>
      <audio autoPlay src={song.audio} />
      <Typography variant="h3" component="h1">
        {song.title}
      </Typography>
      <Typography variant="h4" component="h2">
        {song.artist}
      </Typography>
      <Typography>{song.lyrics}</Typography>;
    </Paper>
  );
};

export default Clicked;
