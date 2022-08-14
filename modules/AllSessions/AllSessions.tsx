import { Button } from "@mui/material";
import Export from "../Export/Export";
import UserTable from "../UserTable/UserTable";

const AllSessions = () => {
  return (
    <div>
      <div>
        <Button>Previous</Button>
        <Button>Next</Button>
      </div>
      <UserTable />
      <Export/>
    </div>
  );
};

export default AllSessions;
