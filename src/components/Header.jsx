import audiophile from "../assets/audiophile2.svg";
import shoping from "../assets/shopping.svg";
function Header() {
  return (
    <>
      <header className="header">
       <div className="hero">
         <img className="img" src={audiophile} alt="" />
        <div className="text">
          <p>HOME</p>
          <p>HEADPHONES</p>
          <p>SPEAKERS</p>
          <p>EARPHONES</p>
        </div>
        <img className="svg" src={shoping} alt="" />
       </div>
        <h1 className="text1">HEADPHONES</h1>
      </header>

    </>
  );
}

export default Header;
