import "../gioco/gioco.scss";
import React, { useState } from "react";
import Header from "../../components/header/header";
import Footer from "../../components/footer/footer";
import beccato from "../../img/beccato.png";
import smarmellato from "../../img/smarmellato.png";
import imgDefault from "../../img/play.png";

type GiocoProps = {};

type GiocoState = {
  userInput: string;
  casualNumer: number;
  imgSelection: string;
  countTentaive: number;
  tentativeUsed: number;
};

class Gioco extends React.Component<GiocoProps, GiocoState> {
  //sempre questi due parametri

  constructor(props: GiocoProps) {
    super(props);
    this.state = {
      userInput: "string",
      casualNumer: Math.round(Math.random() * 100),
      imgSelection: imgDefault,
      countTentaive: 0,
      tentativeUsed: 0,
    };
  }

  componentDidMount() {
    console.log(this.state.casualNumer);
  }

  confrontoValore(e: any) {
    e.preventDefault();

    if (parseInt(this.state.userInput) === this.state.casualNumer) {
      this.setState({ imgSelection: beccato });
      this.setState({
        tentativeUsed: this.state.countTentaive + 1,
        countTentaive: 0,
      });
    } else {
      this.setState({ imgSelection: smarmellato });
      this.setState({
        countTentaive: this.state.countTentaive + 1,
      });
    }
  }

  render() {
    return (
      <>
        <Header />

        <div className="page">
          <div className="m-2 items-center">
            <div className=" txt text-center p-10 text-xl">
              <span>VERRA' GENERATO UN NUMERO A CASO</span>
              <span>INDOVINALO</span>
              <span>
                HAI TUTTI I TENTATIVI DI CUI NECESSITI PER INDOVINARLO
              </span>
              <span>SFIDA I TUOI AMICI</span>
              <span>
                CHE VINCA CHI IMPIEGA MENO TENTATIVI AD INDOVINARE IL NUMERO
              </span>
              <span>DIVERTITEVI!</span>
            </div>
          </div>

          <div className=" p-10   ">
            <form className="text-xl flex justify-between">
              <input
                className=" rounded-xl mr-5 w-7/12 text-center"
                type="text"
                required
                onChange={
                  (e) => this.setState({ userInput: e.target.value }) //e memorizza quello che scrivi, e lo assegno alla mi avariabile
                }
              ></input>
              <button
                onClick={(e) => this.confrontoValore(e)}
                className="rounded-xl bg-zinc-500 p-2"
              >
                VERIFICA IL NUMERO
              </button>
            </form>

            <div className="w-auto m-20 h-auto">
              <img
                className="w-80 h-80"
                src={this.state.imgSelection}
                alt="."
              />

              <div className=" txt align-center flex justify-between ">
                <span className="mt-10 text-2xl ">
                  TENTATIVI: {this.state.countTentaive}
                </span>
                <span className="mt-10 text-2xl ">
                  PER INDOVINARE HAI IMPIGATO: {this.state.tentativeUsed}{" "}
                  TENTATIVI
                </span>
              </div>
            </div>
          </div>
        </div>

        <Footer />
      </>
    );
  }
}

export default Gioco;
