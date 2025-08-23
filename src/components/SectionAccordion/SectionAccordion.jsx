import Accordion from '@mui/material/Accordion';
import AccordionSummary from '@mui/material/AccordionSummary';
import AccordionDetails from '@mui/material/AccordionDetails';
import Typography from '@mui/material/Typography';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import css from './SectionAccordion';

function SectionAccordion() {
  return (
    <div classname={css.acordion}>
      {/* 1 */}
      <Accordion>
        <AccordionSummary
          expandIcon={<ExpandMoreIcon />}
          aria-controls="panel1a-content"
          id="panel1a-header"
        >
          <Typography>Заголовок 1</Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography>Текст 1 секції акордеона.</Typography>
        </AccordionDetails>
      </Accordion>

      {/* Секція 2 */}
      <Accordion>
        <AccordionSummary
          expandIcon={<ExpandMoreIcon />}
          aria-controls="panel2a-content"
          id="panel2a-header"
        >
          <Typography>Заголовок 2</Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography>вміст 1 секції.</Typography>
        </AccordionDetails>
      </Accordion>

      {/* Секція 3 */}
      <Accordion>
        <AccordionSummary
          expandIcon={<ExpandMoreIcon />}
          aria-controls="panel3a-content"
          id="panel3a-header"
        >
          <Typography>Заголовок 3</Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography>Текст 3 акордеона.</Typography>
        </AccordionDetails>
      </Accordion>

      {/* Секція 4 */}
      <Accordion>
        <AccordionSummary
          expandIcon={<ExpandMoreIcon />}
          aria-controls="panel4a-content"
          id="panel4a-header"
        >
          <Typography>Заголовок 4</Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography>Текст 4 елементи</Typography>
        </AccordionDetails>
      </Accordion>
    </div>
  );
}

export default SectionAccordion;
