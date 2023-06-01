import React from "react";
import "./footer.css";
//import { GalleryIcon } from "../../utils/iconUtil";
function Footer(props) {
  return (
    <div className={`footer-wrapper`}>
      <div className={`display-grid gap-2`}>
        {/*{GalleryIcon()}*/}
        <span>Gallery</span>
      </div>{" "}
      <div className={`display-grid gap-2`}>
        {/*{GalleryIcon()}*/}
        <span>Gallery</span>
      </div>{" "}
      <div className={`display-grid gap-2`}>
        {/*{GalleryIcon()}*/}
        <span>Gallery</span>
      </div>{" "}
      <div className={`display-grid gap-2`}>
        {/*{GalleryIcon()}*/}
        <span>Gallery</span>
      </div>{" "}
      <div className={`display-grid gap-2`}>
        {/*{GalleryIcon()}*/}
        <span>Gallery</span>
      </div>
    </div>
  );
}

export default Footer;