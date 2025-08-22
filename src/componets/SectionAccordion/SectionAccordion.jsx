import Accordion from '@mui/material/Accordion';
import AccordionSummary from '@mui/material/AccordionSummary';
import AccordionDetails from '@mui/material/AccordionDetails';
import Typography from '@mui/material/Typography';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';

function SectionAccordion() {
  return (
    <div>
      {/* Секція 1 */}
      <Accordion>
        <AccordionSummary
          expandIcon={<ExpandMoreIcon />}
          aria-controls="panel1a-content"
          id="panel1a-header"
        >
          <Typography>Заголовок Секції 1</Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography>Текст першої секції акордеона.</Typography>
        </AccordionDetails>
      </Accordion>

      {/* Секція 2 */}
      <Accordion>
        <AccordionSummary
          expandIcon={<ExpandMoreIcon />}
          aria-controls="panel2a-content"
          id="panel2a-header"
        >
          <Typography>Заголовок Секції 2</Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography>вміст для другої секції.</Typography>
        </AccordionDetails>
      </Accordion>

      {/* Секція 3 */}
      <Accordion>
        <AccordionSummary
          expandIcon={<ExpandMoreIcon />}
          aria-controls="panel3a-content"
          id="panel3a-header"
        >
          <Typography>Заголовок Секції 3</Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography>Текст секції акордеона.</Typography>
        </AccordionDetails>
      </Accordion>

      {/* Секція 4 */}
      <Accordion>
        <AccordionSummary
          expandIcon={<ExpandMoreIcon />}
          aria-controls="panel4a-content"
          id="panel4a-header"
        >
          <Typography>Заголовок Секції 4</Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography>Текст інші елементи</Typography>
        </AccordionDetails>
      </Accordion>
    </div>
  );
}

export default SectionAccordion;
