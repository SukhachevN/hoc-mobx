import { Button, Input, Grid } from '@chakra-ui/react';
import { observer } from 'mobx-react-lite';
import { store } from '../store';

const TodoAdd = observer(() => (
  <Grid pt={2} templateColumns='5fr 1fr' columnGap='3'>
    <Input
      placeholder='New todo'
      value={store.newTodo}
      onChange={(e) => (store.newTodo = e.target.value)}
    />
    <Button onClick={() => store.addTodo()}>Add Todo</Button>
  </Grid>
));

export { TodoAdd };
