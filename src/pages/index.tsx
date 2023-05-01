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
  const directionList = [
    [1, 0],
    [-1, 0],
    [0, 1],
    [0, -1],
    [-1, -1],
    [1, 1],
    [1, -1],
    [-1, 1],
  ];

  const clickCell = (x: number, y: number) => {
    console.log(x, y);
    const newBoard = JSON.parse(JSON.stringify(board));
    const changeStonesList = [];
    for (const n of directionList) {
      console.log(n);
      for (let space = 1; space < 8; space += 1) {
        console.log(space);
        console.table(changeStonesList);
        console.log(turnColor === 1 ? 'kuro' : 'shiro');
        console.table(newBoard);
        if (board[y + n[0] * space] === undefined || board[x + n[1] * space] === undefined) {
          console.log('a');
          break;
        } else if (board[y + n[0] * space][x + n[1] * space] === 0) {
          console.log('b');
          break;
        } else if (board[y + n[0] * space][x + n[1] * space] === 3 - turnColor) {
          console.log('c');
          changeStonesList.push([y + n[0] * space, x + n[1] * space]);
        } else if (space >= 2 && board[y + n[0] * space][x + n[1] * space] === turnColor) {
          console.log('d');
          for (const m of changeStonesList) {
            newBoard[m[0]][m[1]] = turnColor;
          }
          newBoard[y][x] = turnColor;
          break;
        }
      }
    }
    setTurnColor(3 - turnColor);
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
