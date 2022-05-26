import React, { useContext } from 'react';
import { ShopContext } from '../context';

const BasketItem = (props) => {

    const {removeQuantity, addQuantity, removeFromBasket} = useContext(ShopContext);

    return (

        <li
            className="collection-item lictive">
            {props.displayName} <i className='material-icons basket-quantity'
                onClick={() => removeQuantity(props.mainId)}>remove</i> x {props.quantity} <i className='material-icons basket-quantity' onClick={() => addQuantity(props.mainId)}>add</i>= {props.price.regularPrice * props.quantity} руб.

            <span
                href="#!"
                className="secondary-content"
                onClick={() => removeFromBasket(props.mainId)}
            >
                <i className="material-icons basket-delete">close</i>
            </span>
        </li>


    );

}

export default BasketItem;