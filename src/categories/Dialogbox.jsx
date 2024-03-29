import React, { useState } from "react";
import Box from "@mui/material/Box";
import CloseIcon from "@mui/icons-material/Close";
import {
  Button,
  Dialog,
  DialogActions,
  DialogContent,
  DialogContentText,
  DialogTitle,
  Snackbar,
  TextField,
} from "@mui/material";
import IconButton from "@mui/material/IconButton";

const Dialogbox = ({
  handleClose,
  formData,
  handleChange,
  handleAddCategory,
  deleteOpen,
  handleCloseDeleteDialog,
  handleConfirmDelete,
  open,
}) => {
  const [snackbarOpen, setSnackbarOpen] = useState(false);

  const handleSnackbarClose = () => {
    setSnackbarOpen(false);
  };

  const handleAddCategoryWithSnackbar = () => {
    handleAddCategory();
    setSnackbarOpen(true);
  };

  return (
    <div>
      <Dialog open={open} onClose={handleClose}>
        <DialogTitle> Add Category</DialogTitle>
        <Button
          aria-label="close"
          onClick={handleClose}
          sx={{
            position: "absolute",
            right: 8,
            top: 8,
            color: "black",
          }}
        >
          <CloseIcon />
        </Button>
        <form>
          <DialogContent dividers>
            <Box
              sx={{ "& .MuiTextField-root": { m: 1, width: "58ch" } }}
              noValidate
              autoComplete="off"
            />
            <TextField
              size="small"
              sx={{ width: "58ch", m: 2 }}
              id="name"
              name="name"
              label="Name"
              type="text"
              autoComplete="current-password"
              variant="outlined"
              value={formData.name}
              onChange={handleChange}
              required
            />
          </DialogContent>
          <DialogActions>
            <Button variant="outlined" onClick={handleClose}>
              Cancel
            </Button>
            <Button variant="contained" onClick={handleAddCategoryWithSnackbar}>
              Save
            </Button>
          </DialogActions>
        </form>
      </Dialog>
      <Snackbar
        open={snackbarOpen}
        autoHideDuration={3000}
        onClose={handleSnackbarClose}
        message="Category added successfully!"
        anchorOrigin={{vertical: 'top', horizontal:"center"}}
      />
      <Dialog open={deleteOpen} onClose={handleCloseDeleteDialog}>
        <DialogTitle> Delete Category</DialogTitle>
        <Button
          aria-label="close"
          onClick={handleClose}
          sx={{
            position: "absolute",
            right: 8,
            top: 8,
            color: "black",
          }}
        >
          <CloseIcon />
        </Button>
        <DialogContent>
          <DialogContentText>
            Are you sure you want to delete the category?
          </DialogContentText>
        </DialogContent>
        <DialogActions>
          <Button onClick={handleCloseDeleteDialog} variant="outlined">
            Cancel
          </Button>
          <Button onClick={handleConfirmDelete} variant="contained">
            Delete
          </Button>
        </DialogActions>
      </Dialog>
    </div>
  );
};

export default Dialogbox;