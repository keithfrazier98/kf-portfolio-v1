import React, { useEffect, useState } from "react";
import "./Puzzle.css";

function Puzzle() {
  const [size, setSize] = useState(9 * 9);
  const [items, setItems] = useState(genItems(size));
  const [switcher, setSwitcher] = useState(0);
  const [axis, setAxis] = useState("");
  const [neighbors, setNeighbors] = useState([]);
  const [path, setPath] = useState([0])

  function generateNeighbors() {
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

  useEffect(() => {
    setGrid();
    setNeighbors(generateNeighbors());

  }, [switcher]);

  useEffect(() => {
    if (neighbors.length) {
      setPath(genPath());
    }
  }, [neighbors]);

  useEffect(()=>{
      if (path.length){
        setItems(genItems(size, path));

      }

  },[path])

  function switchEmUp(event) {
    setSwitcher(event.target.id);
  }

  function genPath() {
    /*
generate a random path array
    - start at index 0 
    - pick a random number from the touching array 
    - move to index of selected number 
    - repeat until the number is the finish number 
  */
    const path = [];
    const ends = [8,17,26,35,44,53,62,71]

    const genRandom = () => Math.floor(Math.random() * 3);
    //const getStep = () => ;
    const nextStep = (num) => {
        console.log(path)
      if (num === size -1) return;
      const random = genRandom();
      console.log(random);
      const step = neighbors[num][random];
      if (step != null && !path.includes(step) && num < step && !ends.includes(step)) {
        console.log(step, "should be truthy");
        path.push(step);
        nextStep(step);
        return step;
      } else {
        console.log(step, "should be falsy");
        nextStep(num);
      }
    };

    nextStep(0);

    console.log(path);
    return path;
  }

  function setGrid() {
    const gridArr = [];

    for (let i = 0; i < Math.sqrt(size); i++) {
      gridArr.push("50px");
    }

    const gridString = gridArr.join(" ");

    setAxis(gridString);
  }

  function reorderItems(switcher) {}

  function genItems(num, path) {
    const style = {
      borderRadius: "50%",
      alignSelf: "stretch",
      //backgroundColor: "blue",
      margin: "3px",
      padding: "7px",
      color: "white",
    };

    return Array.from(Array(num).keys(), (itm, i) => {
        let color
        //console.log(path.length)
        (path.length && path.includes(i))? color = "green" : color ="blue"
      if (i === 0) {
        return (
          <div index={i} id={i} onMouseOver={switchEmUp} style={style, {backgroundColor:{color}}}>
            S
          </div>
        );
      } else if (i === size - 1) {
        return (
          <div index={i} id={i} onMouseOver={switchEmUp} style={style}>
            F
          </div>
        );
      } else {
        return (
          <div index={i} id={i} onMouseOver={switchEmUp} style={style}>
            {i}
          </div>
        );
      }
    });
  }

  return (
    <div
      className="puzzleGrid"
      style={{
        display: "grid",
        gridTemplateColumns: `${axis}`,
        gridTemplateRows: `${axis}`,
        columnGap: "10px",
        rowGap: "15px",
      }}
      id="showoff"
    >
      {items}
    </div>
  );
}

export default Puzzle;
