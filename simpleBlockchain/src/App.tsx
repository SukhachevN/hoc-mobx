import { Transactions } from './components/Transactions';
import { Form } from './components/Form';
import { Title } from './components/Title';
import { Blocks } from './components/Blocks';

import './App.css';

const App = () => (
  <main>
    <Title />
    <Form />
    <Transactions />
    <Blocks />
  </main>
);

export default App;
