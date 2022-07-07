import { Button, Input, Flex, Checkbox, Heading } from '@chakra-ui/react';
import { observer } from 'mobx-react-lite';
import { store } from '../store';

const TodoList = observer(() => (
  <>
    <Heading>Todo List</Heading>
    {store.todos.map((todo) => (
      <Flex pt={2} key={todo.id}>
        <Checkbox onClick={() => (todo.done = !todo.done)} />
        <Input
          mx={2}
          value={todo.text}
          onChange={(e) => (todo.text = e.target.value)}
        />
        <Button onClick={() => store.removeTodo(todo.id)}>Delete</Button>
      </Flex>
    ))}
  </>
));

export { TodoList };
