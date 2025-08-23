import { Box } from '@mui/material';

const SectionWrapper = ({
  children,
  maxWidth = '1400px',
  py = 5,
  px = 2,
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

export default SectionWrapper;
