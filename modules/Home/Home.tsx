import * as S from "./Home.styles";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faGlasses,
  faGlobe,
  faPlus,
  faPuzzlePiece,
} from "@fortawesome/free-solid-svg-icons";
import Button from "../../components/Button/Button";

const HomeModule = () => {
  return (
    <S.HomeWrapper>
      <h1>Herts Young Leaders</h1>
      <S.ButtonWrapper>
        <Button
          onClick={(ev) => {
            console.log(ev);
          }}
        >
          <FontAwesomeIcon icon={faGlasses} />
          Hone in
        </Button>
        <Button
          onClick={(ev) => {
            console.log(ev);
          }}
        >
          <FontAwesomeIcon icon={faPuzzlePiece} />
          All Sessions
        </Button>
        <Button
          onClick={(ev) => {
            console.log(ev);
          }}
        >
          <FontAwesomeIcon icon={faPlus} />
          Record Data
        </Button>
        <Button
          onClick={(ev) => {
            console.log(ev);
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
