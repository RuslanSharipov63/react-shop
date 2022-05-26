import { createContext, useReducer } from 'react';
import { reducer } from './reducer';

export const ShopContext = createContext();

const initialState = {
    goods: [],
    loading: true,
    order: [],
    isBasketShow: false,
    alertName: '',
}

export const ContextProvider = ({ children }) => {

    const [value, dispatch] = useReducer(reducer, initialState);

    value.addToBasket = (item) => {
        dispatch({ type: 'ADD_TO_BASKET', payload: item })
    }

    value.addQuantity = (mainId) => {
        dispatch({ type: 'INCREMENT_QUANTITY', payload: { id: mainId } })
    }

    value.removeQuantity = (mainId) => {
        dispatch({ type: 'DECREMENT_QUANTITY', payload: { id: mainId } })
    }

    value.setGoods = (data) => {
        dispatch({ type: 'SET_GOODS', payload: data })
    }

    value.handleBasketShow = () => {
        dispatch({ type: 'TOGGLE_BASKET' })
    }

    value.closeAlert = () => {
        dispatch({ type: 'CLOSE_ALERT' })
    }

    value.removeFromBasket = (mainId) => {
        dispatch({ type: 'REMOVE_FROM_BASKET', payload: { id: mainId } });
    }

    return (
        <ShopContext.Provider value={value}>
            {children}
        </ShopContext.Provider>
    );
}