import "./featured.css"

export const Featured = () => {
  return (
    <div className="featured">
      <div className="featuredItem">
        <img
          src="https://t-cf.bstatic.com/xdata/images/city/square250/684765.webp?k=3f7d20034c13ac7686520ac1ccf1621337a1e59860abfd9cbd96f8d66b4fc138&o="
          alt=""
          className="featuredImg"
        />
        <div className="featuredTitles">
          <h1>New Delhi</h1>
          <h2>2914 Properties</h2>
        </div>
      </div>
      
      <div className="featuredItem">
        <img
          src="https://t-cf.bstatic.com/xdata/images/city/square250/684657.webp?k=66dc5035b43e9bb86b756e381e4fec2558064af4a63a8af17836725a854c03ee&o="
          alt=""
          className="featuredImg"
        />
        <div className="featuredTitles">
          <h1>Jaipur</h1>
          <h2>1562 Properties</h2>
        </div>
      </div>
      <div className="featuredItem">
        <img
          src="https://t-cf.bstatic.com/xdata/images/city/square250/684534.webp?k=d1fe86c22f2433f4e2dda14ddcbe80feb024b0fb30305e5684a1241fba5d4cff&o="
          alt=""
          className="featuredImg"
        />
        <div className="featuredTitles">
          <h1>Bangalore</h1>
          <h2>2050 Properties</h2>
        </div>
      </div>
      <div className="featuredItem">
        <img
          src="https://t-cf.bstatic.com/xdata/images/region/square250/49646.webp?k=b7f38878b9164ee38e0b99c4d4646dbea76b7bf4add8464b1aa75e4c9d0efc6e&o="
          alt=""
          className="featuredImg"
        />
        <div className="featuredTitles">
          <h1>Goa</h1>
          <h2>5246 Properties</h2>
        </div>
      </div>
         
    </div>
  );
};
