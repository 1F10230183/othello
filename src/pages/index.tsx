import { Cell } from '../components/Cell';
import { useGame } from '../hooks/useGame';
import styles from './index.module.css';

const Home = () => {
  const { board, clickCell } = useGame();

  return (
    <div className={styles.container}>
      <div className={styles.board}>
        {board.map((row, y) =>
          row.map((color, x) => (
            <Cell key={`${x}-${y}}`} x={x} y={y} color={color} clickCell={() => clickCell(x, y)} />
          ))
        )}
      </div>
    </div>
  );
};
export default Home;
