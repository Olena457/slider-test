import Accordion from '@mui/material/Accordion';
import AccordionSummary from '@mui/material/AccordionSummary';
import AccordionDetails from '@mui/material/AccordionDetails';
import Typography from '@mui/material/Typography';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import SectionContainer from '../SectionContainer/SectionContainer.jsx';
import { Box } from '@mui/material';

function SectionAccordion() {
  return (
    <>
      <SectionContainer id="questions-section">
        <Typography
          variant="h4"
          component="h2"
          gutterBottom
          sx={{
            fontSize: {
              xs: '1.5rem',
              sm: '1.8rem',
              md: '2.5rem',
            },
            textAlign: 'center',
            mb: 6,
          }}
        >
          "Frequently Asked Questions"
        </Typography>

        <Box
          sx={{
            px: {
              xs: '10px',
              sm: '30px',
              md: '60px',
              lg: '75px',
              xl: '85px',
            },
          }}
        >
          {/* Section 1 */}
          <Accordion
            sx={{
              minWidth: { xs: 250 },
              maxWidth: { xs: '100%', sm: '100%' },
              mx: 'auto',
            }}
          >
            <AccordionSummary
              expandIcon={<ExpandMoreIcon />}
              aria-controls="panel1a-content"
              id="panel1a-header"
            >
              <Typography sx={{ width: '100%', textAlign: 'center' }}>
                Заголовок 1
              </Typography>
            </AccordionSummary>
            <AccordionDetails>
              <Typography>Текст 1 секції акордеона.</Typography>
            </AccordionDetails>
          </Accordion>

          {/* Section 2 */}
          <Accordion
            sx={{
              minWidth: { xs: 250 },
              maxWidth: { xs: '100%', sm: '100%' },
              mx: 'auto',
            }}
          >
            <AccordionSummary
              expandIcon={<ExpandMoreIcon />}
              aria-controls="panel2a-content"
              id="panel2a-header"
            >
              <Typography sx={{ width: '100%', textAlign: 'center' }}>
                Заголовок 2
              </Typography>
            </AccordionSummary>
            <AccordionDetails>
              <Typography>вміст 1 секції.</Typography>
            </AccordionDetails>
          </Accordion>

          {/* Section 3 */}
          <Accordion
            sx={{
              minWidth: { xs: 250 },
              maxWidth: { xs: '100%', sm: '100%' },
              mx: 'auto',
            }}
          >
            <AccordionSummary
              expandIcon={<ExpandMoreIcon />}
              aria-controls="panel3a-content"
              id="panel3a-header"
            >
              <Typography sx={{ width: '100%', textAlign: 'center' }}>
                Заголовок 3
              </Typography>
            </AccordionSummary>
            <AccordionDetails>
              <Typography>Текст 3 акордеона.</Typography>
            </AccordionDetails>
          </Accordion>

          {/* Section 4 */}
          <Accordion
            sx={{
              minWidth: { xs: 250 },
              maxWidth: { xs: '100%', sm: '100%' },
              mx: 'auto',
            }}
          >
            <AccordionSummary
              expandIcon={<ExpandMoreIcon />}
              aria-controls="panel4a-content"
              id="panel4a-header"
            >
              <Typography sx={{ width: '100%', textAlign: 'center' }}>
                Заголовок 4
              </Typography>
            </AccordionSummary>
            <AccordionDetails>
              <Typography>Текст 4 елементи</Typography>
            </AccordionDetails>
          </Accordion>
        </Box>
      </SectionContainer>
    </>
  );
}

export default SectionAccordion;
