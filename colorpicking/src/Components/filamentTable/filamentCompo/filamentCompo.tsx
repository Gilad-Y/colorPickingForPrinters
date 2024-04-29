import { filament } from "../../../models/filamentModel";
import "./filamentCompo.css";
import React from "react";
interface props {
  filament: filament | [number, number];
}
function FilamentCompo(props: props): JSX.Element {
  return (
    <div
      className="filamentCompo"
      onClick={() => {
        console.log(props.filament);
      }}
    ></div>
  );
}

export default FilamentCompo;
