import { useState } from 'react';
import styles from './index.module.css';

const Home = () => {
  const [turnColor, setTurnColor] = useState(1);
  //prettier-ignore
  const [board, setBoard] = useState([
    [0,0,0,0,0,0,0,0],
    [0,0,0,0,0,0,0,0],
    [0,0,0,0,0,0,0,0],
    [0,0,0,1,2,0,0,0],
    [0,0,0,2,1,0,0,0],
    [0,0,0,0,0,0,0,0],
    [0,0,0,0,0,0,0,0],
    [0,0,0,0,0,0,0,0],
  ]);
  const numList = [
    [1, 0],
    [-1, 0],
    [1, 0],
    [-1, 0],
    [-1, -1],
    [1, 1],
    [1, -1],
    [-1, 1],
  ];
  const clickCell = (x: number, y: number) => {
    console.log(x, y);
    const newBoard = JSON.parse(JSON.stringify(board));
    for (const n of numList)
      if (board[y + n[0]] !== undefined && board[y + n[0]][x + n[1]] === 3 - turnColor) {
        newBoard[y][x] = turnColor;
        setTurnColor(3 - turnColor);
      }

    setBoard(newBoard);
  };
  return (
    <div className={styles.container}>
      <div className={styles.board}>
        {board.map((row, y) =>
          row.map((colar, x) => (
            <div className={styles.cell} key={`${x}-${y}}`} onClick={() => clickCell(x, y)}>
              {colar !== 0 && (
                <div
                  className={styles.stone}
                  style={{ background: colar === 1 ? '#000' : '#fff' }}
                />
              )}
            </div>
          ))
        )}
      </div>
    </div>
  );
};
export default Home;
