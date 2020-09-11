import React from 'react';
import '../App.css'
import config from '../config/config.json'

function Content() {

    const productDetails = config.body.carts

    return (
        <div className="center">
            {productDetails.map(item => (
                <React.Fragment key={item.id}>
                    <div style={config.body.productStyle}>
                        <p>{item.productName}</p>
                        <p><img className="product" src={item.image} /></p>
                        <p><strong>Availibilty : </strong>{item.availibilty}</p>
                        <p><strong>Price : </strong>{item.price}</p>
                        <p><strong>Details : </strong>{item.productDetails}</p>
                        <button className="buy" style={config.body.buy}>Buy</button>
                    </div>
                </React.Fragment>

            ))}
        </div>

    );
}

export default Content;
