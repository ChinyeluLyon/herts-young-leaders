import { IconProp } from "@fortawesome/fontawesome-svg-core";
import {
  faFaceFrown,
  faFaceFrownOpen,
  faFaceLaugh,
  faFaceLaughBeam,
  faFaceMeh,
  faFaceSmile,
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { Button, Slider, TextareaAutosize } from "@mui/material";
import { useState } from "react";

const RecordData = () => {
  const [currentRating, setCurrentRating] = useState<number>(2.5);

  const getSmileyIcon = (): IconProp => {
    if (currentRating >= 4.5) {
      return faFaceLaughBeam;
    }
    if (currentRating >= 4 && currentRating < 4.5) {
      return faFaceLaugh;
    }
    if (currentRating >= 3.5 && currentRating < 4) {
      return faFaceSmile;
    }
    if (currentRating >= 3 && currentRating < 3.5) {
      return faFaceSmile;
    }
    if (currentRating >= 2.5 && currentRating < 3) {
      return faFaceMeh;
    }
    if (currentRating >= 2 && currentRating < 2.5) {
      return faFaceMeh;
    }
    if (currentRating >= 1.5 && currentRating < 2) {
      return faFaceFrownOpen;
    }
    if (currentRating >= 1 && currentRating < 1.5) {
      return faFaceFrownOpen;
    }
    if (currentRating >= 0 && currentRating < 1) {
      return faFaceFrown;
    }
    return faFaceSmile;
  };

  return (
    <div>
      <h3>How are you feeling today?</h3>
      <FontAwesomeIcon color="#ffc459" icon={getSmileyIcon()} size="3x" />

      <Slider
        aria-label="Temperature"
        value={currentRating}
        valueLabelDisplay="auto"
        step={0.5}
        marks
        min={0}
        max={5}
        onChange={(ev) => {
          setCurrentRating(ev.target.value);
        }}
      />

      <TextareaAutosize
        aria-label="Extra notes"
        minRows={5}
        placeholder="Extra notes"
        style={{ width: "100%" }}
      />

      <Button>Save</Button>
    </div>
  );
};

export default RecordData;
