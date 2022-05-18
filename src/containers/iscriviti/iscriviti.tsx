import "../gioco/gioco.scss";
import React, { useState } from "react";
import Header from "../../components/header/header";
import Footer from "../../components/footer/footer";
import imgDefault from "../../img/play.png";
import Account from "../../components/account/account";

type IscrivitiProps = {};

type IscrivitiState = {
  userInput: string;
  casualNumer: number;
  imgSelection: string;
  countTentaive: number;
  tentativeUsed: number;
};

class Iscriviti extends React.Component<IscrivitiProps, IscrivitiState> {
  //sempre questi due parametri

  constructor(props: IscrivitiProps) {
    super(props);
    this.state = {
      userInput: "string",
      casualNumer: Math.round(Math.random() * 100),
      imgSelection: imgDefault,
      countTentaive: 0,
      tentativeUsed: 0,
    };
  }

  componentDidMount() {}

  render() {
    return (
      <>
        <Header />

        <div className="page">
          <Account></Account>
          <button className="bg-white text-4xl w-10 h-10  rounded-lg">
            <p>+</p>
          </button>

          <div>CIAO</div>
        </div>

        <Footer />
      </>
    );
  }
}

export default Iscriviti;
