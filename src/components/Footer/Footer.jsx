import {
  Box,
  Container,
  Grid,
  Typography,
  Link,
  Divider,
  IconButton,
  useTheme,
} from '@mui/material';
import SectionContainer from '../SectionContainer/SectionContainer.jsx';

import FacebookIcon from '@mui/icons-material/Facebook';
import TwitterIcon from '@mui/icons-material/Twitter';
import InstagramIcon from '@mui/icons-material/Instagram';
import LinkedInIcon from '@mui/icons-material/LinkedIn';

const Footer = () => {
  const theme = useTheme();
  const isDark = theme.palette.mode === 'dark';

  const linkSections = [
    {
      title: 'Support',
      links: ['Pre-Sale FAQS', 'Submit a ticket'],
    },
    {
      title: 'Services',
      links: ['Theme Tweak'],
    },
    {
      title: 'Showcase',
      links: ['Widget Kit', 'Support'],
    },
    {
      title: 'Company',
      links: ['About Us', 'Contact Us', 'Resources'],
    },
  ];

  return (
    <SectionContainer>
      <Box
        component="footer"
        sx={{
          backgroundColor: isDark ? 'grey.900' : 'white',
          color: isDark ? 'grey.100' : 'grey.800',
          maxWidth: '1400px',
          mx: 'auto',
          pt: 6,
          pb: 4,
        }}
      >
        {/* <Container maxWidth="lg"> */}
        <Grid container spacing={4} alignItems="flex-start">
          {/* Logo */}
          <Grid
            size={{ xs: 12, md: 3 }}
            sx={{ textAlign: { xs: 'center', md: 'left' } }}
          >
            <Box
              component="img"
              src="http://placehold.jp/2a2a2c/ffffff/200x100.png?text=Company%20Logo"
              alt="Company Logo"
              sx={{
                width: { xs: 150, md: 200 },
                height: { xs: 75, md: 100 },
                borderRadius: 2,
                mx: { xs: 'auto', md: 0 },
              }}
            />
          </Grid>

          {/* Links */}
          <Grid size={{ xs: 12, md: 9 }}>
            <Box
              sx={{
                display: 'grid',
                gridTemplateColumns: {
                  xs: 'repeat(2, 1fr)',
                  sm: 'repeat(4, 1fr)',
                },
                gap: 3,
                textAlign: { xs: 'center', sm: 'center' },

                mx: 'auto',
              }}
            >
              {linkSections.map((section, index) => (
                <Box key={index}>
                  <Typography
                    variant="subtitle1"
                    gutterBottom
                    sx={{
                      fontWeight: 600,
                      textTransform: 'uppercase',
                      fontSize: {
                        xs: '1rem',
                        sm: '1.1rem',
                        md: '1.2rem',
                      },
                    }}
                  >
                    {section.title}
                  </Typography>
                  {section.links.map((text, i) => (
                    <Link
                      key={i}
                      href="#"
                      underline="hover"
                      display="block"
                      color="inherit"
                      sx={{ mb: 0.5 }}
                    >
                      {text}
                    </Link>
                  ))}
                </Box>
              ))}
            </Box>
          </Grid>
        </Grid>

        <Divider sx={{ my: 4 }} />

        {/* Social + Copyright */}
        <Box textAlign="center">
          <Box mb={2}>
            {[FacebookIcon, TwitterIcon, InstagramIcon, LinkedInIcon].map(
              (Icon, i) => (
                <IconButton key={i} sx={{ fontSize: '2rem', mx: 1 }}>
                  <Icon fontSize="inherit" />
                </IconButton>
              )
            )}
          </Box>
          <Typography variant="caption">
            &copy; {new Date().getFullYear()} Company Name. All rights reserved.
          </Typography>
        </Box>
        {/* </Container> */}
      </Box>
    </SectionContainer>
  );
};

export default Footer;
