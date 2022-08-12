import * as S from "./Home.styles";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faGlasses,
  faGlobe,
  faPlus,
  faPuzzlePiece,
} from "@fortawesome/free-solid-svg-icons";
import Button from "../../components/Button/Button";
import { useState } from "react";

const HomeModule = () => {
  const [selected, setSelected] = useState([false, false, false, false]);
  const [hidden, setHidden] = useState([false, false, false, false]);

  return (
    <S.HomeWrapper>
      <h1>Herts Young Leaders</h1>
      <S.ButtonWrapper>
        <Button
          selected={selected[0]}
          hidden={hidden[0]}
          onClick={(ev) => {
            if (!selected[0]) {
              setSelected([true, false, false, false]);
              setHidden([false, true, true, true]);
            } else {
              setHidden([false, false, false, false]);
              setSelected([false, false, false, false]);
            }
          }}
        >
          <FontAwesomeIcon icon={faGlasses} />
          Hone in
        </Button>
        <Button
          selected={selected[1]}
          hidden={hidden[1]}
          onClick={(ev) => {
            if (!selected[1]) {
              setSelected([false, true, false, false]);
              setHidden([true, false, true, true]);
            } else {
              setHidden([false, false, false, false]);
              setSelected([false, false, false, false]);
            }
          }}
        >
          <FontAwesomeIcon icon={faPuzzlePiece} />
          All Sessions
        </Button>
        <Button
          selected={selected[2]}
          hidden={hidden[2]}
          onClick={(ev) => {
            if (!selected[2]) {
              setHidden([true, true, false, true]);
              setSelected([false, false, true, false]);
            } else {
              setHidden([false, false, false, false]);
              setSelected([false, false, false, false]);
            }
          }}
        >
          <FontAwesomeIcon icon={faPlus} />
          Record Data
        </Button>
        <Button
          selected={selected[3]}
          hidden={hidden[3]}
          onClick={(ev) => {
            if (!selected[3]) {
              setHidden([true, true, true, false]);
              setSelected([false, false, false, true]);
            } else {
              setHidden([false, false, false, false]);
              setSelected([false, false, false, false]);
            }
          }}
        >
          <FontAwesomeIcon icon={faGlobe} />
          Our site
        </Button>
      </S.ButtonWrapper>
    </S.HomeWrapper>
  );
};

export default HomeModule;
