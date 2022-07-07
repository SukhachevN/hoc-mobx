import { observer } from 'mobx-react-lite';
import { useStore } from '../store';

const Blocks: React.FC = observer(() => {
  const { blocks } = useStore();

  return (
    <div>
      <h2>Blocks</h2>
      <ul className='blocks'>
        {blocks.map(({ hash, transactions }) => (
          <li key={hash}>
            <h3>{hash}</h3>
            <pre>{JSON.stringify(transactions, null, 2)}</pre>
          </li>
        ))}
      </ul>
    </div>
  );
});

export { Blocks };
