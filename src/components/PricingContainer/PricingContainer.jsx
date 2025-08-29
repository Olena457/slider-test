// import { styled } from '@mui/material/styles';
// import plans from '../../data/dataPlans.js';

// import { Box, Typography, Button, Paper } from '@mui/material';
// // import { styled } from '@mui/material/styles';

// // --- Styled Components ---
// // Основний контейнер для карток
// const PricingContainer = styled(Box)(({ theme }) => ({
//   backgroundColor:
//     theme.palette.mode === 'light'
//       ? theme.palette.common.white
//       : theme.palette.grey[900],
//   maxWidth: '36em',
//   margin: '0 auto',
//   padding: '3em',
//   transition: theme.transitions.create('background-color'),
//   width: '100%',
// }));

// // Контейнер для вкладок (Monthly/Yearly)
// const TabsWrapper = styled(Box)(({ theme }) => ({
//   boxShadow: `inset 0 -1px 0 ${
//     theme.palette.mode === 'light'
//       ? theme.palette.grey[200]
//       : theme.palette.grey[800]
//   }`,
//   display: 'flex',
//   position: 'relative',
//   width: '100%',
//   marginBottom: '3em',
//   transition: theme.transitions.create('box-shadow'),
// }));

// // Кнопка-вкладка
// const TabButton = styled(Button)(({ theme, isActive }) => ({
//   flexGrow: 1,
//   background: 'none',
//   color: isActive
//     ? theme.palette.text.primary
//     : theme.palette.mode === 'light'
//     ? theme.palette.grey[500]
//     : theme.palette.grey[400],
//   cursor: 'pointer',
//   padding: '2.75rem 0',
//   position: 'relative',
//   transition: theme.transitions.create('color'),
//   '&:hover': {
//     color: isActive
//       ? theme.palette.text.primary
//       : theme.palette.mode === 'light'
//       ? theme.palette.grey[700]
//       : theme.palette.grey[200],
//     backgroundColor: 'transparent',
//   },
//   '&.Mui-focusVisible': {
//     boxShadow: `inset 0 0 0 2px ${theme.palette.primary.main}`,
//   },
//   '& span': {
//     transform: isActive ? 'scale(1.5)' : 'none',
//     transition: theme.transitions.create('transform', {
//       duration: theme.transitions.duration.standard,
//       easing: theme.transitions.easing.easeInOut,
//     }),
//     display: 'inline-block',
//   },
// }));

// // Індикатор активної вкладки
// const TabIndicator = styled(Box)(({ theme }) => ({
//   backgroundColor: 'currentColor',
//   position: 'absolute',
//   bottom: 0,
//   left: 0,
//   height: '1px',
//   transition: theme.transitions.create(['width', 'transform'], {
//     duration: theme.transitions.duration.standard,
//     easing: theme.transitions.easing.easeInOut,
//   }),
// }));

// // Компонент картки плану
// const PricingCard = styled(Paper)(({ theme, isSelected }) => ({
//   boxShadow: `inset 0 0 0 1px ${
//     isSelected
//       ? theme.palette.mode === 'light'
//         ? theme.palette.grey[900]
//         : theme.palette.common.white
//       : theme.palette.mode === 'light'
//       ? theme.palette.grey[200]
//       : theme.palette.grey[800]
//   }`,
//   cursor: 'pointer',
//   transition: theme.transitions.create('box-shadow'),
//   '&:hover': {
//     boxShadow: `inset 0 0 0 1px ${
//       theme.palette.mode === 'light'
//         ? theme.palette.grey[400]
//         : theme.palette.grey[600]
//     }`,
//   },
// }));
