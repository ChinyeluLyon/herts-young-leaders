import { faFileExport } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { Button } from "@mui/material";
import CsvDownload from "react-json-to-csv";

type ExportProps = {
  data: Array<Participant> | Participant;
};
const Export = ({ data }: ExportProps) => {
  return (
    <div>
      <CsvDownload data={data}>
        <FontAwesomeIcon icon={faFileExport} size="2x" />
      </CsvDownload>
    </div>
  );
};

export default Export;
