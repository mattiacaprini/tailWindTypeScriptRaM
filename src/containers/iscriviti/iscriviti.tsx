import "../gioco/gioco.scss";
import React, { useState } from "react";
import Header from "../../components/header/header";
import Footer from "../../components/footer/footer";
import imgDefault from "../../img/play.png";
import Account from "../../components/account/account";
import AddPeople from "../../containers/addPeople/addPeople";
import Lista from "../lista/lista";
import { func } from "prop-types";
import { NOMEM } from "dns";

type IscrivitiProps = {};

type IscrivitiState = {
  userInput: string;
  casualNumer: number;
  imgSelection: string;
  countTentaive: number;
  tentativeUsed: number;
  atleta1: Atleta;
  arrAtleti1: Atleta[];
  arrAtleta2: [];
};

export interface Atleta {
  nome: string;
  peso: string;
  ruolo: string;
}
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
      atleta1: {
        nome: "",
        peso: "",
        ruolo: "",
      },
      arrAtleti1: [{ nome: "", peso: "", ruolo: "" }],
      arrAtleta2: [],
    };
  }

  componentDidMount() {}

  addPeopleFunction() {
    this.setState({
      arrAtleti1: [...this.state.arrAtleti1, { nome: "", peso: "", ruolo: "" }],
    });
  }

  delateAtleta(id: number) {
    const arrAtletiDaAggiornare = this.state.arrAtleti1;
    arrAtletiDaAggiornare.splice(id, id);
    this.setState({
      arrAtleti1: arrAtletiDaAggiornare,
    });
  }

  selectionAtleta(id: number, atleta: Atleta) {
    const arrAtletiDaAggiornare = this.state.arrAtleti1;
    arrAtletiDaAggiornare[id] = atleta;
    this.setState({
      arrAtleti1: arrAtletiDaAggiornare,
    });
  }

  atletaAggiunto() {}

  render() {
    // TODO: mettere atleta nello stato

    const atletiInput = this.state.arrAtleti1.map((atleta, i) => {
      return (
        <Account
          onClick={() => this.delateAtleta(i)}
          atleta={atleta}
          onAtletaChange={(atleta) => this.selectionAtleta(i, atleta)}
        />
      );
    });

    return (
      <>
        <Header />

        <div className="page">
          {atletiInput}
          <AddPeople onClick={() => this.addPeopleFunction()} />
          <Lista atleta={this.state.arrAtleti1} />
        </div>

        <Footer />
      </>
    );
  }
}

export default Iscriviti;
