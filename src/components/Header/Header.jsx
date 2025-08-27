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
import transparent from '../../assets/images/transparent.png';

import {
  Menu as MenuIcon,
  Close as CloseIcon,
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
    references: [
      {
        id: 1,
        title: 'Analytics',
        description:
          'Get a better understanding of where your traffic is coming from.',
        icon: <AnalyticsIcon />,
        reference: 'https://www.google.com/analytics',
        isExternal: true,
      },
      {
        id: 2,
        title: 'Speak API',
        description:
          'Speak directly to your customers in a more meaningful way.',
        icon: <CampaignIcon />,
        reference: 'https://nlpcloud.com',
        isExternal: true,
      },
      {
        id: 3,
        title: 'Security',
        description: "Your customers' data will be safe and secure.",
        icon: <SecurityIcon />,
        reference: 'https://www.google.com/security',
        isExternal: true,
      },
      {
        id: 4,
        title: 'Integrations',
        description:
          'A modern color generation system with seamless HTML integration.',
        icon: <IntegrationsIcon />,
        reference: 'https://www.learnui.design/tools/gradient-generator.html',
        isExternal: true,
      },
      {
        id: 5,
        title: 'Animations',
        description:
          'Refined motion and delicate animations breathe life into the interface.',
        icon: <AutomationsIcon />,
        reference: 'https://animejs.com/',
        isExternal: true,
      },
    ],
  },
  { id: 211, title: 'Home', link: '#home-section', icon: <HomeIcon /> },
  {
    id: 212,
    title: 'Questions',
    link: '#questions-section',
    icon: <QuestionsIcon />,
  },
  {
    id: 213,
    title: 'Reviews',
    link: '#reviews-section',
    icon: <ReviewsIcon />,
  },
  {
    id: 214,
    title: 'Options',
    link: '#options-section',
    icon: <OptionsIcon />,
  },
  {
    id: 215,
    title: 'Library',
    link: '#library-section',
    icon: <LibraryIcon />,
  },
  { id: 216, title: 'Like', link: '#like-section', icon: <LikeIcon /> },
  { id: 217, title: 'Swiper', link: '#swiper-section', icon: <SwiperIcon /> },
  {
    id: 218,
    title: 'Services',
    link: '#services-section',
    icon: <ServicesIcon />,
  },
  {
    id: 19,
    title: 'Contacts',
    link: '#contacts-section',
    icon: <ContactsIcon />,
  },
];

