const symbolsMap = {
  // index in the arrays reflects number of zeros added to the number
  "1": [`I`, `X`, `C`, `M`],
  "2": [`II`, `XX`, `CC`, `MM`],
  "3": [`III`, `XXX`, `CCC`, `MMM`],
  "4": [`IV`, `XL`, `CD`, `MMMM`],
  "5": [`V`, `L`, `D`],
  "6": [`VI`, `LX`, `DC`],
  "7": [`VII`, `LXX`, `DCC`],
  "8": [`VIII`, `LXXX`, `DCCC`],
  "9": [`IX`, `XC`, `CM`]
};

const numbersMap = {
  I: 1,
  V: 5,
  X: 10,
  L: 50,
  C: 100,
  D: 500,
  M: 1000
};

function mapNums(v, i) {
  if (v === `0`) {
    return ``;
  }
  return symbolsMap[v][i];
}

function reduceNums(acc, v, i, arr) {
  if (arr[i + 1] > v) {
    //if next value is bigger - subtract next from current
    acc += arr[i + 1] - v;
    return acc;
  } else if (i !== 0 && arr[i - 1] < v) {
    //if previous value is smaller - skip current
    return acc;
  }
  return acc + v;
}

const convertNum = {
  toRoman: num => {
    return (`` + num)
      .split(``)
      .reverse()
      .map(mapNums)
      .reverse()
      .join(``);
  },

  fromRoman: num => {
    return num
      .split(``)
      .map(v => numbersMap[v])
      .reduce(reduceNums, 0);
  }
};
