import { useState } from 'react';
import {
  AppBar,
  Toolbar,
  Button,
  IconButton,
  Box,
  Typography,
  Menu,
  useTheme,
  useMediaQuery,
  Drawer,
  List,
  ListItemButton,
  ListItemIcon,
  ListItemText,
  Stack,
  Collapse,
} from '@mui/material';

import {
  Menu as MenuIcon,
  Close as CloseIcon,
  Brightness4 as DarkModeIcon,
  Brightness7 as LightModeIcon,
  ExpandMore as ExpandMoreIcon,
  ExpandLess as ExpandLessIcon,
  AnalyticsOutlined as AnalyticsIcon,
  CampaignOutlined as CampaignIcon,
  SecurityOutlined as SecurityIcon,
  IntegrationInstructionsOutlined as IntegrationsIcon,
  AutoAwesomeOutlined as AutomationsIcon,
  PlayCircleOutline as WatchDemoIcon,
  ContactMailOutlined as ContactSalesIcon,
  LanguageOutlined as LanguageIcon,
  HomeOutlined as HomeIcon,
  HelpOutlineOutlined as QuestionsIcon,
  RateReviewOutlined as ReviewsIcon,
  ContactsOutlined as ContactsIcon,
  SettingsOutlined as OptionsIcon,
  LibraryAddOutlined as LibraryIcon,
  FavoriteBorderOutlined as LikeIcon,
  LayersOutlined as SwiperIcon,
  MiscellaneousServicesOutlined as ServicesIcon,
} from '@mui/icons-material';

const sections = [
  {
    title: 'Features',
    links: [
      {
        title: 'Analytics',
        description:
          'Get a better understanding of where your traffic is coming from.',
        icon: <AnalyticsIcon />,
        link: 'https://www.google.com/analytics',
        isExternal: true,
      },
      {
        title: 'Engagement',
        description:
          'Speak directly to your customers in a more meaningful way.',
        icon: <CampaignIcon />,
        link: 'https://www.google.com/engagement',
        isExternal: true,
      },
      {
        title: 'Security',
        description: "Your customers' data will be safe and secure.",
        icon: <SecurityIcon />,
        link: 'https://www.google.com/security',
        isExternal: true,
      },
      {
        title: 'Integrations',
        description:
          "Connect with third-party tools that you're already using.",
        icon: <IntegrationsIcon />,
        link: 'https://www.google.com/integrations',
        isExternal: true,
      },
      {
        title: 'Automations',
        description:
          'Build strategic funnels that will drive your customers to convert.',
        icon: <AutomationsIcon />,
        link: 'https://www.google.com/automations',
        isExternal: true,
      },
    ],
  },
  { title: 'Home', link: '#home-section', icon: <HomeIcon /> },
  { title: 'Questions', link: '#questions-section', icon: <QuestionsIcon /> },
  { title: 'Reviews', link: '#reviews-section', icon: <ReviewsIcon /> },
  { title: 'Options', link: '#options-section', icon: <OptionsIcon /> },
  { title: 'Library', link: '#library-section', icon: <LibraryIcon /> },
  { title: 'Like', link: '#like-section', icon: <LikeIcon /> },
  { title: 'Swiper', link: '#swiper-section', icon: <SwiperIcon /> },
  { title: 'Services', link: '#services-section', icon: <ServicesIcon /> },
  { title: 'Contacts', link: '#contacts-section', icon: <ContactsIcon /> },
];

