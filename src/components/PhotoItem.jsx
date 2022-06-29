import React from "react";
import MyButton from "./UI/button/MyButton";
import { downloadImage } from "../actions/download";

const PhotoItem = (props) => {
  return (
    <div
      className="item"
      style={{
        backgroundColor: `${props.photo?.avg_color}`,
      }}
    >
      <img src={props.photo?.src?.large} alt={props.photo?.alt} />
      <div className="item-data">
        <a className="item-link" href={props.photo?.photographer_url}>
          {props.photo?.photographer}
        </a>
        <button
          className="item-download"
          onClick={(event) => {
            event.stopPropagation();
            console.log(`event`);
            downloadImage(
              props.photo?.src?.original,
              props.photo?.photographer,
              props.photo?.id
            );
          }}
        >
          Download
        </button>
      </div>
    </div>
  );
};

export default PhotoItem;
