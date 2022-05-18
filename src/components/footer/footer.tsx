import "./footer.scss";
import React from "react";
import axios from "axios";

interface FooterProps {}
class Footer extends React.Component<FooterProps, any> {
  constructor(props: FooterProps) {
    super(props);
    this.state = {
      locaNumber: 0,
      episodes: 0,
      characterNumber: 0,
      userInput: "string",
      casualNumer: 0,
      imgSelection: "",
    };
  }

  componentDidMount() {
    axios
      .get("https://rickandmortyapi.com/api/character/?page=8")
      .then((result: any) => {
        this.setState({
          characterNumber: result.data.info.count,
        });
      });
    axios
      .get("https://rickandmortyapi.com/api/location")
      .then((result: any) => {
        this.setState({
          locaNumber: result.data.info.count,
        });
      });
    axios.get("https://rickandmortyapi.com/api/episode").then((result: any) => {
      this.setState({
        episodes: result.data.info.count,
      });
    });
  }

  render() {
    return (
      <div className="footer">
        <div className="txt_footer">
          <p>
            <span>CHARACTERS: {this.state.characterNumber}</span>
          </p>
          <p>
            <span>LOCATIONS: {this.state.locaNumber}</span>
          </p>

          <h5>EPISODES: {this.state.episodes}</h5>
          <h5>❮❯ by Axel Fuhrmann 2022</h5>
        </div>
      </div>
    );
  }
}

export default Footer;
