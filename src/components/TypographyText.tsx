import { FC } from 'react';
import { Typography } from '@mui/material';

interface TypographyTextProps {
  children: string | number;
  // eslint-disable-next-line react/require-default-props
  gutterBottom?: boolean;
}

const TypographyText: FC<TypographyTextProps> = ({
  gutterBottom = true,
  children,
}) => (
  <Typography variant='h6' gutterBottom={gutterBottom} fontSize={12}>
    {children}
  </Typography>
);

export default TypographyText;
