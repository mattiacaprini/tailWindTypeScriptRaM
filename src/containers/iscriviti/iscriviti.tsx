import "../gioco/gioco.scss";
import React, { useState } from "react";
import Header from "../../components/header/header";
import Footer from "../../components/footer/footer";
import imgDefault from "../../img/play.png";
import Account from "../../components/account/account";
import AddPeople from "../../containers/addPeople/addPeople";
import Lista from "../lista/lista";

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
  firstAtleta: boolean;
  countAtleti: number;
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
      firstAtleta: false,
      countAtleti: 1,
    };
  }

  componentDidMount() {}

  addPeopleFunction() {
    this.setState({
      arrAtleti1: [...this.state.arrAtleti1, { nome: "", peso: "", ruolo: "" }],
      countAtleti: this.state.countAtleti + 1,
    });

    if (this.state.countAtleti !== 0) {
      this.setState({ firstAtleta: true });
    }

    console.log("aggiunto:" + this.state.countAtleti);
  }

  delateAtleta(id: number) {
    console.log("indice", id);
    console.log(this.state.arrAtleti1);
    const arrAtletiDaAggiornare = [...this.state.arrAtleti1];
    arrAtletiDaAggiornare.splice(id, 1);
    console.log(arrAtletiDaAggiornare);

    console.log("rimosso:" + this.state.countAtleti);

    if (this.state.countAtleti === 2) {
      this.setState({
        firstAtleta: false,
      });
    }

    this.setState((prevState) => ({
      ...prevState,
      arrAtleti1: arrAtletiDaAggiornare,
      countAtleti: this.state.countAtleti - 1,
    }));
  }

  selectionAtleta(id: number, atleta: Atleta) {
    const arrAtletiDaAggiornare = [...this.state.arrAtleti1];
    arrAtletiDaAggiornare[id] = atleta;

    this.setState((prevState) => ({
      ...prevState,
      arrAtleti1: arrAtletiDaAggiornare,
    }));
  }

  render() {
    // TODO: mettere atleta nello stato

    const atletiInput = this.state.arrAtleti1.map((atleta, i) => {
      return (
        <Account
          onClick={() => this.delateAtleta(i)}
          atleta={atleta}
          onAtletaChange={(atleta) => this.selectionAtleta(i, atleta)}
          firstAtleta={this.state.firstAtleta}
        />
      );
    });

    return (
      <>
        <Header />

        <div className="page">
          {atletiInput}
          <AddPeople
            onClick={() => this.addPeopleFunction()}
            firstAtleta={this.state.firstAtleta}
          />
          <Lista atleta={this.state.arrAtleti1} />
        </div>
        <Footer />
      </>
    );
  }
}

export default Iscriviti;
