import { Button } from "@mui/material";
import Export from "../Export/Export";
import ParticipantTable from "../ParticipantTable/ParticipantTable";

const AllSessions = () => {
  return (
    <div>
      <div>
        <Button>Previous</Button>
        <Button>Next</Button>
      </div>
      <ParticipantTable isOpen />
      <Export />
    </div>
  );
};

export default AllSessions;
