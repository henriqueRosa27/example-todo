import Container from '@mui/material/Container';
import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';
import { v4 as uuidv4 } from 'uuid';
import { Button, Divider, List, ListItem, Paper, TextField } from '@mui/material';

interface ToDo{
  id: string;
  nome: string
}

const data:ToDo[] = [
  {
    id: uuidv4(),
    nome: "teste"
  },
  {
    id: uuidv4(),
    nome: "teste 2"
  },
  {
    id: uuidv4(),
    nome: "teste 2"
  }
]

export default function App() {
  return (
    <Container maxWidth="sm">
      <Box sx={{ my: 4 }}>
      <Paper style={{padding: 20}}>
        <Typography variant="h4" component="h1" gutterBottom>
            Exemplo App TO-DO
          </Typography>
          <h1>To-Do</h1>
        <List>
          {data.map( todo => {
            return (
              <div key={todo.id}> 
                <ListItem>
                  {todo.nome}
                </ListItem>
                <Divider  component="li" />
              </div>
            )
          })}
        </List>

        <Box sx={{marginTop: 2 }}>
          <TextField fullWidth label="Nome da tarefa"/>
          <Button
            sx={{marginTop: 1}}
            variant="contained" 
            onClick={() => {
              alert("irá adicionar o texto acima")
            }}
          >Adicionar</Button>
        </Box>
      </Paper>
      </Box>
    </Container>
  );
}