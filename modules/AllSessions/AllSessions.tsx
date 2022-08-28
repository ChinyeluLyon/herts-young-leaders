import { Button } from "@mui/material";
import { useEffect, useState } from "react";
import useGetParticipants from "../../frontendApi/useGetParticipants";
import Export from "../Export/Export";
import ParticipantTable from "../ParticipantTable/ParticipantTable";

type AllSessionsProps = {
  isOpen: boolean;
};
const AllSessions = ({ isOpen }: AllSessionsProps) => {
  const { fetch } = useGetParticipants();
  const [participantData, setParticipantData] = useState<Array<Participant>>();

  useEffect(() => {
    const getData = async () => {
      const { data } = await fetch({});
      setParticipantData(data || []);
    };
    if (isOpen) {
      getData();
    }
  }, [isOpen]);

  return (
    <div>
      <div>
        <Button>Previous</Button>
        <Button>Next</Button>
      </div>
      <ParticipantTable data={participantData || []} />
    </div>
  );
};

export default AllSessions;
