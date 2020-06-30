import React from "react";
import Tile from "./tile";
import useWidth from "../../generics/useWidth";
import styles from "./tilegrid.module.css";

const tileGrid = (props) => {
  const group_name = props.data.slice(-1);
  const { width } = useWidth();
  return width > 475 ? (
    <div>
      <div className={styles.tg_top_space} />
      <a href="#gallery_top" name="gallery">
        <h2 className={styles.tg_title} id={group_name}>
          {group_name}
        </h2>
        <br />
        <span className={styles.back_finger}>☟</span>
      </a>
      <ul className={styles.tgrid}>
        {props.data.slice(0, -1).map((student, index) => (
          <Tile
            group={group_name}
            st_arr={student}
            key={group_name + student + Math.random().toString()}
            index={index}
          />
        ))}
      </ul>
    </div>
  ) : (
    <div>
      <div className={styles.tg_top_space} />
      <h2 className={styles.tg_title_mobile} id={group_name}>
        {group_name}
      </h2>
      <br />
      <a href="#gallery_top" name="gallery">
        <button
          style={{
            fontSize: "4rem",
            padding: "0",
            transform: "rotate(180deg)",
          }}
        >
          ☟
        </button>
      </a>
      <ul className={styles.tgrid}>
        {props.data.slice(0, -1).map((student, index) => (
          <Tile
            group={group_name}
            st_arr={student}
            key={group_name + student + Math.random().toString()}
            index={index}
          />
        ))}
      </ul>
    </div>
  );
};

export default tileGrid;
