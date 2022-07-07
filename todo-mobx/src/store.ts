import { makeAutoObservable } from 'mobx';

interface Todo {
  id: number;
  text: string;
  done: boolean;
}

const removeTodo = (todos: Todo[], delId: number): Todo[] =>
  todos.filter(({ id }) => id !== delId);

const addTodo = (todos: Todo[], text: string): Todo[] => [
  ...todos,
  {
    id: Date.now(),
    text,
    done: false,
  },
];

const url =
  'https://raw.githubusercontent.com/jherr/todos-four-ways/master/data/todos.json';

class Store {
  todos: Todo[] = [];
  newTodo: string = '';

  constructor() {
    makeAutoObservable(this);
  }

  addTodo() {
    this.todos = addTodo(this.todos, this.newTodo);
    this.newTodo = '';
  }

  removeTodo(delId: number) {
    this.todos = removeTodo(this.todos, delId);
  }

  load() {
    fetch(url)
      .then((res) => res.json())
      .then((result) => (this.todos = result));
  }
}

const store = new Store();

export { store };
export type { Todo };
