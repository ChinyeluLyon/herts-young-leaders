import * as S from "./Home.styles";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faChevronCircleDown,
  faGlasses,
  faGlobe,
  faPlus,
  faPuzzlePiece,
} from "@fortawesome/free-solid-svg-icons";
import { useState } from "react";
import {
  Accordion,
  AccordionDetails,
  Typography,
  Divider,
  Button,
} from "@mui/material";

import HoneIn from "../HoneIn/HoneIn";
import RecordData from "../RecordData/RecordData";

const HomeModule = () => {
  const [expanded, setExpanded] = useState<string | false>(false);

  const handleChange =
    (panel: string) => (event: React.SyntheticEvent, isExpanded: boolean) => {
      setExpanded(isExpanded ? panel : false);
    };

  return (
    <S.HomeWrapper>
      <h1>Herts Young Leaders</h1>

      <Accordion
        expanded={expanded === "panel1"}
        onChange={handleChange("panel1")}
      >
        <S.AccordionHeader
          $isOpen={expanded === "panel1"}
          expandIcon={<FontAwesomeIcon icon={faChevronCircleDown} />}
          aria-controls="panel1bh-content"
          id="panel1bh-header"
        >
          <S.GroupHeader>
            <FontAwesomeIcon icon={faGlasses} size="2x" />
            <h2>Hone in</h2>
          </S.GroupHeader>
        </S.AccordionHeader>
        <AccordionDetails>
          <HoneIn />
        </AccordionDetails>
      </Accordion>
      <Accordion
        expanded={expanded === "panel2"}
        onChange={handleChange("panel2")}
      >
        <S.AccordionHeader
          $isOpen={expanded === "panel2"}
          expandIcon={<FontAwesomeIcon icon={faChevronCircleDown} />}
          aria-controls="panel2bh-content"
          id="panel2bh-header"
        >
          <S.GroupHeader>
            <FontAwesomeIcon icon={faPuzzlePiece} size="2x" />
            <h2>All Sessions</h2>
          </S.GroupHeader>
        </S.AccordionHeader>
        <AccordionDetails>
          <Typography>
            Donec placerat, lectus sed mattis semper, neque lectus feugiat
            lectus, varius pulvinar diam eros in elit. Pellentesque convallis
            laoreet laoreet.
          </Typography>
        </AccordionDetails>
      </Accordion>
      <Accordion
        expanded={expanded === "panel3"}
        onChange={handleChange("panel3")}
      >
        <S.AccordionHeader
          $isOpen={expanded === "panel3"}
          expandIcon={<FontAwesomeIcon icon={faChevronCircleDown} />}
          aria-controls="panel3bh-content"
          id="panel3bh-header"
        >
          <S.GroupHeader>
            <FontAwesomeIcon icon={faPlus} size="2x" />
            <h2>Record Data</h2>
          </S.GroupHeader>
        </S.AccordionHeader>
        <AccordionDetails>
          <RecordData />
        </AccordionDetails>
      </Accordion>
      <Accordion
        expanded={expanded === "panel4"}
        onChange={handleChange("panel4")}
      >
        <S.AccordionHeader
          $isOpen={expanded === "panel4"}
          expandIcon={<FontAwesomeIcon icon={faChevronCircleDown} />}
          aria-controls="panel4bh-content"
          id="panel4bh-header"
        >
          <S.GroupHeader>
            <FontAwesomeIcon icon={faGlobe} size="2x" />
            <h2>Our site</h2>
          </S.GroupHeader>
        </S.AccordionHeader>
        <AccordionDetails>
          <Typography>
            <a href="https://hertsyl.org.uk/" target="blank">
              <Button>Click here to check out our site</Button>
            </a>
          </Typography>
        </AccordionDetails>
      </Accordion>
    </S.HomeWrapper>
  );
};

export default HomeModule;
