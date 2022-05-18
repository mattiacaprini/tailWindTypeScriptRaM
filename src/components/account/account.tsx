import React from "react";
import "./account.scss";

interface accountProps {}

interface accountType {
  nome: string;
  peso: string;
  ruolo: string;
}

class Account extends React.Component<accountProps, accountType> {
  constructor(props: accountProps) {
    super(props);
    this.state = {
      nome: "",
      peso: "",
      ruolo: "",
    };
  }

  componentDidMount() {}

  render() {
    return (
      <div className="h-40 flex justify-center items-center bg-black ">
        <form>
          <label>
            NOME :
            <input
              type="text"
              required
              onChange={(e) =>
                this.setState({
                  nome: e.target.value,
                })
              }
            ></input>
          </label>
          <label>
            PESO [kg] :
            <input
              type="text"
              required
              onChange={(e) =>
                this.setState({
                  peso: e.target.value,
                })
              }
            ></input>
          </label>
          <label>
            RUOLO :
            <select id="framework">
              <option value="1">interno</option>
              <option value="2">mediano</option>
              <option value="3">esterno</option>
            </select>
          </label>
        </form>
      </div>
    );
  }
}

export default Account;
