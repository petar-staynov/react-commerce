import React, {Component} from 'react';
import './ShopPage.scss';
import SHOP_DATA from './shop.data';

class ShopPage extends Component {
    constructor(props) {
        super(props);
        this.state = {
            data: SHOP_DATA,
        }
    }

    render() {
        return (
            <div>
                <h1>SHOP PAGE</h1>
            </div>
        );
    }
}

export default ShopPage;