import { observer } from 'mobx-react-lite';
import { useStore } from '../store';

const Title: React.FC = observer(() => {
  const store = useStore();
  return (
    <h1>
      {store.numberBlocks} Blocks ({store.valid ? 'Valid' : 'Invalid'})
    </h1>
  );
});

export { Title };
