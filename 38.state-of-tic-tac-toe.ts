// Tic Tac Toe Game State Checker
// flattened the array to string for easy checking
// All invariant conditions are checked with the help of counter variables
// Win condition is just raw dogging but checking who won helps with impossible board states
export const gamestate = (board: Array<string>): string => {
  let x: number = 0
  let n: number = 0
  let o: number = 0
  const bs = board.join('')
  board.forEach((val, _) => {
    let each = val.split('')
    for (let i of each) {
      if (i === "X") {
        x += 1
      }
      else if (i === "O") {
        o += 1
      }
      else {
        n += 1
      }
    }
  })
  const Xcheck = win(bs, "X")
  const Ocheck = win(bs, "O")
  if (o > x) throw new Error("Wrong turn order: O started");
  else if (x > o+1) throw new Error("Wrong turn order: X went twice");
  else if ((Xcheck && Ocheck) || (Xcheck && x === o) || (Ocheck && x === o+1)) throw new Error("Impossible board: game should have ended after the game was won");
  else if (Xcheck || Ocheck) return "win";
  else if (bs.includes(" ")) return "ongoing";
  else return "draw";
}

function win(bs: string, who: string): boolean {
  if ((bs[0]===bs[1] && bs[1]===bs[2] && bs[0] == who) ||
    (bs[3]===bs[4] && bs[4]===bs[5] && bs[3] == who) ||
    (bs[6]===bs[7] && bs[7]===bs[8] && bs[6] == who) ||
    (bs[0]===bs[3] && bs[3]===bs[6] && bs[0] == who) ||
    (bs[1]===bs[4] && bs[4]===bs[7] && bs[1] == who) ||
    (bs[2]===bs[5] && bs[5]===bs[8] && bs[2] == who) ||
    (bs[0]===bs[4] && bs[4]===bs[8] && bs[0] == who) ||
    (bs[2]===bs[4] && bs[4]===bs[6] && bs[2] == who)
  ) return true

  return false
}

//v.2.0 Using a more functional approach with arrays and some() method
//Very declarative, also use filter instead of ifs and for loops and forEaches
//some() returns true if at least 1 pass
//every() returns true only if all pass
export const gamestatev2 = (board: Array<string>): string => {
  const bs = board.join('')
  const xCount = bs.split('').filter(c => c === 'X').length
  const oCount = bs.split('').filter(c => c === 'O').length
  const emptyCount = bs.split('').filter(c => c === ' ').length

  if (oCount > xCount) throw new Error("Wrong turn order: O started");
  if (xCount > oCount + 1) throw new Error("Wrong turn order: X went twice");

  const winConditions = [
    [0, 1, 2], [3, 4, 5], [6, 7, 8], // rows
    [0, 3, 6], [1, 4, 7], [2, 5, 8], // columns
    [0, 4, 8], [2, 4, 6] // diagonals
  ];

  const xWins = winConditions.some(indices => indices.every(i => bs[i] === 'X'));
  const oWins = winConditions.some(indices => indices.every(i => bs[i] === 'O'));

  if (xWins && oWins) throw new Error("Impossible board: game should have ended after the game was won");
  if (xWins && xCount === oCount) throw new Error("Impossible board: game should have ended after the game was won");
  if (oWins && xCount > oCount) throw new Error("Impossible board: game should have ended after the game was won");

  if (xWins || oWins) return "win";
  if (emptyCount > 0) return "ongoing";
  return "draw";
}