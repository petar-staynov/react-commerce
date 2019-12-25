import React, {Component} from 'react';
import './ShopPage.scss';
import SHOP_DATA from './shop.data';
import CollectionPreview from "../../CollectionPreview/CollectionPreview";

class ShopPage extends Component {
    constructor(props) {
        super(props);
        this.state = {
            data: SHOP_DATA,
        }
    }

    render() {
        const collections = this.state.data;
        return (
            <div className='shop-page'>
                {
                    collections.map((collection) => {
                        return <CollectionPreview key={collection.id} {...collection}/>
                    })
                }
            </div>
        );
    }
}

export default ShopPage;