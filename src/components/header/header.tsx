import logo from "../../img/img_logo.png";
import "./header.scss";

function Header() {
  return (
    <div className="headerSite">
      <div className="insideHeaderUp">
        <div className="container_logo">
          <a href="/">
            <img className="img_logo" src={logo} alt="logo" />
          </a>
        </div>

        <div className="menu">
          <p>
            <a href="/gioco">gioco</a>
          </p>
          <p>
            <a href="/iscriviti">iscriviti</a>
          </p>
          <p className="support_us">
            <a href="/support_us">support us</a>
          </p>
        </div>
      </div>
      <div className="contTitle">
        <div className="title">
          <h1>The Rick and Morty API</h1>
        </div>
      </div>
    </div>
  );
}

export default Header;
