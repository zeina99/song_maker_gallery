import React, { Fragment } from "react";
import Header from "./header/header";
import TileGrid from "./tilegrid/tilegrid";

const galBody = (props) => {
  return (
    <Fragment>
      <Header
        title={props.title}
        description={props.description}
        data={props.data}
      />
      {props.data.map((group) => (
        <TileGrid data={group} key={group.slice(-1)[0]} />
      ))}
    </Fragment>
  );
};

export default galBody;