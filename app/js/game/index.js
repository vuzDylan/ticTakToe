export function checkForWinner(b) {
  for (let i=0;i<3;i++) {
    if (b[0 + (i*3)] === b[1 + (i*3)] && b[1 + (i*3)] === b[2 + (i*3)]) {
      if (b[0 + (i*3)]) {
        return b[0 + (i*3)];
      }
    }
    if (b[0 + i] === b[3 + i] && b[3 + i] === b[6 + i]) {
      if (b[0 + i]) {
        return b[0 + i];
      }
    }
  }
  if (b[0] === b[4] && b[4] === b[8]) {
      if (b[0]) {
        return b[0];
      }
  }
  if (b[2] === b[4] && b[4] === b[6]) {
      if (b[2]) {
        return b[2];
      }
  }
  return 0;
}
