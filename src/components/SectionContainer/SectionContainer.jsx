import { Box } from '@mui/material';

const SectionContainer = ({
  children,
  maxWidth = '1400px',
  py = 5,
  px = 1,

  ...props
}) => {
  return (
    <Box
      component="section"
      sx={{
        py,
        px,
        mx: 'auto',
        maxWidth,
        width: '100%',
      }}
      {...props}
    >
      {children}
    </Box>
  );
};

export default SectionContainer;
