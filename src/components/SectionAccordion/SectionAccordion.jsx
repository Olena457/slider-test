import Accordion from '@mui/material/Accordion';
import AccordionSummary from '@mui/material/AccordionSummary';
import AccordionDetails from '@mui/material/AccordionDetails';
import Typography from '@mui/material/Typography';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
// import css from './SectionAccordion';
import SectionContainer from '../SectionContainer/SectionContainer.jsx';

function SectionAccordion() {
  return (
    <>
      <SectionContainer>
        <Typography
          variant="h5"
          mb={5}
          component="h2"
          gutterBottom
          sx={{
            fontSize: {
              xs: '1.5rem',
              sm: '1.8rem',
              md: '2.5rem',
            },
            textAlign: 'center',
          }}
        >
          "Frequently Asked Questions"
        </Typography>
        {/* 1 */}
        <Accordion
          sx={{
            minWidth: { xs: 250 },
            maxWidth: { xs: '100%', sm: '95%' },
            mx: 'auto',
          }}
        >
          <AccordionSummary
            expandIcon={<ExpandMoreIcon />}
            aria-controls="panel1a-content"
            id="panel1a-header"
          >
            <Typography mb={4}>Заголовок 1</Typography>
          </AccordionSummary>
          <AccordionDetails>
            <Typography>Текст 1 секції акордеона.</Typography>
          </AccordionDetails>
        </Accordion>

        {/* Секція 2 */}
        <Accordion
          sx={{
            minWidth: { xs: 250 },
            maxWidth: { xs: '100%', sm: '95%' },
            mx: 'auto',
          }}
        >
          <AccordionSummary
            expandIcon={<ExpandMoreIcon />}
            aria-controls="panel2a-content"
            id="panel2a-header"
          >
            <Typography mb={4}>Заголовок 2</Typography>
          </AccordionSummary>
          <AccordionDetails>
            <Typography>вміст 1 секції.</Typography>
          </AccordionDetails>
        </Accordion>

        {/* Секція 3 */}
        <Accordion
          sx={{
            minWidth: { xs: 250 },
            maxWidth: { xs: '100%', sm: '95%' },
            mx: 'auto',
          }}
        >
          <AccordionSummary
            expandIcon={<ExpandMoreIcon />}
            aria-controls="panel3a-content"
            id="panel3a-header"
          >
            <Typography mb={4}>Заголовок 3</Typography>
          </AccordionSummary>
          <AccordionDetails>
            <Typography>Текст 3 акордеона.</Typography>
          </AccordionDetails>
        </Accordion>

        {/* Секція 4 */}
        <Accordion
          sx={{
            minWidth: { xs: 250 },
            maxWidth: { xs: '100%', sm: '95%' },
            mx: 'auto',
          }}
        >
          <AccordionSummary
            expandIcon={<ExpandMoreIcon />}
            aria-controls="panel4a-content"
            id="panel4a-header"
          >
            <Typography mb={4}>Заголовок 4</Typography>
          </AccordionSummary>
          <AccordionDetails>
            <Typography>Текст 4 елементи</Typography>
          </AccordionDetails>
        </Accordion>
      </SectionContainer>
    </>
  );
}

export default SectionAccordion;
