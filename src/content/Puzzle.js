import React, { useEffect, useState } from "react";
import ArrowKeysReact from "arrow-keys-react";
import "./Grid.css";
import {
  generateNeighbors,
  genPath,
  genItems,
  setGrid,
  params,
} from "./utils/Grid";

function Puzzle() {
  const [puzParams, setPuzParams] = useState({});
  const [paramsSet, setParamsSet] = useState(false);

  useEffect(() => {
    if (!paramsSet) {
      console.log("setting params, current:",puzParams)
      setPuzParams({
        size: 9 * 9,
        items: [genItems(9 * 9)],
        switcher: 0,
        axis: setGrid(81, "50px") ,
        neighbors: [],
        path: [0],
        boardIsSet: false,
      });
      setParamsSet(true);
    }
  }, [paramsSet]);

  useEffect(() => {
    if (paramsSet) {
      console.log(puzParams.size, puzParams.axis, "params set, setting grid");
      ;
      //setPuzParams({ ...puzParams, axis: setGrid(puzParams.size, "50px") }),

      //setAxis(setGrid(size, "50px"));
      setPuzParams({
        ...puzParams,
        neighbors: generateNeighbors(puzParams.size),
      });
      //setNeighbors(generateNeighbors(size));
    }
  }, [puzParams.switcher, paramsSet]);

  useEffect(() => {
    console.log("setting path")
    if (paramsSet && puzParams.neighbors.length && !puzParams.boardIsSet) {
      setPuzParams({
        ...puzParams,
        path: genPath(puzParams.size, puzParams.neighbors),
      });
      // setPath(genPath(size, neighbors));
      //setPuzParams({ ...puzParams, ["setBoardIsSet"]: true });
      // setBoardIsSet(true);
    }
  }, [puzParams.neighbors, paramsSet]);

  useEffect(() => {
    console.log(
      "setting items"
    )
    if (paramsSet && puzParams.path.length) {
      setPuzParams({
        ...puzParams,
        items: genItems(puzParams.size, puzParams.path, switchEmUp, [
          "x",
          "f",
        ]),
      });

      //setItems(genItems(size, path, size, switchEmUp, ["x", "f"]));
    }
  }, [puzParams.path, paramsSet]);

  function switchEmUp(event) {
    setPuzParams({ ...puzParams, ["switcher"]: event.target.id });
    // setSwitcher(event.target.id);
  }

  window.addEventListener(
    "keydown",
    function (event) {
      if (event.defaultPrevented) {
        return; // Do nothing if the event was already processed
      }

      const cursor = document.querySelector("[name=cursor]");
      console.log(cursor);
      const nextMove = puzParams.path.slice(0, 1);

      switch (event.key) {
        case "Down": // IE/Edge specific value
        case "ArrowDown":
          const x = puzParams.items[0];
          puzParams.items[0] = puzParams.items[8];
          puzParams.items[8] = x;
          console.log("after", puzParams.items);
          console.log("down");
          break;
        case "Up": // IE/Edge specific value
        case "ArrowUp":
          console.log("up");
          break;
        case "Left": // IE/Edge specific value
        case "ArrowLeft":
          console.log("left");
          break;
        case "Right": // IE/Edge specific value
        case "ArrowRight":
          console.log("right");
          break;
        default:
          return; // Quit when this doesn't handle the key event.
      }

      // Cancel the default action to avoid it being handled twice
      event.preventDefault();
    },
    true
  );

  console.log(puzParams);

  return (
    <div
      {...ArrowKeysReact.events}
      tabIndex="1"
      className="puzzleGrid"
      style={{
        display: "grid",
        gridTemplateColumns: `${puzParams.axis}`,
        gridTemplateRows: `${puzParams.axis}`,
        columnGap: "10px",
        rowGap: "15px",
      }}
    >
      {puzParams.items.flat()}
    </div>
  );
}

export default Puzzle;
