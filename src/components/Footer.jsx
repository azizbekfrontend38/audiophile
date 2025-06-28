import audiophile from "../assets/audiophile2.svg";
import fesbok from "../assets/fesbok.png";
import twiter from "../assets/tviter.png";
import instagram from "../assets/instagram.png";
function Footer() {
  return (
    <>
      <section className="footer">
        <div className="fhero">
          <img className="img" src={audiophile} alt="" />
          <div className="text">
            <p>HOME</p>
            <p>HEADPHONES</p>
            <p>SPEAKERS</p>
            <p>EARPHONES</p>
          </div>
        </div>
        <div className="fotercard1" >
          <p className="fotertitle">
            Audiophile is an all in one stop to fulfill your audio needs. We're
            a small team of music lovers and sound specialists who are devoted
            to helping you get the most out of personal audio. Come and visit
            our demo facility - we’re open 7 days a week.
          </p>
          <div className="fotercard">
            <img src={fesbok} alt="" />
            <img src={twiter} alt="" />
            <img src={instagram} alt="" />
          </div>
        </div>
          <p className="fotertitle">Copyright 2021. All Rights Reserved</p>
      </section>
    </>
  );
}

export default Footer;
