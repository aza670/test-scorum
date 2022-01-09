import React from "react";

const Cards = ({card, checkCard , isHide}) => (
    // eslint-disable-next-line jsx-a11y/click-events-have-key-events,jsx-a11y/no-static-element-interactions
  <div onClick={ () => checkCard(card.value) }>
    <img
      className="card"
      src={
          isHide
            ? 'https://playingcardstop1000.com/wp-content/uploads/2018/10/%D0%94%D0%B6%D0%BE%D0%BA%D0%B5%D1%80-%D0%B8%D0%B3%D1%80%D0%B0%D0%BB%D1%8C%D0%BD%D1%8B%D0%B5-%D0%BA%D0%B0%D1%80%D1%82%D1%8B-%D0%93%D0%BB%D0%B0%D0%B7%D0%B5%D1%82%D0%BD%D1%8B%D0%B5.jpg'
            : card.image
        }
      alt="Example"
    />
  </div>
  );

export default Cards;