import { FC, ReactNode } from 'react';
import { Typography } from '@mui/material';

interface TypographyHeaderProps {
  children: ReactNode;
}

const TypographyHeader: FC<TypographyHeaderProps> = ({ children }) => (
  <Typography variant='h6' gutterBottom component='h2' fontWeight={600}>
    {children}
  </Typography>
);

export default TypographyHeader;
