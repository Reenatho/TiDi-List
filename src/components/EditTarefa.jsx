import * as React from 'react';
import Button from '@mui/material/Button';
import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import DialogContentText from '@mui/material/DialogContentText';
import DialogTitle from '@mui/material/DialogTitle';
import Slide from '@mui/material/Slide';
import { TextField, Input } from '@mui/material';
import { useState } from 'react';

const Transition = React.forwardRef(function Transition(props, ref) {
  return <Slide direction="up" ref={ref} {...props} />;
});

export default function EditTarefa({open, dialogHandler, tarefa, editTarefa}) {

  const [editedText, setEditedText] = useState(tarefa.text);

  const textHandler = () => {
    editTarefa(tarefa.id, editedText)
    dialogHandler();
  }

  return (
      
      <Dialog
        open={open}
        TransitionComponent={Transition}
        keepMounted
        onClose={dialogHandler}
        aria-describedby="alert-dialog-slide-description"
        fullWidth
      >
        <DialogTitle>{"Editar descrição da tarefa:"}</DialogTitle>
        <DialogContent>
          <DialogContentText id="alert-dialog-slide-description">
          </DialogContentText>
      
          <TextField fullWidth defaultValue={editedText} onChange={(e)=>setEditedText(e.target.value)} />
          
        </DialogContent>
        <DialogActions>
          <Button onClick={dialogHandler} >Cancelar</Button>
          <Button onClick={textHandler}>Salvar</Button>
        </DialogActions>
      </Dialog>
      
  );
}
