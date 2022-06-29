import React from "react";

const PhotoItem = (props) => {
  return (
    <div
      className="item"
      style={{
        backgroundColor: `${props.photo?.avg_color}`,
      }}
    >
      <img src={props.photo?.src?.large} alt={props.photo?.alt} />
      <a className="item-link" href={props.photo?.photographer_url}>
        {props.photo?.photographer}
      </a>
    </div>
  );
};

export default PhotoItem;
