export const params = {
  size:0,
  items:[],
  switcher:0,
  axis:"",
  neighbors:[],
  path:[0],
  boardIsSet:false
}

export function generateNeighbors(size) {
  let result = [];
  let axisLength = Math.sqrt(size);

  for (let i = 0; i < size; i++) {
    let currentNeighbors = [];
    //top
    i - axisLength > -1
      ? currentNeighbors.push(i - axisLength)
      : currentNeighbors.push(null);

    //right
    i + 1 < size ? currentNeighbors.push(i + 1) : currentNeighbors.push(null);

    //bottom
    i + axisLength < size
      ? currentNeighbors.push(i + axisLength)
      : currentNeighbors.push(null);

    //left
    i - 1 > -1 ? currentNeighbors.push(i - 1) : currentNeighbors.push(null);

    //push neighbors to result
    result.push(currentNeighbors);
  }
  return result;
}

export function genPath(size, neighbors) {
  const path = [];
  const ends = [8, 17, 26, 35, 44, 53, 62, 71];

  const genRandom = () => Math.floor(Math.random() * 3);
  const nextStep = (num) => {
    if (num === size - 1) {
      return;
    }
    const random = genRandom();
    const step = neighbors[num][random];
    if (
      step != null &&
      !path.includes(step) &&
      num < step &&
      !ends.includes(step)
    ) {
      path.push(step);
      nextStep(step);
      return step;
    } else {
      nextStep(num);
    }
  };

  nextStep(0);

  return path;
}

export function genItems(num, path, callback = ()=>{}, content = ["",""]) {
  const items =  Array.from(Array(num).keys(), (itm, i) => {
    let color;
    if (path) {
      path.length && path.includes(i) ? (color = "green") : (color = "blue");
    }
    const style = {
      borderRadius: "50%",
      alignSelf: "stretch",
      backgroundColor: `${color}`,
      margin: "3px",
      padding: "7px",
      color: "white",
    };

    if (i === 0) {
      return (
        <div
          index={i}
          name="cursor"
          id={i}
          onMouseOver={callback}
          style={style}
        >
          {content[0]}
        </div>
      );
    } else if (i === num - 1) {
      return (
        <div index={i} id={i} onMouseOver={callback} style={style}>
          {content[1]}
        </div>
      );
    } else {
      return (
        <div index={i} id={i} onMouseOver={callback} style={style}></div>
      );
    }
  });

  if (items.length === 1){
    return items.flat()
  } else {
    return items
  }
}

export function reorderItems(switcher) {}

export function setGrid(size, cell) {
  const gridArr = [];
  for (let i = 0; i < Math.sqrt(size); i++) {
    gridArr.push(cell);
  }

  const gridString = gridArr.join(" ");
  console.log(gridString)
  return gridString;
}
