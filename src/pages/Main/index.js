import React, { useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { fetchCards } from '../../redux/actions/cardsAction'
import Board from '../../components/Board'

const Main = () => {
  const { cards } = useSelector((s) => s.cards.data)
  const [balance, setBalance] = useState(1000)
  const [message, setMessage] = useState('')
  const [isHide, setIsHide] = useState(true)
  const [start, setStart] = useState(false)
  const [button, setButton] = useState(true)
  const dispatch = useDispatch()

  const startGame = () => {
    dispatch(fetchCards())
    setBalance(balance - 50)
    setIsHide(true)
    setStart(true)
    setButton(false)
    setMessage('')
  }

  const checkCard = (selectedCard) => {
    const value = cards.map((el) => el.value)
    const maxValue = Math.max(...value)

    if (+selectedCard === +maxValue) {
      setMessage('You won!')
      setBalance(balance + 100)
    } else {
      setMessage('You loose!')
    }
    setIsHide(false)
    setButton(true)
  }

  return (
    <div className="d-flex flex-column align-items-center">
      <h5>Balance:{balance}</h5>
      <h2>Who won?</h2>
      <p className="text-secondary">Play and try your luck!</p>
      {button && (
      <button
        className="btn btn-warning mt-3 mb-3"
        onClick={ startGame }
        type="button"
      >
        {isHide ? 'Play' : 'Replay'}
      </button>
        )}
      <h2>{message}</h2>
      <Board
        cards={ cards }
        start={ start }
        isHide={ isHide }
        checkCard={ checkCard }
      />
    </div>
  )
}

export default Main
