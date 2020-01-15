import React from 'react';
import {Route} from "react-router-dom";
import {firestore, getCollections} from "../../../firebase/firebase.utils";
import {UpdateCollections} from "../../../redux/collections/collectionActions";
import {connect} from 'react-redux';

import CollectionsOverview from "../../CollectionsOverview/CollectionsOverview";
import CollectionPage from "../CollectionPage/CollectionPage";


class ShopPage extends React.Component {
    unsubscribeFromAuthSnapshot = null;

    componentDidMount() {
        const {updateCollections} = this.props;
        const collectionRef = firestore.collection('collections');

        this.unsubscribeFromAuthSnapshot =
            collectionRef.onSnapshot(async snapshot => {
                const collectionsMap = getCollections(snapshot);
                updateCollections(collectionsMap);
            });
    }

    render() {
        let {match, collections, ...otherProps} = this.props;
        return (
            <div className='shop-page'>
                <Route exact path={`${match.path}`} component={CollectionsOverview}/>
                <Route path={`${match.path}/:collectionName`} component={CollectionPage}/>
            </div>
        );
    }
}

const mapDispatchToProps = dispatch => ({
    updateCollections: collectionsMap => dispatch(UpdateCollections(collectionsMap))
});


export default connect(
    null,
    mapDispatchToProps
)(ShopPage)