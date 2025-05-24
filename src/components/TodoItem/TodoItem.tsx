// components/TodoItem/TodoItem.tsx
import { useState } from "react";
import { Checkbox, IconButton, ListItem, ListItemText, TextField } from "@mui/material";
import EditIcon from "@mui/icons-material/Edit";
import CheckIcon from "@mui/icons-material/Check";
import DeleteIcon from "@mui/icons-material/Delete";

interface TodoItemProps {
  id: string;
  title: string;
  completed: boolean;
  onToggle: (id: string) => void;
  onDelete: (id: string) => void;
  onEdit: (id: string, newTitle: string) => void;
}

export const TodoItem = ({
  id,
  title,
  completed,
  onToggle,
  onDelete,
  onEdit,
}: TodoItemProps) => {
  const [isEditing, setIsEditing] = useState(false);
  const [editedTitle, setEditedTitle] = useState(title);

  const handleEditSubmit = () => {
    if (editedTitle.trim() && editedTitle !== title) {
      onEdit(id, editedTitle);
    }
    setIsEditing(false);
  };

  return (
    <ListItem
      divider
      secondaryAction={
        <>
          {isEditing ? (
            <IconButton onClick={handleEditSubmit}>
              <CheckIcon />
            </IconButton>
          ) : (
            <IconButton onClick={() => setIsEditing(true)}>
              <EditIcon />
            </IconButton>
          )}
          <IconButton onClick={() => onDelete(id)}>
            <DeleteIcon />
          </IconButton>
        </>
      }
    >
      <Checkbox checked={completed} onChange={() => onToggle(id)} />
      {isEditing ? (
        <TextField
          size="small"
          value={editedTitle}
          onChange={(e) => setEditedTitle(e.target.value)}
          onKeyDown={(e) => e.key === 'Enter' && handleEditSubmit()}
          fullWidth
        />
      ) : (
        <ListItemText
          primary={title}
          sx={{
            textDecoration: completed ? 'line-through' : 'none',
          }}
        />
      )}
    </ListItem>
  );
};
