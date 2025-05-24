import { TextField, type TextFieldProps } from '@mui/material';

export const TextInput = (props: TextFieldProps) => {
  return (
    <TextField
      fullWidth
      variant="outlined"
      size="small"
      sx={{ mb: 2, ...props.sx }}
      {...props}
    />
  );
};
