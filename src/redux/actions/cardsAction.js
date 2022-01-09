import axios from "axios";

export const fetchCards = () =>{
    const cardsValue = {
        JACK: 11,
        QUEEN: 12,
        KING: 13,
        ACE: 14
    }
    return dispatch => {
        try{
            dispatch({type: "FETCH_CARDS"})
            axios("https://deckofcardsapi.com/api/deck/new/draw/?count=2")
                .then(({data}) => {
                            data.cards.map(card => {
                                if (cardsValue[card.value]) {
                                    card.value = cardsValue[card.value]
                                }
                                return card
                            })
                    dispatch({type: "FETCH_CARDS_SUCCESS", payload: data})
                })
        } catch (e){
            dispatch({type: "FETCH_CARDS_FAILED", payload:e, error: true})
        }
    }
}