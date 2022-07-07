import { observer } from 'mobx-react-lite';
import { useStore } from '../store';

const Transactions: React.FC = observer(() => {
  const { transactions } = useStore();

  return (
    <>
      {!!transactions.length ? (
        <div>
          <h2>Pending Transactions</h2>
          <ul>
            {transactions.map((transaction) => (
              <li key={Math.random() * 1000}>{transaction}</li>
            ))}
          </ul>
        </div>
      ) : (
        <></>
      )}
    </>
  );
});

export { Transactions };
