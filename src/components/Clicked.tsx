import { useState } from "react";
import { lyrics } from "../models/lyrics";
import { Lyric } from "../react-app-env";
import { getRandomItem } from "../utils/arrayUtils";

interface ClickedProps {
  toggleClicked: () => void;
}

const Clicked = ({ toggleClicked }: ClickedProps) => {
  const [song, setSong] = useState<Lyric>(getRandomItem(lyrics));

  const randomSong = () => {
    setSong(getRandomItem(lyrics));
  };

  return (
    <>
      <button onClick={toggleClicked}>Back</button>

      <button onClick={randomSong}>Random Song</button>
      <audio autoPlay src={song.audio} />
      <div className="lyric">
        <h1>{song.title}</h1>
        <h2>{song.artist}</h2>
        <p>{song.lyrics}</p>
      </div>
    </>
  );
};

export default Clicked;
