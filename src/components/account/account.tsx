import React from "react";
import { Atleta } from "../../containers/iscriviti/iscriviti";
import "./account.scss";

interface AccountProps {
  onAtletaChange: (atleta: Atleta) => void;
  atleta: Atleta;
  onClick: () => void;
  firstAtleta: boolean;
}

interface AccountState {
  atleta: Atleta;
}

class Account extends React.Component<AccountProps, AccountState> {
  constructor(props: AccountProps) {
    super(props);
    this.state = {
      atleta: props.atleta,
    };
  }

  componentDidMount() {}

  render() {
    return (
      <div>
        <div className="h-28 flex justify-center items-center ">
          {/* bg-black  */}
          <form>
            <label>
              NOME :
              <input
                type="text"
                required
                value={this.props.atleta.nome}
                onChange={(e) => {
                  this.setState((prevState) => ({
                    atleta: { ...prevState.atleta, nome: e.target.value },
                  }));

                  this.props.onAtletaChange({
                    ...this.state.atleta,
                    nome: e.target.value,
                  });

                  // this.setState({
                  //   nome: e.target.value,
                  // });
                  // this.props.onNameChange(e.target.value);
                }}
              ></input>
            </label>
            <label>
              PESO [kg] :
              <input
                type="number"
                required
                value={this.props.atleta.peso}
                onChange={(e) => {
                  this.setState((prevState) => ({
                    atleta: { ...prevState.atleta, peso: e.target.value },
                  }));

                  this.props.onAtletaChange({
                    ...this.state.atleta,
                    peso: e.target.value,
                  });

                  // this.setState({
                  //   nome: e.target.value,
                  // });
                  // this.props.onNameChange(e.target.value);
                }}
              ></input>
            </label>
            <label>
              RUOLO :
              <select
                id="framework"
                value={this.props.atleta.ruolo}
                onChange={(e) => {
                  this.setState((prevState) => ({
                    atleta: { ...prevState.atleta, ruolo: e.target.value },
                  }));

                  this.props.onAtletaChange({
                    ...this.state.atleta,
                    ruolo: e.target.value,
                  });

                  // this.setState({
                  //   nome: e.target.value,
                  // });
                  // this.props.onNameChange(e.target.value);
                }}
              >
                <option value="">seleziona</option>
                <option value="interno">interno</option>
                <option value="mediano">mediano</option>
                <option value="esterno">esterno</option>
              </select>
            </label>
          </form>

          {this.props.firstAtleta && (
            <button
              onClick={() => this.props.onClick()}
              className="bg-red-400 ml-20 text-lg delate p-2 "
            >
              Rimuovi atleta
            </button>
          )}
        </div>
      </div>
    );
  }
}

export default Account;
