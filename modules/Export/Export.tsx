import { faFileExport } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { Button } from "@mui/material";

const Export = () => {
  return (
    <div>
      <Button>
        <FontAwesomeIcon icon={faFileExport} size="2x" />
      </Button>
    </div>
  );
};

export default Export;
