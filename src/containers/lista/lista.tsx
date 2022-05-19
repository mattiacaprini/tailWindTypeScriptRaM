import React from "react";
import "./lista.scss";
import { Atleta } from "../../containers/iscriviti/iscriviti";

interface listProps {
  atleta: Atleta[];
}

interface listaState {}

class Lista extends React.Component<listProps, listaState> {
  constructor(props: listProps) {
    super(props);
    this.state = {};
  }

  render() {
    return (
      <>
        <div className="h-auto p-36">
          {/* bg-black */}
          <div className="h-full flex flex-col items-center justify-center txt-list ">
            {/* bg-red-900 */}

            <table>
              <tr>
                <td>NOME</td>
                <td>PESO [kg]</td>
                <td>RUOLO</td>
              </tr>
            </table>

            {this.props.atleta.map((atleta, i) => (
              <>
                <table>
                  <tr>
                    <td>{atleta.nome}</td>
                    <td>{atleta.peso}</td>
                    <td>{atleta.ruolo}</td>
                  </tr>
                </table>
              </>
            ))}
          </div>
        </div>
      </>
    );
  }
}

export default Lista;
