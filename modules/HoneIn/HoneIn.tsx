import { Button, Input } from "@mui/material";
import Export from "../Export/Export";
import UserTable from "../UserTable/UserTable";
import * as S from "./HoneIn.styles";

type HoneInProps = {
  isOpen: boolean;
};

const HoneIn = ({ isOpen }: HoneInProps) => {
  return (
    <S.HoneIn>
      <S.SearchBlock>
        <h3>Search by:</h3>
        <S.MinMaxRow>
          <S.InputLabel>Age:</S.InputLabel>
          <S.Input type="number" min={2} max={15} placeholder="Min" />
          <S.Input type="number" min={2} max={15} placeholder="Max" />
        </S.MinMaxRow>
        <S.MinMaxRow>
          <S.InputLabel>AM:</S.InputLabel>
          <S.Input type="number" min={0} max={5} placeholder="Min" />
          <S.Input type="number" min={0} max={5} placeholder="Max" />
        </S.MinMaxRow>
        <S.MinMaxRow>
          <S.InputLabel>PM:</S.InputLabel>
          <S.Input type="number" min={0} max={5} placeholder="Min" />
          <S.Input type="number" min={0} max={5} placeholder="Max" />
        </S.MinMaxRow>
      </S.SearchBlock>

      <Input placeholder="By Name" />
      <Button>Search</Button>

      <UserTable isOpen={isOpen} />
      <Export />
    </S.HoneIn>
  );
};

export default HoneIn;
