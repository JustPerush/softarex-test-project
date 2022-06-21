import React from "react";
import classes from "./MyModal.module.scss";

const MyModal = ({ children, visible, setVisible }) => {
  const rootClass = [classes.myModal];
  if (visible) {
    rootClass.push(classes.active);
  }

  return (
    <div className={rootClass.join(" ")} onClick={() => setVisible(false)}>
      <div
        className={classes.myModalContent}
        onClick={(event) => event.stopPropagation()}
      >
        {children}
      </div>
    </div>
  );
};

export default MyModal;
