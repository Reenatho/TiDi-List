import React, { useState } from "react";
import Form from '../components/Form';
import TodoItem from '../components/TodoItem';
import { Container, List } from '@mui/material';

export default function Home (){

    const [tarefas, setTarefas] = useState([])

    const addTarefa = (tarefa) => {
        setTarefas([...tarefas, tarefa])
    }

    const deleteTarefa = (id) =>{
        
        var filtered = tarefas.filter((tarefa) => tarefa.id !== id)

        setTarefas(filtered)
    }

    const editTarefa = (id, editedText) => {
        var allTarefas = [...tarefas]

        for (var i in allTarefas){
            if(allTarefas[i].id === id){
                allTarefas[i].text = editedText
            }
        }
        setTarefas(allTarefas)
    }

    return(
        <div>
            <Container maxWidth="sm" style={{ marginTop:"1em" }}>
                <Form addTarefa={addTarefa}/>
                <List sx={{marginTop:"1em" }}>
                    {tarefas.map((tarefa)=>
                        <div key={tarefa.id} style={{ marginTop:"1em"}}>
                            <TodoItem  tarefa={tarefa} deleteTarefa={deleteTarefa} editTarefa={editTarefa}/>
                        </div>
                    )}   
                </List>
        
            </Container>
        </div>
    )
}