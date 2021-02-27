import React from "react";
import Lightbox from "react-image-lightbox";
const SimpleDialog = ({ dialog, setDialog, activeImage }) => {
  return (
    <div>
      {dialog && (
        <Lightbox
          wrapperClassName="lightbox"
          mainSrc={activeImage}
          onCloseRequest={() => setDialog({activeImage: '', show: false})}
        />
      )}
    </div>
  );
};

export default SimpleDialog;
