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
            color: 'white',
            textShadow: '2px 2px 4px rgba(0, 0, 0, 0.4)',
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
              background: `linear-gradient(135deg, #ffffff, #f7f9fc)`,
            }}
          >
            <AccordionSummary
              expandIcon={
                <ExpandMoreIcon
                  sx={{
                    color: '#2193b0',
                  }}
                />
              }
              aria-controls="panel1a-content"
              id="panel1a-header"
              sx={{
                minHeight: '64px',
                '&.Mui-expanded': {
                  minHeight: '64px',
                },
                '@media (min-width: 768px)': {
                  minHeight: '80px',
                  '&.Mui-expanded': {
                    minHeight: '80px',
                  },
                },
              }}
            >
              <Typography
                sx={{
                  fontSize: {
                    xs: '1.2rem',
                    sm: '1.5rem',
                    md: '1.8rem',
                  },
                  fontWeight: '900',
                  width: '100%',
                  textAlign: 'center',
                  color: '#0083b0',
                }}
              >
                What AI tools are included in the app?
              </Typography>
            </AccordionSummary>
            <AccordionDetails>
              <Typography
                sx={{
                  fontSize: {
                    xs: '1rem',
                    sm: '1.1rem',
                    md: '1.2rem',
                  },
                }}
              >
                Our app features a variety of AI tools, including text
                generation, image recognition, and data analytics to streamline
                your workflow.
              </Typography>
            </AccordionDetails>
          </Accordion>

          {/* Section 2 */}
          <Accordion
            sx={{
              minWidth: { xs: 250 },
              maxWidth: { xs: '100%', sm: '100%' },
              mx: 'auto',
              background: `linear-gradient(135deg, #ffffff, #f7f9fc)`,
            }}
          >
            <AccordionSummary
              expandIcon={
                <ExpandMoreIcon
                  sx={{
                    color: '#2193b0',
                  }}
                />
              }
              aria-controls="panel2a-content"
              id="panel2a-header"
              sx={{
                minHeight: '64px',
                '&.Mui-expanded': {
                  minHeight: '64px',
                },
                '@media (min-width: 768px)': {
                  minHeight: '80px',
                  '&.Mui-expanded': {
                    minHeight: '80px',
                  },
                },
              }}
            >
              <Typography
                sx={{
                  fontSize: {
                    xs: '1.2rem',
                    sm: '1.5rem',
                    md: '1.8rem',
                  },
                  fontWeight: '900',
                  width: '100%',
                  textAlign: 'center',
                  color: '#0083b0',
                }}
              >
                How can I get started with the AI tools?
              </Typography>
            </AccordionSummary>
            <AccordionDetails>
              <Typography
                sx={{
                  fontSize: {
                    xs: '1rem',
                    sm: '1.1rem',
                    md: '1.2rem',
                  },
                }}
              >
                Simply sign up, and you'll find an intuitive dashboard with
                tutorials and examples to help you start using our AI features
                right away.
              </Typography>
            </AccordionDetails>
          </Accordion>

          {/* Section 3 */}
          <Accordion
            sx={{
              minWidth: { xs: 250 },
              maxWidth: { xs: '100%', sm: '100%' },
              mx: 'auto',
              background: `linear-gradient(135deg, #ffffff, #f7f9fc)`,
            }}
          >
            <AccordionSummary
              expandIcon={
                <ExpandMoreIcon
                  sx={{
                    color: '#2193b0',
                  }}
                />
              }
              aria-controls="panel3a-content"
              id="panel3a-header"
              sx={{
                minHeight: '64px',
                '&.Mui-expanded': {
                  minHeight: '64px',
                },
                '@media (min-width: 768px)': {
                  minHeight: '80px',
                  '&.Mui-expanded': {
                    minHeight: '80px',
                  },
                },
              }}
            >
              <Typography
                sx={{
                  fontSize: {
                    xs: '1.2rem',
                    sm: '1.5rem',
                    md: '1.8rem',
                  },
                  fontWeight: '900',
                  width: '100%',
                  textAlign: 'center',
                  color: '#0083b0',
                }}
              >
                Is my data secure when using the app?
              </Typography>
            </AccordionSummary>
            <AccordionDetails>
              <Typography
                sx={{
                  fontSize: {
                    xs: '1rem',
                    sm: '1.1rem',
                    md: '1.2rem',
                  },
                }}
              >
                Yes, we prioritize your data security. All data is encrypted and
                processed in compliance with privacy regulations to ensure your
                information is safe.
              </Typography>
            </AccordionDetails>
          </Accordion>

          {/* Section 4 */}
          <Accordion
            sx={{
              minWidth: { xs: 250 },
              maxWidth: { xs: '100%', sm: '100%' },
              mx: 'auto',
              background: `linear-gradient(135deg, #ffffff, #f7f9fc)`,
            }}
          >
            <AccordionSummary
              expandIcon={
                <ExpandMoreIcon
                  sx={{
                    color: '#2193b0',
                  }}
                />
              }
              aria-controls="panel4a-content"
              id="panel4a-header"
              sx={{
                minHeight: '64px',
                '&.Mui-expanded': {
                  minHeight: '64px',
                },
                '@media (min-width: 768px)': {
                  minHeight: '80px',
                  '&.Mui-expanded': {
                    minHeight: '80px',
                  },
                },
              }}
            >
              <Typography
                sx={{
                  fontSize: {
                    xs: '1.2rem',
                    sm: '1.5rem',
                    md: '1.8rem',
                  },
                  fontWeight: '900',
                  width: '100%',
                  textAlign: 'center',
                  color: '#0083b0',
                }}
              >
                What integrations are available?
              </Typography>
            </AccordionSummary>
            <AccordionDetails>
              <Typography
                sx={{
                  fontSize: {
                    xs: '1rem',
                    sm: '1.1rem',
                    md: '1.2rem',
                  },
                }}
              >
                Our platform supports seamless integrations with popular
                services through our robust API, allowing you to connect and
                automate your tasks easily.
              </Typography>
            </AccordionDetails>
          </Accordion>
        </Box>
      </SectionContainer>
    </>
  );
}

export default SectionAccordion;
