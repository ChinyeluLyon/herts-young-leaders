import { Button, Input } from "@mui/material";
import ParticipantTable from "../ParticipantTable/ParticipantTable";
import * as S from "./HoneIn.styles";
import debounce from "lodash.debounce";
import { useCallback, useEffect, useState } from "react";
import useGetUsers from "../../frontendApi/useGetUsers";

type HoneInProps = {
  isOpen: boolean;
};

const HoneIn = ({ isOpen }: HoneInProps) => {
  const [name, setName] = useState("");
  const [age, setAge] = useState<number>();
  const [userData, setUserData] = useState<Array<User>>();

  const handleName = (n: string) => {
    setName(n);
  };

  const handleAge = (a: number) => {
    setAge(a);
  };

  const debounceSearchName = useCallback(debounce(handleName, 1000), []);
  const debounceSearchAge = useCallback(debounce(handleAge, 1000), []);

  const { fetch } = useGetUsers();

  useEffect(() => {
    const getData = async () => {
      let fetchParams = {};

      if (name) {
        const tempParams = { name: name };
        fetchParams = tempParams;
      }

      if (age) {
        const tempParams = {...fetchParams, age: age };
        fetchParams = tempParams;
      }

      const { data } = await fetch(fetchParams);
      setUserData(data || []);
    };
    if (isOpen) {
      getData();
    }
  }, [isOpen, name, age]);

  return (
    <S.HoneIn>
      <S.SearchBlock>
        <h3>Search by:</h3>
        <S.MinMaxRow>
          <S.InputLabel>Age:</S.InputLabel>
          <S.Input
            onChange={(ev) => {
              debounceSearchAge(ev.target.valueAsNumber);
            }}
            type="number"
            min={2}
            max={15}
            placeholder="Min"
          />
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
      <Input
        onChange={(ev) => {
          debounceSearchName(ev.target.value);
        }}
        placeholder="By Name"
      />
      <ParticipantTable data={userData || []} />
    </S.HoneIn>
  );
};

export default HoneIn;
