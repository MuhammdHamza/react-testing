import { Button as MUIButton, type ButtonProps } from '@mui/material';

export const Button = ({ children, variant = 'contained', ...rest }: ButtonProps) => {
  return (
    <MUIButton
      variant={variant}
      sx={{ borderRadius: 2, textTransform: 'none', ...rest.sx }}
      {...rest}
    >
      {children}
    </MUIButton>
  );
};
