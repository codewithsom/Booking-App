import "./searchItem.css";

export const SearchItem = () => {
  return (
    <div className="searchItem">
      <img
        src="https://t-cf.bstatic.com/xdata/images/hotel/square600/36661066.webp?k=2fa2cef9ddb7b7b4d526586d23375c86f1ebf4b1e26b22fba68b732ce158fd93&o=&s=1"
        alt=""
        className="siImg"
      />
      <div className="siDesc">
        <h1 className="siTitle">Dera Rawatsar - Heritage Hotel</h1>
        <span className="siDistance">1.8 km from center</span>
        <span className="siTaxiOp">Free airport taxi</span>
        <span className="siSubtitle">
          Jaipur
        </span>
        <span className="siFeatures">
        Located in the heritage walled city of Jaipur, this boutique property is just 656 feet from the Sindhi Camp Bus Station. It features heritage décor and comes with an outdoor swimming pool.
        </span>
        <span className="siCancelOp">Free cancellation </span>
        <span className="siCancelOpSubtitle">
          You can cancel later, so lock in this great price today!
        </span>
      </div>
      <div className="siDetails">
        <div className="siRating">
          <span>Excellent</span>
          <button>8.9</button>
        </div>
        <div className="siDetailTexts">
          <span className="siPrice">₹ 17,850</span>
          <span className="siTaxOp">Includes taxes and fees</span>
          <button className="siCheckButton">See availability</button>
        </div>
      </div>
    </div>
    
  );
};