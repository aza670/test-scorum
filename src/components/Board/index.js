import React from 'react'
import StubCards from "../StubCards";
import Cards from "../Cards";

const Board = ({ isHide, cards, start, checkCard }) => (
  <div className="container d-flex justify-content-evenly mt-5">
    {start ? (
      cards?.map((card) => (
        <Cards
          key={ card.image } card={ card } isHide={ isHide }
          checkCard={ checkCard }
        />
      ))
    ) :
      <StubCards />
    }
  </div>
)

export default Board
