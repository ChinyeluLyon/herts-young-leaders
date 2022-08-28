import { Button, Input } from "@mui/material";
import ParticipantTable from "../ParticipantTable/ParticipantTable";
import * as S from "./HoneIn.styles";
import debounce from "lodash.debounce";
import { useCallback, useEffect, useState } from "react";
import useGetParticipants from "../../frontendApi/useGetParticipants";

type HoneInProps = {
  isOpen: boolean;
};

const HoneIn = ({ isOpen }: HoneInProps) => {
  const [name, setName] = useState("");
  const [minAge, setMinAge] = useState<number>();
  const [maxAge, setMaxAge] = useState<number>();
  const [participantData, setParticipantData] = useState<Array<Participant>>();

  const handleName = (n: string) => {
    setName(n);
  };
  const handleMinAge = (a: number) => {
    setMinAge(a);
  };
  const handleMaxAge = (a: number) => {
    setMaxAge(a);
  };

  const debounceSearchName = useCallback(debounce(handleName, 1000), []);
  const debounceSearchMinAge = useCallback(debounce(handleMinAge, 1000), []);
  const debounceSearchMaxAge = useCallback(debounce(handleMaxAge, 1000), []);

  const { fetch } = useGetParticipants();

  useEffect(() => {
    const getData = async () => {
      let fetchParams = {};

      if (name) {
        const tempParams = { name: name };
        fetchParams = tempParams;
      }
      if (minAge) {
        const tempParams = { ...fetchParams, minAge: minAge };
        fetchParams = tempParams;
      }
      if (minAge) {
        const tempParams = { ...fetchParams, maxAge: maxAge };
        fetchParams = tempParams;
      }

      const { data } = await fetch(fetchParams);
      setParticipantData(data || []);
    };
    if (isOpen) {
      getData();
    }
  }, [isOpen, name, minAge, maxAge]);

  return (
    <S.HoneIn>
      <S.SearchBlock>
        <h3>Search by:</h3>
        <S.MinMaxRow>
          <S.InputLabel>Age:</S.InputLabel>
          <S.Input
            onChange={(ev) => {
              debounceSearchMinAge(ev.target.valueAsNumber);
            }}
            type="number"
            min={2}
            max={15}
            placeholder="Min"
          />
          <S.Input
            onChange={(ev) => {
              debounceSearchMaxAge(ev.target.valueAsNumber);
            }}
            type="number"
            min={2}
            max={15}
            placeholder="Max"
          />
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
      <ParticipantTable data={participantData || []} />
    </S.HoneIn>
  );
};

export default HoneIn;
