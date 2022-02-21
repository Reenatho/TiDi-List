import React, { useState } from "react";
import { Button, Paper, TextField } from "@mui/material";


export default function Form ({addTarefa}){

    const [ text, setText ] = useState("");
    const [ id, setId] = useState(0);

    const tarefaCreate = (text) =>{
        const tarefaObj = {text: text, id: id};
        setId(id +1)
        addTarefa(tarefaObj)
        setText('')

    }

    return(

        <Paper  style={{ padding:"1em" }}>
            <div style={{ display:"flex", justifyContent:"center"}}>
                <TextField
                    id="outlined-basic"
                    label="Adicione uma tarefa"
                    variant="outlined"
                    fullWidth
                    value={ text }
                    style={{marginRight:"1rem"}}
                    onChange={(e)=> setText(e.target.value)}
                />
                <Button
                    variant="outlined"
                    onClick={()=> tarefaCreate(text)}
                >Adicionar</Button>
            </div>
        </Paper>
    )
}