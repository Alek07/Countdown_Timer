import React from "react";
import { FaPlay } from "react-icons/fa";
import { FaPause } from "react-icons/fa";
import { FaRedoAlt } from "react-icons/fa";
import { FaStop } from "react-icons/fa";
import "./buttons_styles.css";

export default function Button(props) {
  return (
    <div>
      <button onClick={props.stop} className="btn_stop">
        <FaPause style={{color: "#A0A0A0"}} />
      </button>
      {!props.started? (
        <button onClick={props.start} className="btn_start">
          <FaPlay style={{ color: "#26E226", marginLeft: "10px"}} size={"1.5em"} />
        </button>
      ) : (
        <button onClick={props.reset} className="btn_reset">
          <FaStop style={{ color: "#FF3333" }} size={"1.5em"} />
        </button>
      )}
      <button onClick={props.resume} className="btn_resume">
        <FaRedoAlt style={{color: "#A0A0A0"}} />
      </button>
    </div>
  );
}
