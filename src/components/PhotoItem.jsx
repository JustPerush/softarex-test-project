import React from "react";

const PhotoItem = (props) => {
  return (
    <div className="item">
      <a href={props.photo?.url}>
        <img src={props.photo?.src?.original} alt={props.photo?.alt} />
      </a>
      <a className="item-link" href={props.photo?.photographer_url}>
        {props.photo?.photographer}
      </a>
    </div>
  );
};

export default PhotoItem;
