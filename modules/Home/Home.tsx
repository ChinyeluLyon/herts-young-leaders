import Button from "../../components/Button/Button";
import * as S from './Home.styles'

const HomeModule = () => {
  return (
    <div>
      <h1>Herts Young Leaders</h1>
      <S.ButtonWrapper>
      <Button
        onClick={(ev) => {
          console.log(ev);
        }}
      >
        Hone in
      </Button>
      <Button
        onClick={(ev) => {
          console.log(ev);
        }}
      >
        All Sessions
      </Button>
      <Button
        onClick={(ev) => {
          console.log(ev);
        }}
      >
        Record Data
      </Button>
      <Button
        onClick={(ev) => {
          console.log(ev);
        }}
      >
        Our site
      </Button>
      </S.ButtonWrapper>
    </div>
  );
};

export default HomeModule;
