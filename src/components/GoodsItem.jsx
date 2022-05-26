import React from 'react';
import { useContext } from 'react';
import { ShopContext } from '../context';

const GoodsItem = (props) => {
    const { mainId, displayName, displayDescription, price, displayAssets } = props;

    const { addToBasket } = useContext(ShopContext);

    return (

        <div className="card" id={mainId}>
            <div className="card-image">
                <img src={displayAssets[0].full_background} alt={displayName} />

            </div>
            <div className="card-content">
                <span className="card-title">{displayName}</span>
                <p>{displayDescription}</p>
            </div>
            <div className="card-action">
                <button className="btn" onClick={() => addToBasket({ mainId, displayName, price })}>Купить</button>
                <span className='right' style={{ fontSize: '1.8rem' }}>{price.regularPrice} руб.</span>
            </div>
        </div>

    );
}

export default GoodsItem;