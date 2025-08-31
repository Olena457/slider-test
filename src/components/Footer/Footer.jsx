import {
  Box,
  Grid,
  Typography,
  Link,
  Divider,
  IconButton,
  useTheme,
} from '@mui/material';

import FacebookIcon from '@mui/icons-material/Facebook';
import TwitterIcon from '@mui/icons-material/Twitter';
import InstagramIcon from '@mui/icons-material/Instagram';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import linksSections from '../../data/linksData.js';
import transparent from '../../assets/images/transparent.png';

const Footer = () => {
  const theme = useTheme();
  const socialLinks = [
    { icon: FacebookIcon, url: 'https://www.facebook.com/your-page' },
    { icon: TwitterIcon, url: 'https://twitter.com/your-account' },
    { icon: InstagramIcon, url: 'https://www.instagram.com/your-account' },
    { icon: LinkedInIcon, url: 'https://www.linkedin.com/in/your-profile' },
  ];

  // Ця функція забезпечує плавний скрол
  const handleSmoothScroll = (event, sectionId) => {
    // Зупиняємо стандартну поведінку посилання, щоб уникнути різкого стрибка
    event.preventDefault();
    const element = document.getElementById(sectionId);
    if (element) {
      // Використовуємо scrollIntoView з опцією 'smooth'
      element.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
  };

  return (
    <div id="contacts-section">
      <Box
        component="footer"
        sx={{
          background: theme.gradients.headerFooter,
          color: theme.palette.text.primary,
          minWidth: '250px',
          maxWidth: '1560px',
          mx: 'auto',
          pt: 6,
          pb: { xs: 2, sm: 3, md: 4 },
          px: { xs: 2, sm: 3, md: 6, lg: 8, xl: 12 },
        }}
      >
        <Grid container spacing={4} alignItems="flex-start">
          {/* ============================ */}
          {/* logo */}
          {/* ============================ */}
          <Grid
            size={{ xs: 12, md: 3 }}
            sx={{ textAlign: { xs: 'center', md: 'left' } }}
          >
            <Box
              sx={{
                position: 'relative',
                display: 'flex',
                alignItems: 'center',
              }}
            >
              <Box
                component="img"
                src={transparent}
                alt="Logo"
                sx={{
                  mx: 'auto',
                  color: theme.palette.dark.main,
                  width: { xs: 80, md: 150 },
                  height: { xs: 80, md: 150 },
                  borderRadius: 2,
                }}
              />
              <Typography
                fontSize={{
                  xs: '1rem',
                  md: '1.5rem',
                }}
                sx={{
                  fontWeight: 'bold',
                  lineHeight: 1,
                  color: theme.palette.dark.main,
                  position: 'absolute',
                  top: '50%',
                  left: {
                    xs: '35%',
                    sm: '43%',
                    md: '12%',
                    lg: '27%',
                  },
                  transform: 'translate(-50%, -50%)',
                  textTransform: 'uppercase',
                  textShadow: '2px 2px 4px rgba(0, 0, 0, 0.5)',
                  whiteSpace: 'nowrap',
                  mb: 0.5,
                  '&:hover, &:focus': {
                    color: theme.palette.background.default,
                    textDecoration: 'none',
                    cursor: 'pointer',
                  },
                }}
              >
                AIDE
              </Typography>
            </Box>
          </Grid>
          {/* ============================ */}
          {/* Links */}
          {/* ============================ */}
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
              {linksSections.map((section, index) => (
                <Box key={index}>
                  <Typography
                    variant="subtitle1"
                    gutterBottom
                    color={theme.palette.text.primary}
                    sx={{
                      fontWeight: 600,
                      textShadow: '2px 2px 4px rgba(0, 0, 0, 0.5)',

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
                  {/*Links  */}
                  {section.text
                    ? section.text.map((text, i) => (
                        <Link
                          color={theme.palette.text.primary}
                          key={i}
                          // Використовуємо onClick замість href для плавного скролу
                          href="#"
                          onClick={e =>
                            handleSmoothScroll(e, section.links[i].substring(1))
                          }
                          underline="hover"
                          display="block"
                          sx={{
                            mb: 0.5,

                            '&:hover, &:focus': {
                              color: theme.palette.background.default,
                              textDecoration: 'underline',
                            },
                          }}
                        >
                          {text}
                        </Link>
                      ))
                    : section.links.map((link, i) => (
                        <Link
                          color={theme.palette.text.primary}
                          key={i}
                          // Використовуємо onClick замість href для плавного скролу
                          href="#"
                          onClick={e =>
                            handleSmoothScroll(e, link.substring(1))
                          }
                          underline="hover"
                          display="block"
                          sx={{
                            mb: 0.5,

                            '&:hover, &:focus': {
                              color: theme.palette.background.default,
                              textDecoration: 'underline',
                              cursor: 'pointer',
                            },
                          }}
                        >
                          {section.subtitle[i]}
                        </Link>
                      ))}
                </Box>
              ))}
            </Box>
          </Grid>
        </Grid>
        <Divider sx={{ my: 4, bgcolor: theme.palette.text.secondary }} />
        {/* ============================ */}
        {/* Social Media Links */}
        {/* ============================ */}
        <Box textAlign="center">
          <Box mb={2}>
            {socialLinks.map((social, i) => (
              <Link
                key={i}
                href={social.url}
                target="_blank"
                rel="noopener"
                sx={{
                  color: 'inherit',
                  '&:hover, &:focus': {
                    color: 'white',
                    textDecoration: 'underline',
                  },
                }}
              >
                <IconButton
                  sx={{
                    fontSize: '2rem',
                    mx: 1,
                    color: 'text.secondary',
                    '&:hover, &:focus': {
                      color: 'white',
                      cursor: 'pointer',
                    },
                  }}
                >
                  <social.icon fontSize="inherit" />
                </IconButton>
              </Link>
            ))}
          </Box>
          <Typography variant="caption" sx={{ color: 'text.primary' }}>
            © {new Date().getFullYear()} Company AIDE. All rights reserved.
          </Typography>
        </Box>
      </Box>
    </div>
  );
};

export default Footer;
