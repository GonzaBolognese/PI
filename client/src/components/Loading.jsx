import React from "react";
import style from "../css/loading.scss";

export default function Loader() {
  return (
    <div className={style.spinner}>
      <div className={style.drawing}>
        <h1>LOADING</h1>
        <div className={style.loading-dot}></div>
      </div>
    </div>
  );
}