const Header = () => {
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down('md'));

  const [mobileOpen, setMobileOpen] = useState(false);
  const [anchorEl, setAnchorEl] = useState(null);
  const [featuresOpen, setFeaturesOpen] = useState(false); // state mobile menu

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
      if (isMobile) {
        handleDrawerToggle();
      }
      setTimeout(() => {
        element.scrollIntoView({ behavior: 'smooth', block: 'start' });
      }, 300);
    }
  };

  const desktopNav = (
    <Box
      sx={{
        display: { xs: 'none', md: 'flex' },
        alignItems: 'center',
      }}
    >
      {/* Links_________________________________________ header */}
      {sections
        .filter(section => section.title !== 'Features')
        .map(section => (
          <Button
            fontSize={{
              md: '2rem',
              lg: '2.2rem',
              xl: '3.5rem',
            }}
            key={section.id}
            color="inherit"
            sx={{
              borderRadius: '12px',
              textTransform: 'none',
              color: theme.palette.primary.main,
              transition: '0.3s',
              '&:hover': {
                color: theme.palette.background.default,
                background: theme.gradients.headerFooter,
              },
              '&:focus': {
                color: theme.palette.background.default,
                background: theme.gradients.headerFooter,
              },
            }}
            onClick={() => handleScrollToSection(section.link.substring(1))}
          >
            {section.title}
          </Button>
        ))}

      {/* "Features" */}
      <Button
        onClick={handleMenuOpen}
        endIcon={<ExpandMoreIcon />}
        sx={{
          textTransform: 'none',
          color: theme.palette.primary.main,
          borderRadius: '12px',
          transition: '0.3s',
          '&:hover': {
            color: theme.palette.background.default,
            background: theme.gradients.headerFooter,
          },
          '&:focus': {
            color: theme.palette.background.default,
            background: theme.gradients.headerFooter,
          },
        }}
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
          <Stack
            spacing={2}
            sx={{
              minWidth: 250,
              maxWidth: 400,
            }}
          >
            {sections[0].references.map(item => (
              <ListItemButton
                key={item.id}
                onClick={() => {
                  window.open(item.reference, '_blank');
                  handleMenuClose();
                }}
                sx={{
                  display: 'flex',
                  alignItems: 'flex-start',
                  p: 1,
                  borderRadius: 6,
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
                  {item.icon}
                </ListItemIcon>
                <Box>
                  <Typography variant="body1" sx={{ fontWeight: 'bold' }}>
                    {item.title}
                  </Typography>
                  <Typography variant="body2" color="text.secondary">
                    {item.description}
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
          background: theme.gradients.headerFooter,
          color: theme.palette.primary.main,
          width: 250,
          height: '100%',
          p: 2,
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'flex-start',
          overflowY: 'auto',
        }}
        role="presentation"
      >
        <IconButton
          onClick={handleDrawerToggle}
          sx={{ mb: 2, color: theme.palette.primary.main }}
        >
          <CloseIcon />
        </IconButton>
        <List sx={{ width: '100%' }}>
          {/* Mobile menu items with Features dropdown */}
          <ListItemButton
            onClick={() => setFeaturesOpen(!featuresOpen)}
            sx={{
              pl: 2,
              transition: '0.3s',
              '&:hover, &:focus': {
                backgroundColor: theme.palette.action.hover,
              },
              '& .MuiListItemText-primary': {
                transition: '0.3s',
              },
              '&:hover .MuiListItemText-primary, &:focus .MuiListItemText-primary':
                {
                  color: theme.palette.primary.main,
                },
              '& .MuiListItemIcon-root': {
                transition: '0.3s',
              },
              '&:hover .MuiListItemIcon-root, &:focus .MuiListItemIcon-root': {
                color: theme.palette.primary.main,
              },
            }}
          >
            <ListItemIcon>
              <AnalyticsIcon />
            </ListItemIcon>
            <ListItemText primary="Features" />
            {featuresOpen ? <ExpandLessIcon /> : <ExpandMoreIcon />}
          </ListItemButton>
          <Collapse in={featuresOpen} timeout="auto" unmountOnExit>
            <List component="div" disablePadding>
              {sections[0].references.map(item => (
                <ListItemButton
                  key={item.id}
                  onClick={() => {
                    window.open(item.reference, '_blank');
                    handleDrawerToggle();
                  }}
                  sx={{
                    pl: 4,
                    transition: '0.3s',
                    '&:hover, &:focus': {
                      backgroundColor: theme.palette.action.hover,
                    },
                    '& .MuiListItemText-primary': {
                      transition: '0.3s',
                    },
                    '&:hover .MuiListItemText-primary, &:focus .MuiListItemText-primary':
                      {
                        color: theme.palette.primary.main,
                      },
                    '& .MuiListItemIcon-root': {
                      transition: '0.3s',
                    },
                    '&:hover .MuiListItemIcon-root, &:focus .MuiListItemIcon-root':
                      {
                        color: theme.palette.primary.main,
                      },
                  }}
                >
                  <ListItemIcon
                    sx={{
                      minWidth: 'auto',
                      mr: 2,
                      color: theme.palette.primary.main,
                    }}
                  >
                    {item.icon}
                  </ListItemIcon>
                  <Box>
                    <Typography variant="body1" sx={{ fontWeight: 'bold' }}>
                      {item.title}
                    </Typography>
                    <Typography variant="body2" color="text.secondary">
                      {item.description}
                    </Typography>
                  </Box>
                </ListItemButton>
              ))}
            </List>
          </Collapse>

          {/* Other___________________ menu items */}
          {sections
            .filter(section => section.title !== 'Features')
            .map(section => {
              if (section.link) {
                return (
                  <ListItemButton
                    key={section.title}
                    onClick={() => {
                      handleScrollToSection(section.link.substring(1));
                    }}
                    sx={{
                      pl: 2,
                      transition: '0.3s',
                      '&:hover, &:focus': {
                        backgroundColor: theme.palette.action.hover,
                      },
                      '& .MuiListItemText-primary': {
                        transition: '0.3s',
                      },
                      '&:hover .MuiListItemText-primary, &:focus .MuiListItemText-primary':
                        {
                          color: theme.palette.primary.main,
                        },
                      '& .MuiListItemIcon-root': {
                        transition: '0.3s',
                      },
                      '&:hover .MuiListItemIcon-root, &:focus .MuiListItemIcon-root':
                        {
                          color: theme.palette.primary.main,
                        },
                    }}
                  >
                    <ListItemIcon>{section.icon}</ListItemIcon>
                    <ListItemText primary={section.title} />
                  </ListItemButton>
                );
              }
              return null;
            })}
          <ListItemButton
            onClick={() => {
              /* switch language logic add here_________________________________________ */
            }}
            sx={{
              color: theme.palette.primary.main,
              transition: '0.3s',
              mr: 2,
              '&:hover, &:focus': {
                color: theme.palette.background.default,
                background: theme.gradients.headerFooter,
              },
              '& .MuiListItemText-primary': {
                transition: '0.3s',
              },
              '&:hover .MuiListItemText-primary, &:focus .MuiListItemText-primary':
                {
                  color: theme.palette.primary.main,
                },
              '& .MuiListItemIcon-root': {
                transition: '0.3s',
              },
              '&:hover .MuiListItemIcon-root, &:focus .MuiListItemIcon-root': {
                color: theme.palette.primary.main,
              },
            }}
          >
            <ListItemIcon>
              <LanguageIcon sx={{ pl: 3 }} />
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
        background: theme.gradients.headerFooter,
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
        <Box
          sx={{ position: 'relative', display: 'flex', alignItems: 'center' }}
        >
          <Box
            component="img"
            src={transparent}
            alt="Logo"
            sx={{
              width: { xs: 80, md: 120 },
              height: { xs: 80, md: 120 },
              borderRadius: 2,
            }}
          />
          <Typography
            fontSize={{ xs: '1rem', md: '1.5rem' }}
            sx={{
              fontWeight: 'bold',
              lineHeight: 1,
              color: 'background.default',
              position: 'absolute',
              top: '50%',
              left: '5%',
              transform: 'translate(-50%, -50%)',
              textTransform: 'uppercase',
              whiteSpace: 'nowrap',
              '&:hover, &:focus': {
                color: theme.palette.primary.main,
                textDecoration: 'none',
                cursor: 'pointer',
              },
            }}
          >
            AIDE
          </Typography>
        </Box>

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
            <Box sx={{ display: 'flex', marginRight: 3, alignItems: 'center' }}>
              <IconButton
                edge="end"
                onClick={() => {
                  /* add language switching logic here___________________________ */
                }}
                color="white"
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
