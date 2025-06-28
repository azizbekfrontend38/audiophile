import Bestimg from "../assets/brophone.png";

const Best = () => {
  return (
    <>
      <section className="mark">
      <div className="borcard">
          <div className="bro">
          <h2 className="brotitke">BRINGING YOU THE <span className="rjg"> BEST</span> AUDIO GEAR</h2>
          <p className="brotext">
            Located at the heart of New York City, Audiophile is the premier
            store for high end headphones, earphones, speakers, and audio
            accessories. We have a large showroom and luxury demonstration rooms
            available for you to browse and experience a wide range of our
            products. Stop by our store to meet some of the fantastic people who
            make Audiophile the best place to buy your portable audio equipment.
          </p>
        </div>
        <img src={Bestimg} alt="" />
      </div>
      </section>
    </>
  );
};

export default Best;
