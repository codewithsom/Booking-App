import "./hotel.css";
import { Navbar } from "../../components/navbar/Navbar";
import { Header } from "../../components/header/Header";
import { MailList } from "../../components/mailList/MailList";
import { Footer } from "../../components/footer/Footer";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faCircleArrowLeft,
  faCircleArrowRight,
  faCircleXmark,
  faLocationDot,
} from "@fortawesome/free-solid-svg-icons";
import { useState } from "react";

export const Hotel = () => {
  const [slideNumber, setSlideNumber] = useState(0);
  const [open, setOpen] = useState(false);

  const photos = [
    {
      src: "https://t-cf.bstatic.com/xdata/images/hotel/max1280x900/166991803.jpg?k=8291efd64625239ce707b393cca07b3c7465cba6e1661aaffc71af313f2bb902&o=&hp=1",
    },
    {
      src: "https://t-cf.bstatic.com/xdata/images/hotel/max1280x900/36661149.jpg?k=eb116d47ca63ea7408024bcdd23be6fc27b352bda0a28a644f92bb66510f557e&o=&hp=1",
    },
    {
      src: "https://t-cf.bstatic.com/xdata/images/hotel/max1280x900/36661308.jpg?k=e6f7a2ee30f53df22b7a162495b28356045a24bc84e3e82744513cc54f4754b6&o=&hp=1",
    },
    {
      src: "https://t-cf.bstatic.com/xdata/images/hotel/max1280x900/165423456.jpg?k=873551317952be852a37b2d4f58d4fd1e822a41305457a81605911e44101f7dc&o=&hp=1",
    },
    {
      src: "https://t-cf.bstatic.com/xdata/images/hotel/max1280x900/36661066.jpg?k=c893afd16200856b9706889c4f5e3aeb7a1785f2c8c9ce0ba85f4c410d88cb51&o=&hp=1",
    },
    {
      src: "https://t-cf.bstatic.com/xdata/images/hotel/max1280x900/168851839.jpg?k=f5eb38c32daac61bc5e906b18ca5305e28cf3f3e41c37b7a91ffd8c82b0b8fb3&o=&hp=1",
    },
  ];

  const handleOpen = (i) => {
    setSlideNumber(i);
    setOpen(true);
  };

  const handleMove = (direction) => {
    let newSlideNumber;

    if (direction === "l") {
      newSlideNumber = slideNumber === 0 ? 5 : slideNumber - 1;
    } else {
      newSlideNumber = slideNumber === 5 ? 0 : slideNumber + 1;
    }

    setSlideNumber(newSlideNumber)
  };

  return (
    <div>
      <Navbar />
      <Header type="list" />
      <div className="hotelContainer">
        {open && (
          <div className="slider">
            <FontAwesomeIcon
              icon={faCircleXmark}
              className="close"
              onClick={() => setOpen(false)}
            />
            <FontAwesomeIcon
              icon={faCircleArrowLeft}
              className="arrow"
              onClick={() => handleMove("l")}
            />
            <div className="sliderWrapper">
              <img src={photos[slideNumber].src} alt="" className="sliderImg" />
            </div>
            <FontAwesomeIcon
              icon={faCircleArrowRight}
              className="arrow"
              onClick={() => handleMove("r")}
            />
          </div>
        )}
        <div className="hotelWrapper">
          <button className="bookNow">Reserve or Book Now!</button>
          <h1 className="hotelTitle">Dera Rawatsar - Heritage Hotel</h1>
          <div className="hotelAddress">
            <FontAwesomeIcon icon={faLocationDot} />
            <span> D-194/C, Vijay Path, Behind Sindhi Camp Bus Station, Bani Park, 302016 Jaipur, India –</span>
          </div>
          <span className="hotelDistance">
            Great location – 1.8 km from center
          </span>
          <span className="hotelPriceHighlight">
            Book a stay over ₹ 8,999 at this property and get a free airport taxi.
          </span>
          <div className="hotelImages">
            {photos.map((photo, i) => (
              <div className="hotelImgWrapper" key={i}>
                <img
                  onClick={() => handleOpen(i)}
                  src={photo.src}
                  alt=""
                  className="hotelImg"
                />
              </div>
            ))}
          </div>
          <div className="hotelDetails">
            <div className="hotelDetailsTexts">
              <h1 className="hotelTitle">Stay in the heart of City</h1>
              <p className="hotelDesc">
              Located in the heritage walled city of Jaipur, this boutique property is just 200 m from the Sindhi Camp Bus Station. It features heritage décor and comes with an outdoor swimming pool. Free Wi-Fi access is provided.
              Fitted with tiled flooring, air-conditioned rooms feature cable TV, a wardrobe and a mini-bar. The private bathroom comes with bath and shower facilities.</p>

              <p>Dera's restaurant serves local Indian delights as well as a continental menu.

              Staff at the 24-hour front desk can assist with ticketing, currency exchange or laundry services. Travel arrangements can be made at the tour desk and complimentary parking spaces are available.</p>

              <p>Dera Rawatsar is 0.9 mi from Jaipur Railway Station and the city center. It is 2.5 mi from the Legislative Assembly and 8.1 mi from Jaipur Airport.</p>

              <p>Couples in particular like the location – they rated it 8.9 for a two-person trip.</p>
            </div>
            <div className="hotelDetailsPrice">
              <h1>Perfect for a 1-night stay!</h1>
              <span>
                Located in the real heart of Jaipur, Highly rated by recent guests (8.8)
              </span>
              <h2>
                <b>₹ 4,500</b> (1-night stay )
              </h2>
              <button>Reserve or Book Now!</button>
            </div>
          </div>
        </div>
        <MailList />
        <Footer />
      </div>
    </div>
  );
};