import React from "react";

function UseArrowKeys() {
  ArrowKeysReact.config({
    left: () => {
      console.log("left key detected.");
    },
    right: () => {
      console.log("right key detected.");
    },
    up: () => {
      console.log("up key detected.");
    },
    down: () => {
      console.log("down key detected.");
    },
  });

  return <div {...ArrowKeysReact.events} tabIndex="1">
      
  </div>;
}
