import { List, type ListProps, Paper } from '@mui/material';

export const TodoListWrapper = (props: ListProps) => {
  return (
    <Paper elevation={3} sx={{ mt: 2 }}>
      <List {...props} />
    </Paper>
  );
};
