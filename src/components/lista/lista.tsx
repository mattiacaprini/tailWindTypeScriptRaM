import { react } from "@babel/types";
import React from "react";

interface listProps {}

interface listaStyle {}

class Lista extends React.Component<listProps, listaStyle> {
  constructor(props: listProps) {
    super(props);
    this.state = {};
  }

  render() {
    return <div></div>;
  }
}

export default Lista;
