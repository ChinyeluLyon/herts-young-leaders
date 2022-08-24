import { Button } from "@mui/material";
import Export from "../Export/Export";
import ParticipantTable from "../ParticipantTable/ParticipantTable";

type AllSessionsProps = {
  isOpen:boolean
}
const AllSessions = ({isOpen}:AllSessionsProps) => {
  return (
    <div>
      <div>
        <Button>Previous</Button>
        <Button>Next</Button>
      </div>
      <ParticipantTable isOpen={isOpen} />
      <Export />
    </div>
  );
};

export default AllSessions;