const Header = ({ toggleColorMode }) => {
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down('md'));
  const isDark = theme.palette.mode === 'dark';

  const [mobileOpen, setMobileOpen] = useState(false);
  const [anchorEl, setAnchorEl] = useState(null);
  const [featuresOpen, setFeaturesOpen] = useState(false);

  const handleDrawerToggle = () => {
    setMobileOpen(!mobileOpen);
  };

  const handleMenuOpen = event => {
    setAnchorEl(event.currentTarget);
  };

  const handleMenuClose = () => {
    setAnchorEl(null);
  };

  const handleScrollToSection = id => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
  };

  const desktopNav = (
    <Box
      sx={{
        display: { xs: 'none', md: 'flex' },
        alignItems: 'center',
      }}
    >
      {/* Links */}
      {sections.slice(1).map(section => (
        <Button
          key={section.title}
          color="inherit"
          sx={{ textTransform: 'none', color: theme.palette.text.secondary }}
          onClick={() => handleScrollToSection(section.link.substring(1))}
        >
          {section.title}
        </Button>
      ))}

      {/*  "Features" */}
      <Button
        color="inherit"
        onClick={handleMenuOpen}
        endIcon={<ExpandMoreIcon />}
        sx={{ textTransform: 'none', color: theme.palette.text.secondary }}
      >
        Features
      </Button>
      <Menu
        anchorEl={anchorEl}
        open={Boolean(anchorEl)}
        onClose={handleMenuClose}
        aria-labelledby="features-button"
      >
        <Box sx={{ p: 2 }}>
          <Stack spacing={2} sx={{ minWidth: 250, maxWidth: 400 }}>
            {sections[0].links.map((link, index) => (
              <ListItemButton
                key={index}
                // Тут логіка для перенаправлення на зовнішній ресурс
                onClick={() => {
                  window.open(link.link, '_blank');
                  handleMenuClose();
                }}
                sx={{
                  display: 'flex',
                  alignItems: 'flex-start',
                  p: 1,
                  borderRadius: 1,
                  '&:hover': { backgroundColor: theme.palette.action.hover },
                }}
              >
                <ListItemIcon
                  sx={{
                    minWidth: 'auto',
                    mr: 2,
                    color: theme.palette.primary.main,
                  }}
                >
                  {link.icon}
                </ListItemIcon>
                <Box>
                  <Typography variant="body1" sx={{ fontWeight: 'bold' }}>
                    {link.title}
                  </Typography>
                  <Typography variant="body2" color="text.secondary">
                    {link.description}
                  </Typography>
                </Box>
              </ListItemButton>
            ))}
            <Box
              sx={{
                p: 1,
                mt: 2,
                borderTop: '1px solid',
                borderColor: 'divider',
                display: 'flex',
                justifyContent: 'space-between',
              }}
            >
              <Button
                variant="text"
                startIcon={<WatchDemoIcon />}
                sx={{ textTransform: 'none' }}
              >
                Watch Demo
              </Button>
              <Button
                variant="text"
                startIcon={<ContactSalesIcon />}
                sx={{ textTransform: 'none' }}
              >
                Contact Sales
              </Button>
            </Box>
          </Stack>
        </Box>
      </Menu>
    </Box>
  );

  const mobileNav = (
    <Drawer anchor="right" open={mobileOpen} onClose={handleDrawerToggle}>
      <Box
        sx={{
          width: 250,
          p: 2,
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'flex-start',
        }}
        role="presentation"
      >
        <IconButton onClick={handleDrawerToggle} sx={{ mb: 2 }}>
          <CloseIcon />
        </IconButton>
        <List sx={{ width: '100%' }}>
          {/* Динамічно рендеримо всі пункти меню */}
          {sections.map(section => {
            if (section.title === 'Features') {
              return (
                <div key={section.title}>
                  <ListItemButton
                    onClick={() => setFeaturesOpen(!featuresOpen)}
                    sx={{ pl: 2 }}
                  >
                    <ListItemIcon>
                      <AnalyticsIcon />
                    </ListItemIcon>
                    <ListItemText primary="Features" />
                    {featuresOpen ? <ExpandLessIcon /> : <ExpandMoreIcon />}
                  </ListItemButton>
                  <Collapse in={featuresOpen} timeout="auto" unmountOnExit>
                    <List component="div" disablePadding>
                      {section.links.map((link, index) => (
                        <ListItemButton
                          key={index}
                          // Логіка для зовнішніх посилань
                          onClick={() => {
                            window.open(link.link, '_blank');
                            handleDrawerToggle();
                          }}
                          sx={{ pl: 4 }}
                        >
                          <ListItemIcon
                            sx={{
                              minWidth: 'auto',
                              mr: 2,
                              color: theme.palette.primary.main,
                            }}
                          >
                            {link.icon}
                          </ListItemIcon>
                          <Box>
                            <Typography
                              variant="body1"
                              sx={{ fontWeight: 'bold' }}
                            >
                              {link.title}
                            </Typography>
                            <Typography variant="body2" color="text.secondary">
                              {link.description}
                            </Typography>
                          </Box>
                        </ListItemButton>
                      ))}
                    </List>
                  </Collapse>
                </div>
              );
            } else {
              return (
                <ListItemButton
                  key={section.title}
                  // Логіка для внутрішніх посилань
                  onClick={() => {
                    handleScrollToSection(section.link.substring(1));
                    handleDrawerToggle();
                  }}
                  sx={{ pl: 2 }}
                >
                  <ListItemIcon>{section.icon}</ListItemIcon>
                  <ListItemText primary={section.title} />
                </ListItemButton>
              );
            }
          })}
          {/* Інші кнопки: Switch Theme, Language */}
          <ListItemButton onClick={toggleColorMode} sx={{ pl: 2 }}>
            <ListItemIcon>
              {isDark ? <LightModeIcon /> : <DarkModeIcon />}
            </ListItemIcon>
            <ListItemText primary="Switch Theme" />
          </ListItemButton>
          <ListItemButton
            onClick={() => {
              /* switch language logic add here_________________________________________ */
            }}
            sx={{ pl: 2 }}
          >
            <ListItemIcon>
              <LanguageIcon />
            </ListItemIcon>
            <ListItemText primary="Language" />
          </ListItemButton>
        </List>
      </Box>
    </Drawer>
  );

  return (
    <AppBar
      position="sticky"
      sx={{
        backgroundColor: theme.palette.background.default,
        color: theme.palette.text.primary,
        boxShadow: 'sm',
        borderTop: `6px solid ${theme.palette.primary.main}`,
      }}
    >
      <Toolbar
        sx={{
          justifyContent: isMobile ? 'space-between' : 'space-between',
          maxWidth: '1200px',
          width: '100%',
          mx: 'auto',
          px: 2,
        }}
      >
        <Typography variant="h6" sx={{ fontWeight: 'bold' }}>
          Your Logo
        </Typography>
        {isMobile ? (
          <Box
            sx={{
              display: 'flex',
              alignItems: 'center',
              flexGrow: 1,
              pr: 6,
              ml: 3,
              justifyContent: 'flex-end',
            }}
          >
            <IconButton edge="end" onClick={handleDrawerToggle} color="inherit">
              <MenuIcon />
            </IconButton>
          </Box>
        ) : (
          <Box
            sx={{
              display: 'flex',
              alignItems: 'center',
              flexGrow: 1,
              pr: 6,
              justifyContent: 'flex-end',
            }}
          >
            {desktopNav}
            <Box sx={{ display: 'flex', alignItems: 'center' }}>
              <IconButton
                edge="end"
                onClick={toggleColorMode}
                color="inherit"
                sx={{ ml: 1 }}
              >
                {isDark ? <LightModeIcon /> : <DarkModeIcon />}
              </IconButton>
              <IconButton
                edge="end"
                onClick={() => {
                  /* add language switching logic here___________________________ */
                }}
                color="inherit"
              >
                <LanguageIcon />
              </IconButton>
            </Box>
          </Box>
        )}
      </Toolbar>
      {mobileNav}
    </AppBar>
  );
};

export default Header;
