import { Button, Input } from "@mui/material";
import UserTable from "../UserTable/UserTable";
import * as S from "./HoneIn.styles";

const HoneIn = () => {
  return (
    <S.HoneIn>
      <S.SearchBlock>
        <h3>Search by:</h3>
        <S.MinMaxRow>
          <p>Age:</p>
          <Input placeholder="Min" />
          <Input placeholder="Max" />
        </S.MinMaxRow>
        <S.MinMaxRow>
          <p>AM:</p>
          <Input placeholder="Min" />
          <Input placeholder="Max" />
        </S.MinMaxRow>
        <S.MinMaxRow>
          <p>PM:</p>
          <Input placeholder="Min" />
          <Input placeholder="Max" />
        </S.MinMaxRow>
      </S.SearchBlock>

      <Input placeholder="By Name" />
      <Button>Search</Button>

      <UserTable />
    </S.HoneIn>
  );
};

export default HoneIn;
